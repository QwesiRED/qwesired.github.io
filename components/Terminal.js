import siteMetadata from '../data/siteMetadata'

export default function Terminal() {
  const cves = siteMetadata.cves
  const latestCVEs = cves.slice(0, 3)

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="terminal-dot red" />
          <div className="terminal-dot yellow" />
          <div className="terminal-dot green" />
        </div>
        <span className="terminal-title">qwesired@research:~</span>
      </div>
      <div className="terminal-body font-mono text-[13px] leading-relaxed">
        {/* Status Command */}
        <div className="mb-5">
          <div className="text-accent mb-2">$ status</div>
          <div className="space-y-0.5">
            <div className="flex">
              <span className="text-dark-muted w-32">RESEARCH</span>
              <span className="text-success font-medium">ACTIVE</span>
            </div>
            <div className="flex">
              <span className="text-dark-muted w-32">DISCLOSURES</span>
              <span className="text-accent">{cves.length + 6}</span>
            </div>
            <div className="flex">
              <span className="text-dark-muted w-32">CVEs</span>
              <span className="text-accent">{cves.length}</span>
            </div>
            <div className="flex">
              <span className="text-dark-muted w-32">LAST UPDATE</span>
              <span className="text-accent">21 SEP 2026</span>
            </div>
          </div>
        </div>

        {/* Latest Command */}
        <div className="mb-4">
          <div className="text-accent mb-2">$ latest</div>
          <div className="space-y-1.5">
            {latestCVEs.map(cve => (
              <div key={cve.id} className="flex items-center gap-3 text-[12px]">
                <span className="text-accent w-[115px] flex-shrink-0">{cve.id}</span>
                <span className="text-dark-muted w-[85px] flex-shrink-0">{cve.product}</span>
                <span className="text-dark-faded flex-1 truncate">{cve.title.split(' ').slice(-3).join(' ')}</span>
                <span className="text-dark-muted w-8 text-right">{cve.cvss}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium w-16 text-center ${
                  cve.severity === 'Critical' ? 'bg-danger text-white' :
                  cve.severity === 'High' ? 'bg-warning text-dark-bg' :
                  'bg-info text-white'
                }`}>
                  {cve.severity.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Prompt with cursor */}
        <div className="flex items-center">
          <span className="text-accent">$</span>
          <span className="ml-2 w-2.5 h-4 bg-accent animate-pulse" />
        </div>
      </div>
    </div>
  )
}
