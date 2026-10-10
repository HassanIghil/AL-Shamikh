import Link from 'next/link';
import '@/components/legal.css';
export default function NotFound() {
  return <main className="legal-page container"><span className="eyebrow">404</span><h1>Page not found</h1><p>This link may have changed. Return home or explore our shelving solutions.</p><Link className="button button-primary" href="/en">Back to home</Link></main>;
}
