import Head from 'next/head'
import Link from 'next/link'
import { FaBug, FaShieldAlt, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'
import siteMetadata from '../data/siteMetadata'

export default function CVEs() {
  const cves = siteMetadata.cves

  const severityStyles = {
    Critical: 'severity-critical',
    High: 'severity-high',
    Medium: 'severity-medium',
    Low: 'tag-green',
  }

  const cvssColor = (score) => {
    const num = parseFloat(score)
    if (num >= 9) return 'text-danger'
    if (num >= 7) return 'text-warning'
    if (num >= 4) return 'text-info'
    return 'text-success'
  }

  return (
    <>
      <Head>
        <title>CVE Discoveries | {siteMetadata.title}</title>
        <meta name="description" content="Documented CVE vulnerabilities discovered through security research" />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <FaBug className="text-accent" />
            <h1 className="text-2xl font-bold text-dark-text font-sans">
              CVE Discoveries
            </h1>
          </div>
          <p className="text-dark-muted text-sm max-w-2xl">
            Vulnerabilities discovered and responsibly disclosed. Each CVE represents
            a real security issue that was fixed to protect users.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          <div className="card p-4 text-center">
            <div className="text-2xl font-bold text-accent font-mono">{cves.length}</div>
            <div className="text-dark-faded text-xs">Total CVEs</div>
          </div>
          <div className="card p-4 text-center">
            <div className="text-2xl font-bold text-danger font-mono">
              {cves.filter(c => c.severity === 'Critical').length}
            </div>
            <div className="text-dark-faded text-xs">Critical</div>
          </div>
          <div className="card p-4 text-center">
            <div className="text-2xl font-bold text-warning font-mono">
              {cves.filter(c => c.severity === 'High').length}
            </div>
            <div className="text-dark-faded text-xs">High</div>
          </div>
          <div className="card p-4 text-center">
            <div className="text-2xl font-bold text-success font-mono">100%</div>
            <div className="text-dark-faded text-xs">Disclosed</div>
          </div>
        </div>

        {/* CVE List */}
        <div className="space-y-4">
          {cves.map((cve) => (
            <div key={cve.id} className="card p-5 card-interactive">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <code className="text-accent font-semibold">{cve.id}</code>
                  <span className={`px-2 py-0.5 rounded text-xs font-semibold ${severityStyles[cve.severity]}`}>
                    {cve.severity}
                  </span>
                  <span className={`font-mono text-sm font-bold ${cvssColor(cve.cvss)}`}>
                    {cve.cvss}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-base font-semibold text-dark-text mb-2 font-sans">
                {cve.title}
              </h2>

              {/* Description */}
              <p className="text-dark-muted text-sm mb-4">
                {cve.description}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs mb-4">
                <div>
                  <span className="text-dark-faded">Product:</span>
                  <span className="text-dark-muted ml-1">{cve.product}</span>
                </div>
                <div>
                  <span className="text-dark-faded">Affected:</span>
                  <span className="text-dark-muted ml-1">{cve.versions}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://www.cve.org/CVERecord?id=${cve.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-accent-600 text-xs gap-1"
                >
                  View on CVE.org <FaExternalLinkAlt size={10} />
                </a>
                <Link
                  href={`/blog/${cve.id.toLowerCase()}`}
                  className="inline-flex items-center text-accent hover:text-accent-600 text-xs gap-1"
                >
                  Read Writeup <FaArrowRight size={10} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Disclosure */}
        <div className="mt-10 card p-5 border-accent/20 bg-accent-glow/30">
          <div className="flex items-start gap-3">
            <FaShieldAlt className="text-accent flex-shrink-0 mt-0.5" size={16} />
            <div>
              <h3 className="text-sm font-semibold text-dark-text mb-1 font-sans">Responsible Disclosure</h3>
              <p className="text-dark-muted text-xs">
                All vulnerabilities were discovered through ethical security research
                and responsibly disclosed to affected vendors before public release.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
