import Head from 'next/head'
import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCertificate, FaBriefcase, FaMicrophone, FaCode, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'
import siteMetadata from '../data/siteMetadata'

const typeColors = {
  offensive: 'border-l-danger',
  management: 'border-l-info',
  engineering: 'border-l-success'
}

const typeBadges = {
  offensive: 'tag-red',
  management: 'tag-blue',
  engineering: 'tag-green'
}

export default function About() {
  return (
    <>
      <Head>
        <title>About | {siteMetadata.author}</title>
        <meta name="description" content={siteMetadata.profile.summary} />
      </Head>

      {/* Hero Header */}
      <section className="py-16 px-4 border-b border-dark-border-subtle">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/images/adam-nurudini.jpg"
                  alt={siteMetadata.author}
                  className="w-20 h-20 rounded-full object-cover border-2 border-accent/50"
                />
                <div>
                  <h1 className="text-3xl font-bold text-dark-text font-sans">{siteMetadata.author}</h1>
                </div>
              </div>
              <p className="text-lg text-accent font-mono mb-3">{siteMetadata.profile.headline}</p>
              <div className="flex items-center gap-2 text-dark-muted text-sm mb-4">
                <FaMapMarkerAlt className="text-accent" size={12} />
                <span>{siteMetadata.location}</span>
              </div>
              <p className="text-dark-muted text-sm leading-relaxed mb-6">
                {siteMetadata.profile.summary}
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                <a href={siteMetadata.github} target="_blank" rel="noopener noreferrer"
                   className="text-dark-faded hover:text-accent transition-colors p-1">
                  <FaGithub size={16} />
                </a>
                <a href={siteMetadata.twitter} target="_blank" rel="noopener noreferrer"
                   className="text-dark-faded hover:text-accent transition-colors p-1">
                  <FaTwitter size={16} />
                </a>
                <a href={siteMetadata.linkedin} target="_blank" rel="noopener noreferrer"
                   className="text-dark-faded hover:text-accent transition-colors p-1">
                  <FaLinkedin size={16} />
                </a>
                <a href={`mailto:${siteMetadata.email}`}
                   className="text-dark-faded hover:text-accent transition-colors p-1">
                  <FaEnvelope size={16} />
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="terminal w-full md:w-72">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className="terminal-dot red" />
                  <div className="terminal-dot yellow" />
                  <div className="terminal-dot green" />
                </div>
                <span className="terminal-title">stats</span>
              </div>
              <div className="terminal-body text-xs space-y-1.5">
                <div><span className="text-accent">EXPERIENCE:</span> <span className="text-dark-text">10+ years</span></div>
                <div><span className="text-accent">CVEs:</span> <span className="text-dark-text">{siteMetadata.cves.length} published</span></div>
                <div><span className="text-accent">CERTS:</span> <span className="text-dark-text">{siteMetadata.certifications.length} active</span></div>
                <div><span className="text-accent">ROLES:</span> <span className="text-dark-text">{siteMetadata.experience.length} positions</span></div>
                <div><span className="text-accent">STATUS:</span> <span className="text-success">Available</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-semibold text-dark-text mb-6 font-sans flex items-center gap-2">
            <span className="text-accent">▸</span> Career Highlights
          </h2>
          <ul className="space-y-2">
            {siteMetadata.profile.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start text-dark-muted text-sm">
                <span className="text-accent mr-3 mt-0.5">→</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-12 px-4 border-t border-dark-border-subtle">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-semibold text-dark-text mb-8 font-sans flex items-center gap-2">
            <FaBriefcase className="text-accent" size={14} /> Professional Experience
          </h2>
          <div className="space-y-4">
            {siteMetadata.experience.map((exp, idx) => (
              <div key={idx} className={`card border-l-2 ${typeColors[exp.type] || 'border-l-dark-border'} rounded-l-none p-5`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-dark-text font-sans">{exp.role}</h3>
                      <span className={`tag text-[10px] py-0 ${typeBadges[exp.type] || ''}`}>
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-accent text-sm">{exp.company}</p>
                    <p className="text-dark-faded text-xs">{exp.location}</p>
                  </div>
                  <div className="text-dark-faded text-xs font-mono whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-1">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-dark-muted text-xs flex items-start">
                      <span className="text-dark-faded mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 px-4 border-t border-dark-border-subtle">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-semibold text-dark-text font-sans flex items-center gap-2">
              <FaCertificate className="text-accent" size={14} /> Certifications
            </h2>
            <a
              href="https://www.credly.com/users/adam-nurudini/badges"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-600 text-xs flex items-center gap-1"
            >
              View all on Credly <FaExternalLinkAlt size={10} />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {siteMetadata.certifications.map((cert, idx) => (
              <a
                key={idx}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-interactive p-4 flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-accent-glow border border-accent/30 rounded flex items-center justify-center text-accent font-bold text-xs font-mono group-hover:bg-accent/20 transition-colors">
                  {cert.name.substring(0, 4)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-dark-text font-semibold text-sm group-hover:text-accent transition-colors">{cert.name}</h3>
                    {cert.active && <span className="text-success text-xs">✓</span>}
                    <FaExternalLinkAlt size={9} className="text-dark-faded opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-dark-muted text-xs truncate">{cert.fullName}</p>
                  <p className="text-dark-faded text-xs">{cert.provider} • {cert.year}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12 px-4 border-t border-dark-border-subtle">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-semibold text-dark-text mb-8 font-sans flex items-center gap-2">
            <FaCode className="text-accent" size={14} /> Technologies & Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(siteMetadata.technologies).map(([category, tools]) => (
              <div key={category} className="card p-4">
                <h3 className="text-xs font-semibold text-accent mb-3 uppercase tracking-wider">{category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {tools.map((tool, idx) => (
                    <span key={idx} className="tag text-[10px]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking */}
      <section className="py-12 px-4 border-t border-dark-border-subtle">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-semibold text-dark-text mb-8 font-sans flex items-center gap-2">
            <FaMicrophone className="text-accent" size={14} /> Speaking & Community
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {siteMetadata.speaking.map((event, idx) => (
              <div key={idx} className="flex items-center text-dark-muted text-sm p-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                <span>{event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CVE CTA */}
      <section className="py-12 px-4 border-t border-dark-border-subtle">
        <div className="max-w-4xl mx-auto">
          <div className="card p-6 border-accent/20 bg-accent-glow/30">
            <h2 className="text-lg font-semibold text-dark-text mb-2 font-sans">Security Research</h2>
            <p className="text-dark-muted text-sm mb-4">
              Published {siteMetadata.cves.length} CVEs including critical vulnerabilities in enterprise software.
              Research focuses on web application security, API vulnerabilities, and network management systems.
            </p>
            <Link href="/cves" className="inline-flex items-center text-accent hover:text-accent-600 text-sm gap-1">
              View CVE Research <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 border-t border-dark-border-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-semibold text-dark-text mb-3 font-sans">Let's Connect</h2>
          <p className="text-dark-muted text-sm mb-6 max-w-lg mx-auto">
            Interested in security consulting, penetration testing, or vulnerability research collaboration?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`mailto:${siteMetadata.email}`} className="btn btn-primary">
              Get in Touch
            </a>
            <a href={siteMetadata.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
