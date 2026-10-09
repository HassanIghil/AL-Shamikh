import { defineCloudflareConfig } from '@opennextjs/cloudflare';
import staticAssetsIncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache';

// The site is statically generated and does not use ISR or on-demand
// revalidation, so Workers Static Assets provide a read-only cache without
// provisioning R2, KV, D1, or Durable Objects.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
