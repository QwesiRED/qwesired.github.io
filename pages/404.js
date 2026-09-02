import Head from 'next/head'
import Link from 'next/link'
import { FaHome, FaSearch } from 'react-icons/fa'
import siteMetadata from '../data/siteMetadata'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | {siteMetadata.title}</title>
      </Head>

      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="terminal mb-8 text-left">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot red" />
                <div className="terminal-dot yellow" />
                <div className="terminal-dot green" />
              </div>
              <span className="terminal-title">error</span>
            </div>
            <div className="terminal-body text-xs space-y-1">
              <div><span className="text-accent">$</span> <span className="text-dark-text">curl -I /requested-page</span></div>
              <div className="text-danger">HTTP/1.1 404 Not Found</div>
              <div className="text-dark-muted">The page you're looking for doesn't exist.</div>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-dark-text mb-2 font-sans">404</h1>
          <p className="text-dark-muted mb-6">
            Looks like this page has been moved or doesn't exist.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn btn-primary flex items-center gap-2">
              <FaHome size={14} /> Back Home
            </Link>
            <Link href="/search" className="btn btn-outline flex items-center gap-2">
              <FaSearch size={14} /> Search
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
