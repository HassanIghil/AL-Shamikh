import type { Metadata } from 'next';
import NotFound from '../not-found';

// Cloudflare Pages serves the closest 404.html for a missing path under /en/.
export const metadata: Metadata = {
  title: { absolute: 'Page not found | Al Shamikh' },
  description: 'The requested English page could not be found.',
  robots: { index: false, follow: false },
};

export default NotFound;
