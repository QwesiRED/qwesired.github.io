import { FaExternalLinkAlt } from 'react-icons/fa'

export default function CVECard({ cve }) {
  const severityStyles = {
    Critical: 'bg-danger text-white',
    High: 'bg-warning text-dark-bg',
    Medium: 'bg-info text-white',
    Low: 'bg-success text-dark-bg',
  }

  return (
    <div className="py-4 border-b border-dark-border-subtle last:border-b-0">
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <a
          href={`https://www.cve.org/CVERecord?id=${cve.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-200 text-sm font-mono flex items-center gap-1.5"
        >
          {cve.id} <FaExternalLinkAlt size={9} className="text-dark-faded" />
        </a>
        <span className={`px-2 py-0.5 rounded text-xs font-medium ${severityStyles[cve.severity]}`}>
          {cve.severity.toUpperCase()}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-sm font-medium text-dark-text mb-2">
        {cve.title}
      </h3>

      {/* Meta */}
      <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-dark-muted">
        <span>{cve.product}</span>
        <span>{cve.versions}</span>
        {cve.cvss && (
          <span className="font-mono text-dark-text">CVSS {cve.cvss}</span>
        )}
      </div>
    </div>
  )
}
