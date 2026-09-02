import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaRss } from 'react-icons/fa'
import siteMetadata from '../data/siteMetadata'

export default function Footer({ recentPosts = [] }) {
  const siteLinks = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/cves', label: 'CVEs' },
    { href: '/tools', label: 'Tools' },
    { href: '/ctf', label: 'CTF Writeups' },
    { href: '/talks', label: 'Talks' },
    { href: '/about', label: 'About' },
  ]

  const popularTopics = [
    '#vulnerability-research',
    '#penetration-testing',
    '#web-security',
    '#exploit-development',
    '#red-team',
    '#appsec',
  ]

  return (
    <footer className="border-t border-dark-border-subtle bg-dark-bg mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Branding */}
          <div>
            <div className="font-mono text-sm mb-3">
              <span className="text-dark-muted">[</span>
              <span className="text-accent">qwesired</span>
              <span className="text-dark-muted">@sh]</span>
              <span className="text-success">$</span>
            </div>
            <p className="text-dark-muted text-sm leading-relaxed mb-4">
              Offensive security research, exploit development, and CVE disclosures by {siteMetadata.author}.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href={siteMetadata.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-faded hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href={siteMetadata.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-faded hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href={siteMetadata.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-faded hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href={`mailto:${siteMetadata.email}`}
                className="text-dark-faded hover:text-accent transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={16} />
              </a>
              <a
                href="/feed.xml"
                className="text-dark-faded hover:text-accent transition-colors"
                aria-label="RSS Feed"
              >
                <FaRss size={14} />
              </a>
            </div>
          </div>

          {/* Site Links */}
          <div>
            <h4 className="text-dark-text text-sm font-semibold mb-4">Site</h4>
            <ul className="space-y-2">
              {siteLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-muted hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent CVEs */}
          <div>
            <h4 className="text-dark-text text-sm font-semibold mb-4">Recent CVEs</h4>
            <ul className="space-y-2">
              {siteMetadata.cves.slice(0, 4).map(cve => (
                <li key={cve.id}>
                  <Link
                    href={`/blog/${cve.id.toLowerCase()}`}
                    className="text-dark-muted hover:text-accent transition-colors text-sm block truncate"
                  >
                    {cve.id}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Topics */}
          <div>
            <h4 className="text-dark-text text-sm font-semibold mb-4">Topics</h4>
            <div className="flex flex-wrap gap-2">
              {popularTopics.map(topic => (
                <span
                  key={topic}
                  className="text-accent text-xs hover:text-accent-400 cursor-default"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-dark-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-faded text-xs">
            &copy; {new Date().getFullYear()} {siteMetadata.author} (qwesired). All rights reserved.
          </p>
          <p className="text-dark-faded text-xs font-mono">
            Built with Next.js • static export
          </p>
        </div>
      </div>
    </footer>
  )
}
