import Head from 'next/head'
import Link from 'next/link'
import siteMetadata from '../data/siteMetadata'

const ArrowIcon = () => (
  <svg className="arrow" viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const ExtIcon = () => (
  <svg viewBox="0 0 16 16" style={{width:'10px',height:'10px'}}><path d="M9 2h5v5M14 2L7.5 8.5M12 9.5V14H2V4h4.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const PinIcon = () => (
  <svg viewBox="0 0 16 16"><path d="M8 14.5s4.8-4.4 4.8-8a4.8 4.8 0 0 0-9.6 0c0 3.6 4.8 8 4.8 8Z" fill="none" stroke="currentColor" strokeWidth="1.4"/><circle cx="8" cy="6.5" r="1.7" fill="none" stroke="currentColor" strokeWidth="1.4"/></svg>
)

// Expertise Icons - Multi-color
const PentestIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="16" rx="2" fill="#1e293b"/>
    <rect x="2" y="4" width="20" height="3" fill="#334155"/>
    <circle cx="4.5" cy="5.5" r=".7" fill="#ef4444"/>
    <circle cx="6.5" cy="5.5" r=".7" fill="#eab308"/>
    <circle cx="8.5" cy="5.5" r=".7" fill="#22c55e"/>
    <path d="M5 11l2.5 2-2.5 2" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.5 15h4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)
const AppSecIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M12 2L4 5v6c0 5.5 3.4 10.3 8 12 4.6-1.7 8-6.5 8-12V5l-8-3z" fill="#1e40af"/>
    <path d="M12 2L4 5v6c0 5.5 3.4 10.3 8 12V2z" fill="#3b82f6"/>
    <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const CodeReviewIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="#581c87"/>
    <path d="M8 8l-3 4 3 4" stroke="#c084fc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 8l3 4-3 4" stroke="#c084fc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 6l-4 12" stroke="#e879f9" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)
const CloudSecIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M6.5 19h11a4.5 4.5 0 00.9-8.9A6 6 0 006.3 12a4 4 0 00.2 7z" fill="#0ea5e9"/>
    <path d="M6.5 19h11a4.5 4.5 0 00.9-8.9A6 6 0 0012 5v14" fill="#0284c7"/>
    <path d="M10 13h4M12 11v4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)
const AdversaryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="6" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="3" fill="none" stroke="#dc2626" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="1" fill="#dc2626"/>
  </svg>
)
const SecOpsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="20" height="14" rx="2" fill="#134e4a"/>
    <rect x="4" y="5" width="5" height="3" rx=".5" fill="#2dd4bf"/>
    <rect x="4" y="9" width="5" height="3" rx=".5" fill="#14b8a6"/>
    <rect x="10" y="5" width="10" height="7" rx=".5" fill="#0d9488"/>
    <path d="M11 8h3M11 10h5" stroke="#5eead4" strokeWidth=".8"/>
    <rect x="7" y="19" width="10" height="2" rx="1" fill="#475569"/>
    <rect x="10" y="17" width="4" height="2" fill="#475569"/>
  </svg>
)

const expertise = [
  { Icon: PentestIcon, title: 'PENETRATION TESTING', lines: ['Internal, external, and Active Directory assessments', 'Phishing simulations for human security awareness'] },
  { Icon: AppSecIcon, title: 'APPLICATION SECURITY', lines: ['Web, mobile, and API security assessments', 'Application logic, authentication, and data handling'] },
  { Icon: CodeReviewIcon, title: 'CODE REVIEW', lines: ['SAST with SonarQube, Checkmarx, Semgrep', 'Manual review augmented with LLM agents'] },
  { Icon: CloudSecIcon, title: 'CLOUD SECURITY', lines: ['AWS, Azure, and GCP configuration reviews', 'Cloud pentesting and architecture assessment'] },
  { Icon: AdversaryIcon, title: 'ADVERSARY SIMULATION', lines: ['Adversary emulation and ransomware simulation', 'Testing detection and response capabilities'] },
  { Icon: SecOpsIcon, title: 'SECURITY OPERATIONS', lines: ['SIEM, XDR, PAM, and NTA deployment', 'Building and leading SOC capabilities'] },
]

