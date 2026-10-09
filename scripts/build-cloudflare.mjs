import { readFile, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const isWorkersBuild = process.env.WORKERS_CI === '1';
const env = { ...process.env };

// Local builds default to preview-safe SEO output. Workers Builds must set
// CLOUDFLARE_DEPLOYMENT_ENV=production explicitly for their production trigger.
if (!isWorkersBuild) env.CLOUDFLARE_DEPLOYMENT_ENV ??= 'preview';

// OpenNext 1.20.9 does not inline Next 16.4's preview-props manifest. Next
// reads it when rendering not-found responses, which otherwise throws inside
// workerd. Keep this narrowly scoped and fail clearly if upstream changes the
// known source pattern so the compatibility patch can be revisited.
const manifestPatchPath = new URL(
  '../node_modules/@opennextjs/cloudflare/dist/cli/build/patches/plugins/load-manifest.js',
  import.meta.url,
);
const manifestSource = await readFile(manifestPatchPath, 'utf8');
const oldManifestGlob = '**/{*-manifest,required-server-files,prefetch-hints}.json';
const next16ManifestGlob = '**/{*-manifest,required-server-files,prefetch-hints,preview-props}.json';
if (!manifestSource.includes(next16ManifestGlob)) {
  if (!manifestSource.includes(oldManifestGlob)) {
    throw new Error('OpenNext load-manifest patch target changed; review Next 16.4 preview-props compatibility.');
  }
  await writeFile(manifestPatchPath, manifestSource.replace(oldManifestGlob, next16ManifestGlob));
}

const openNextCli = fileURLToPath(
  new URL('../node_modules/@opennextjs/cloudflare/dist/cli/index.js', import.meta.url),
);
const result = spawnSync(process.execPath, [openNextCli, 'build'], {
  cwd: fileURLToPath(new URL('..', import.meta.url)),
  env,
  stdio: 'inherit',
});

if (result.error) {
  console.error(result.error);
  process.exit(1);
}

process.exit(result.status ?? 1);
