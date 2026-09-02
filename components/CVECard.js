import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function CVECard({ cve }) {
  const severityStyles = {
    Critical: 'severity-critical',
    High: 'severity-high',
    Medium: 'severity-medium',
    Low: 'tag-green',
  }

  const cvssColor = parseFloat(cve.cvss) >= 9 ? 'text-danger' :
                    parseFloat(cve.cvss) >= 7 ? 'text-warning' :
                    parseFloat(cve.cvss) >= 4 ? 'text-info' : 'text-success'

  return (
    <div className="card p-5 card-interactive">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <code className="text-accent text-sm font-semibold">{cve.id}</code>
        <span className={`px-2 py-0.5 rounded text-xs font-semibold ${severityStyles[cve.severity]}`}>
          {cve.severity}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-dark-text mb-3 font-sans">
        {cve.title}
      </h3>

      {/* Meta info */}
      <div className="space-y-1.5 text-xs mb-4">
        <div className="flex">
          <span className="text-dark-faded w-16">Product:</span>
          <span className="text-dark-muted">{cve.product}</span>
        </div>
        <div className="flex">
          <span className="text-dark-faded w-16">Versions:</span>
          <span className="text-dark-muted">{cve.versions}</span>
        </div>
        {cve.cvss && (
          <div className="flex">
            <span className="text-dark-faded w-16">CVSS:</span>
            <span className={`font-mono font-bold ${cvssColor}`}>{cve.cvss}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-dark-muted text-sm mb-4 line-clamp-2">
        {cve.description}
      </p>

      {/* Link */}
      <a
        href={`https://www.cve.org/CVERecord?id=${cve.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-accent hover:text-accent-600 text-xs transition-colors"
      >
        View on CVE.org <FaExternalLinkAlt className="ml-1.5" size={10} />
      </a>
    </div>
  )
}