export default function About() {
  const exp = siteMetadata.experience
  const certs = siteMetadata.certifications
  const tech = siteMetadata.technologies
  const talks = siteMetadata.talks
  const cves = siteMetadata.cves
  const highlights = siteMetadata.profile.highlights

  return (
    <>
      <Head>
        <title>About | {siteMetadata.author}</title>
        <meta name="description" content={siteMetadata.profile.summary} />
      </Head>

      {/* HERO */}
      <header className="hero about-hero">
        <div className="wrap">
          <div>
            <div className="eyebrow">ABOUT<i>/</i>OFFENSIVE SECURITY CONSULTANT<i>/</i>MELBOURNE, AU</div>
            <div className="id-row">
              <img className="avatar-lg" src="/images/adam-nurudini.jpg" alt={siteMetadata.author} />
              <div>
                <h1 className="hero-title">Adam <em>Nurudini</em></h1>
                <div className="subtitle">Security Consultant <i>|</i> AppSec &amp; SecOps Expertise</div>
                <div className="loc"><PinIcon />Melbourne, Australia <span className="avail"><span className="pulse"></span>Available</span></div>
              </div>
            </div>
            <p className="lede">{siteMetadata.profile.summary}</p>
            <div className="stats">
              <div className="stat"><strong>10+</strong><small>Years Experience</small></div>
              <div className="stat"><strong>{cves.length}</strong><small>CVEs Published</small></div>
              <div className="stat"><strong>{certs.length}</strong><small>Active Certs</small></div>
            </div>
            <div className="ctas">
              <a href={`mailto:${siteMetadata.email}`} className="btn">Get in Touch <ArrowIcon /></a>
              <a href={siteMetadata.linkedin} target="_blank" rel="noopener noreferrer" className="link-cta"><span>LinkedIn</span> <ArrowIcon /></a>
            </div>
          </div>

          {/* Terminal */}
          <div className="term" aria-label="Profile terminal">
            <div className="term-bar">
              <span className="dot" style={{background:'#ff5f57'}}></span>
              <span className="dot" style={{background:'#febc2e'}}></span>
              <span className="dot" style={{background:'#28c840'}}></span>
              <span className="t">qwesired@research:~</span>
            </div>
            <div className="term-body">
              <div className="cmd">$ whoami --stats</div>
              <dl className="kv">
                <dt>EXPERIENCE</dt><dd>10+ YEARS</dd>
                <dt>CVEs</dt><dd>{cves.length} PUBLISHED</dd>
                <dt>CERTS</dt><dd>{certs.length} ACTIVE</dd>
                <dt>ROLES</dt><dd>{exp.length} POSITIONS</dd>
                <dt>STATUS</dt><dd>OPEN TO COLLABORATE</dd>
              </dl>
              <hr />
              <div className="cmd">$ cat highlights.txt</div>
              <ul className="hl">
                {highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <div className="prompt">$ <span className="caret"></span></div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* EXPERIENCE */}
        <section className="block" id="experience">
          <div className="wrap">
            <div className="sec-head">
              <h2>Experience</h2>
              <span className="rule"></span>
              <span className="count">{String(exp.length).padStart(2, '0')} ROLES</span>
            </div>
            <div className="jobs">
              {exp.map((job, idx) => (
                <article className="job" key={idx}>
                  <div className="when">
                    <span className="date">{job.period.toUpperCase()}</span>
                    <span className="place">{job.location}</span>
                    {idx === 0 && <span className="now">CURRENT</span>}
                  </div>
                  <div className="what">
                    <h3>{job.role}</h3>
                    <div className="co">{job.company}</div>
                    <ul>
                      {job.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="block" id="certifications">
          <div className="wrap">
            <div className="sec-head">
              <h2>Certifications</h2>
              <span className="rule"></span>
              <span className="count">{String(certs.length).padStart(2, '0')} CREDENTIALS</span>
            </div>
            <table className="certs-table table">
              <thead>
                <tr>
                  <th style={{width:'14%'}}>Code</th>
                  <th style={{width:'38%'}} className="name">Name</th>
                  <th style={{width:'26%'}} className="iss">Issuer</th>
                  <th style={{width:'10%'}}>Year</th>
                  <th>Credential</th>
                </tr>
              </thead>
              <tbody>
                {certs.map((cert, idx) => (
                  <tr key={idx}>
                    <td className="code">{cert.name}</td>
                    <td className="name">{cert.fullName}</td>
                    <td className="iss">{cert.provider}</td>
                    <td className="yr">{cert.year}</td>
                    <td>
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cred">
                        Verify <ExtIcon />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="block" id="expertise">
          <div className="wrap">
            <div className="sec-head">
              <h2>Expertise</h2>
              <span className="rule"></span>
            </div>
            <div className="skills">
              {expertise.map((item, idx) => (
                <div className="skill" key={idx}>
                  <div className="skill-head">
                    <div className="skill-icon"><item.Icon /></div>
                    <h3>{item.title}</h3>
                  </div>
                  {item.lines.map((line, i) => <p key={i}>{line}</p>)}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="block" id="tools">
          <div className="wrap">
            <div className="sec-head">
              <h2>Technologies &amp; Tools</h2>
              <span className="rule"></span>
            </div>
            <div className="stack">
              {Object.entries(tech).map(([category, tools], idx) => (
                <div className="grp" key={idx}>
                  <div className="label">{category}</div>
                  <div className="chips">
                    {tools.map((tool, i) => <span key={i}>{tool}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPEAKING & RESEARCH */}
        <section className="block">
          <div className="wrap">
            <div className="split">
              {/* Speaking */}
              <div>
                <div className="sec-head">
                  <h2>Speaking</h2>
                  <span className="rule"></span>
                </div>
                {talks.slice(0, 4).map((talk, idx) => (
                  <a href={talk.slides} target="_blank" rel="noopener noreferrer" className="talk" key={idx}>
                    <div>
                      <h3>{talk.title}</h3>
                      <p>{talk.event} · {talk.date}</p>
                    </div>
                    <ExtIcon />
                  </a>
                ))}
              </div>

              {/* Research */}
              <div>
                <div className="sec-head">
                  <h2>Research</h2>
                  <span className="rule"></span>
                </div>
                <p className="research-copy">
                  I focus on finding real-world vulnerabilities in production software.
                  My research has resulted in multiple CVE assignments and coordinated disclosures.
                </p>
                <div className="mini">
                  {cves.slice(0, 3).map((cve, idx) => (
                    <a href={`https://www.cve.org/CVERecord?id=${cve.id}`} target="_blank" rel="noopener noreferrer" key={idx}>
                      <span className="id">{cve.id}</span>
                      <span>{cve.product}</span>
                      <span className={`sev ${cve.severity.toLowerCase()}`}>{cve.severity.toUpperCase()}</span>
                    </a>
                  ))}
                </div>
                <Link href="/cves" className="more-link">
                  <span>View all CVEs</span> <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="block" id="contact">
          <div className="wrap">
            <div className="cta-panel">
              <div>
                <div className="cmd accent">$ contact --init</div>
                <h2>Let&apos;s work together</h2>
                <p>Available for penetration testing engagements, security assessments, and consulting. Based in Melbourne, working globally.</p>
              </div>
              <div className="ctas">
                <a href={`mailto:${siteMetadata.email}`} className="btn">Get in Touch <ArrowIcon /></a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
