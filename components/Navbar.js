import Link from 'next/link'
import { useState } from 'react'
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaRss, FaChevronDown, FaSearch } from 'react-icons/fa'
import siteMetadata from '../data/siteMetadata'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  const mainLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/cves', label: 'CVEs' },
  ]

  const resourceLinks = [
    { href: '/tools', label: 'Tools' },
    { href: '/ctf', label: 'CTF Writeups' },
    { href: '/talks', label: 'Talks' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-dark-bg/95 backdrop-blur-sm border-b border-dark-border-subtle">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center font-mono text-sm group">
            <span className="text-accent">qwesired</span>
            <span className="text-dark-muted">@sh:</span>
            <span className="text-dark-text">~</span>
            <span className="text-dark-muted">#</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            {mainLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark-muted hover:text-dark-text transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                onBlur={() => setTimeout(() => setResourcesOpen(false), 150)}
                className="flex items-center text-dark-muted hover:text-dark-text transition-colors text-sm gap-1"
              >
                Resources <FaChevronDown size={10} className={`transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-2 py-2 w-40 bg-dark-card border border-dark-border rounded-md shadow-lg">
                  {resourceLinks.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-dark-muted hover:text-accent hover:bg-dark-elevated transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="/search"
              className="text-dark-faded hover:text-accent transition-colors p-2"
              title="Search"
            >
              <FaSearch size={14} />
            </Link>
            <a
              href={siteMetadata.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-faded hover:text-accent transition-colors p-2"
              title="GitHub"
            >
              <FaGithub size={15} />
            </a>
            <a
              href={siteMetadata.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-faded hover:text-accent transition-colors p-2"
              title="Twitter"
            >
              <FaTwitter size={15} />
            </a>
            <a
              href={siteMetadata.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-faded hover:text-accent transition-colors p-2"
              title="LinkedIn"
            >
              <FaLinkedin size={15} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-dark-muted hover:text-accent p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-dark-border-subtle">
            <div className="space-y-1">
              {mainLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 px-2 text-dark-muted hover:text-accent hover:bg-dark-elevated rounded transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 pb-1 px-2 text-xs text-dark-faded uppercase tracking-wider">Resources</div>
              {resourceLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 px-4 text-dark-muted hover:text-accent hover:bg-dark-elevated rounded transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4 pt-4 mt-4 border-t border-dark-border-subtle px-2">
              <Link href="/search" className="text-dark-faded hover:text-accent p-1">
                <FaSearch size={14} />
              </Link>
              <a href={siteMetadata.github} target="_blank" rel="noopener noreferrer" className="text-dark-faded hover:text-accent p-1">
                <FaGithub size={15} />
              </a>
              <a href={siteMetadata.twitter} target="_blank" rel="noopener noreferrer" className="text-dark-faded hover:text-accent p-1">
                <FaTwitter size={15} />
              </a>
              <a href={siteMetadata.linkedin} target="_blank" rel="noopener noreferrer" className="text-dark-faded hover:text-accent p-1">
                <FaLinkedin size={15} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
