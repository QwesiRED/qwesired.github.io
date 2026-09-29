import Head from 'next/head'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import siteMetadata from '../data/siteMetadata'

const ArrowIcon = () => (
  <svg className="arrow" viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const ExtIcon = () => (
  <svg viewBox="0 0 16 16" style={{width:'10px',height:'10px'}}><path d="M9 2h5v5M14 2L7.5 8.5M12 9.5V14H2V4h4.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const SearchIcon = () => (
  <svg viewBox="0 0 16 16" style={{width:'14px',height:'14px'}}><circle cx="7" cy="7" r="4.8" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="m10.5 10.5 3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
)

const BoxIcon = () => (
  <svg viewBox="0 0 16 16" style={{width:'11px',height:'11px'}}><path d="M8 1.5 14 4.5v7L8 14.5 2 11.5v-7L8 1.5ZM2 4.5l6 3 6-3M8 7.5v7" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>
)

const CalIcon = () => (
  <svg viewBox="0 0 16 16" style={{width:'11px',height:'11px'}}><rect x="2" y="3" width="12" height="11" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.4"/><path d="M2 6.5h12M5.5 1.5v3M10.5 1.5v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
)

const Ring = ({ value, sev }) => {
  const r = 17, c = 2 * Math.PI * r, p = (value / 10) * c
  return (
    <svg className={`ring ${sev}`} viewBox="0 0 44 44" aria-label={`CVSS ${value}`}>
      <circle cx="22" cy="22" r={r} className="bg" />
      <circle cx="22" cy="22" r={r} className="fg" strokeDasharray={`${p} ${c}`} transform="rotate(-90 22 22)" />
      <text x="22" y="25.5" textAnchor="middle">{parseFloat(value).toFixed(1)}</text>
    </svg>
  )
}

export default function CVEs() {
  const cves = siteMetadata.cves
  const [search, setSearch] = useState('')
  const [sevFilter, setSevFilter] = useState('all')

  const critCount = cves.filter(c => c.severity === 'Critical').length
  const highCount = cves.filter(c => c.severity === 'High').length
  const avgCvss = (cves.reduce((a, c) => a + parseFloat(c.cvss), 0) / cves.length).toFixed(1)
  const unauthCount = cves.filter(c => c.description?.toLowerCase().includes('unauth')).length

  const filtered = useMemo(() => {
    return cves.filter(c => {
      const matchSev = sevFilter === 'all' || c.severity.toLowerCase() === sevFilter
      const matchSearch = !search ||
        c.id.toLowerCase().includes(search.toLowerCase()) ||
        c.product.toLowerCase().includes(search.toLowerCase()) ||
        c.title.toLowerCase().includes(search.toLowerCase())
      return matchSev && matchSearch
    })
  }, [cves, search, sevFilter])

  return (
    <>
      <Head>
        <title>CVEs | {siteMetadata.author}</title>
        <meta name="description" content="Published CVE discoveries and vulnerability research." />
      </Head>

      {/* HERO */}
      <header className="hero">
        <div className="wrap">
          <div>
            <div className="eyebrow">CVEs<i>/</i>VULNERABILITIES<i>/</i>RESPONSIBLE DISCLOSURE</div>
            <h1 className="hero-title">Published <em>CVE</em><br/>discoveries.</h1>
            <p className="lede">Vulnerabilities I've discovered and responsibly disclosed to help secure widely-used software.</p>
            <div className="stats">
              <div className="stat"><strong>{cves.length}</strong><small>CVEs Published</small></div>
              <div className="stat"><strong>{new Set(cves.map(c => c.product)).size}</strong><small>Products Affected</small></div>
              <div className="stat"><strong>100%</strong><small>Disclosed</small></div>
            </div>
            <div className="ctas">
              <a className="btn" href="#list">Browse CVEs <ArrowIcon /></a>
              <a className="link-cta" href={`mailto:${siteMetadata.email}?subject=Vulnerability%20disclosure`}>
                <span>Report / Collaborate</span> <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Terminal */}
          <div className="term">
            <div className="term-bar">
              <span className="dot" style={{background:'#ff5f57'}}></span>
              <span className="dot" style={{background:'#febc2e'}}></span>
              <span className="dot" style={{background:'#28c840'}}></span>
              <span className="t">qwesired@research:~/cves</span>
            </div>
            <div className="term-body">
              <div className="cmd">$ cve --summary</div>
              <dl className="kv">
                <dt>TOTAL</dt><dd>{cves.length}</dd>
                <dt>CRITICAL</dt><dd className="c-crit">{critCount}</dd>
                <dt>HIGH</dt><dd className="c-high">{highCount}</dd>
                <dt>AVG CVSS</dt><dd>{avgCvss}</dd>
                <dt>MAX CVSS</dt><dd className="c-crit">{Math.max(...cves.map(c => parseFloat(c.cvss))).toFixed(1)}</dd>
              </dl>
              <div className="sevbar" aria-label={`Severity split: ${critCount} critical, ${highCount} high`}>
                <span className="seg crit" style={{flex: critCount}}></span>
                <span className="seg high" style={{flex: highCount}}></span>
              </div>
              <div className="sevlegend">
                <span><i className="sw crit"></i>Critical {critCount}</span>
                <span><i className="sw high"></i>High {highCount}</span>
              </div>
              <hr />
              <div className="cmd">$ tail -n 2 disclosures.log</div>
              <div className="log">
                {cves.slice(0, 2).map((cve, i) => (
                  <div key={i}>
                    <span className="ts">2026-09-21</span> <span className="ok">[PUBLISHED]</span> {cve.id}
                  </div>
                ))}
              </div>
              <div className="prompt">$ <span className="caret"></span></div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* STATS */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head">
              <h2>Research Stats</h2>
              <span className="rule"></span>
              <span className="count">UPDATED SEP 2026</span>
            </div>
            <div className="tiles">
              <div className="tile"><small>Total CVEs</small><strong>{cves.length}</strong><span className="sub">across {new Set(cves.map(c => c.product)).size} products</span></div>
              <div className="tile"><small>Critical</small><strong className="c-crit">{critCount}</strong><span className="sub">{Math.round(critCount/cves.length*100)}% of findings</span></div>
              <div className="tile"><small>High</small><strong className="c-high">{highCount}</strong><span className="sub">{Math.round(highCount/cves.length*100)}% of findings</span></div>
              <div className="tile"><small>Average CVSS</small><strong>{avgCvss}</strong><span className="sub">peak {Math.max(...cves.map(c => parseFloat(c.cvss))).toFixed(1)}</span></div>
              <div className="tile"><small>Unauthenticated</small><strong>{unauthCount}</strong><span className="sub">no login required</span></div>
              <div className="tile"><small>Disclosure Rate</small><strong className="accent">100%</strong><span className="sub">all patched &amp; public</span></div>
            </div>
          </div>
        </section>

        {/* LIST */}
        <section className="block" id="list">
          <div className="wrap">
            <div className="sec-head">
              <h2>All CVEs</h2>
              <span className="rule"></span>
              <span className="count">{filtered.length} RESULTS</span>
            </div>

            <div className="filters">
              <div className="search">
                <SearchIcon />
                <input
                  type="search"
                  placeholder="Search CVE ID, product or keyword…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <kbd>/</kbd>
              </div>
              <div className="chips" style={{display:'flex',gap:'6px'}}>
                {['all', 'critical', 'high'].map(sev => (
                  <button
                    key={sev}
                    className={`chip ${sevFilter === sev ? 'on' : ''}`}
                    onClick={() => setSevFilter(sev)}
                  >
                    {sev.charAt(0).toUpperCase() + sev.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="cards">
              {filtered.map((cve, idx) => {
                const isUnauth = cve.description?.toLowerCase().includes('unauth')
                const sevClass = cve.severity.toLowerCase()
                return (
                  <article className="card" key={idx}>
                    <div className="card-score">
                      <Ring value={cve.cvss} sev={sevClass} />
                      <span className={`sev ${sevClass}`}>{cve.severity.toUpperCase()}</span>
                    </div>
                    <div className="card-main">
                      <div className="card-top">
                        <a
                          className="cid"
                          href={`https://www.cve.org/CVERecord?id=${cve.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {cve.id}
                        </a>
                        <span className="prod">{cve.product}</span>
                        {isUnauth && <span className="flag">UNAUTHENTICATED</span>}
                      </div>
                      <h3><Link href={`/blog/${cve.id.toLowerCase()}`}>{cve.title}</Link></h3>
                      <p>{cve.description}</p>
                      <div className="meta">
                        <span className="mi"><BoxIcon /> Affected {cve.versions}</span>
                      </div>
                    </div>
                    <div className="card-act">
                      <Link href={`/blog/${cve.id.toLowerCase()}`} className="btn sm">
                        Read writeup <ArrowIcon />
                      </Link>
                      <a
                        className="ghost"
                        href={`https://www.cve.org/CVERecord?id=${cve.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CVE record <ExtIcon />
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>

            {filtered.length === 0 && (
              <div className="empty">
                <div className="cmd">$ grep -i "{search}" cves.db</div>
                <p>No CVEs match these filters.</p>
                <button className="link-cta" onClick={() => { setSearch(''); setSevFilter('all'); }}>
                  <span>Clear filters</span>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* PROCESS */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head"><h2>Disclosure Process</h2><span className="rule"></span></div>
            <ol className="steps">
              <li><span className="n">01</span><h3>Discover</h3><p>Manual code review and black-box testing of widely deployed software.</p></li>
              <li><span className="n">02</span><h3>Verify</h3><p>Build a reliable proof of concept and score impact with CVSS 3.1.</p></li>
              <li><span className="n">03</span><h3>Report</h3><p>Private disclosure to the vendor with full technical detail.</p></li>
              <li><span className="n">04</span><h3>Patch</h3><p>Work with maintainers until a fixed release ships.</p></li>
              <li><span className="n">05</span><h3>Publish</h3><p>CVE assigned and a full writeup released for defenders.</p></li>
            </ol>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="block" id="contact">
          <div className="wrap">
            <div className="cta-panel">
              <div>
                <div className="cmd accent">$ ./disclose.sh --vendor</div>
                <h2>Are you a vendor?</h2>
                <p>If one of these issues affects your product or you'd like a security review before release, get in touch.</p>
              </div>
              <div className="ctas">
                <a href={`mailto:${siteMetadata.email}`} className="btn">Get in Touch <ArrowIcon /></a>
                <Link href="/blog" className="link-cta">
                  <span>Read the writeups</span> <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
