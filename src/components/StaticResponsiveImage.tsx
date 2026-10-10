import type { ImgHTMLAttributes } from 'react';

type StaticResponsiveImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'alt'> & {
  alt: string;
  variants: readonly { src: string; width: number }[];
};

// Prebuilt files in /public work on Cloudflare Pages without an image server.
export function StaticResponsiveImage({ alt, variants, sizes, style, loading = 'lazy', decoding = 'async', ...props }: StaticResponsiveImageProps) {
  const largest = variants[variants.length - 1];
  return (
    <img
      {...props}
      src={largest.src}
      srcSet={variants.map(({ src, width }) => `${src} ${width}w`).join(', ')}
      sizes={sizes}
      alt={alt}
      loading={loading}
      decoding={decoding}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', ...style }}
    />
  );
}
