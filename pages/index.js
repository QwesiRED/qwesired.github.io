import Head from 'next/head'
import Link from 'next/link'
import siteMetadata from '../data/siteMetadata'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      recentPosts: allPostsData.slice(0, 4),
      totalPosts: allPostsData.length
    }
  }
}

// SVG Icons
const ArrowIcon = () => (
  <svg className="arrow" viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const ExtIcon = () => (
  <svg viewBox="0 0 16 16"><path d="M9 2h5v5M14 2L7.5 8.5M12 9.5V14H2V4h4.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.3" fill="none" stroke="currentColor" strokeWidth="1.4"/><path d="M8 4.5V8l2.3 1.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
)

const GithubIcon = () => (
  <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>
)

const XIcon = () => (
  <svg viewBox="0 0 24 24"><path fill="currentColor" d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z"/></svg>
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

export default function Home({ recentPosts }) {
  const cves = siteMetadata.cves
  const certs = siteMetadata.certifications

  return (
    <>
      <Head>
        <title>{siteMetadata.title} | {siteMetadata.author}</title>
        <meta name="description" content={siteMetadata.profile.summary} />
      </Head>

      {/* HERO */}
      <header className="hero">
        <div className="wrap">
          <div>
            <div className="eyebrow">OFFENSIVE SECURITY<i>/</i>VULNERABILITY RESEARCH<i>/</i>APPSEC &amp; SECOPS</div>
            <h1 className="hero-title">I find <em>vulnerabilities</em><br/>in the software<br/>organizations depend on.</h1>
            <p className="lede">Security researcher and offensive security consultant focused on real-world impact — from discovering vulnerabilities to helping organisations build stronger defences.</p>
            <div className="stats">
              <div className="stat"><strong>{cves.length}</strong><small>CVEs Discovered</small></div>
              <div className="stat"><strong>10+</strong><small>Years Experience</small></div>
              <div className="stat"><strong>AppSec / SecOps</strong><small>Specialisations</small></div>
            </div>
            <div className="ctas">
              <Link href="/blog" className="btn">View Research <ArrowIcon /></Link>
              <Link href="/contact" className="link-cta"><span>Get in Touch</span> <ArrowIcon /></Link>
            </div>
          </div>

          {/* Terminal */}
          <div className="term" aria-label="Research status terminal">
            <div className="term-bar">
              <span className="dot" style={{background:'#ff5f57'}}></span>
              <span className="dot" style={{background:'#febc2e'}}></span>
              <span className="dot" style={{background:'#28c840'}}></span>
              <span className="t">qwesired@research:~</span>
            </div>
            <div className="term-body">
              <div className="cmd">$ status</div>
              <dl className="kv">
                <dt>RESEARCH</dt><dd>ACTIVE</dd>
                <dt>DISCLOSURES</dt><dd>{cves.length + 6}</dd>
                <dt>CVEs</dt><dd>{cves.length}</dd>
                <dt>LAST UPDATE</dt><dd>21 SEP 2026</dd>
              </dl>
              <hr />
              <div className="cmd">$ latest</div>
              <div className="latest">
                {cves.slice(0, 3).map(cve => (
                  <div className="row" key={cve.id}>
                    <span className="id">{cve.id}</span>
                    <span>{cve.product}</span>
                    <span>{cve.title.split(' ').slice(-2).join(' ')}</span>
                    <span className="n">{cve.cvss}</span>
                    <span><span className={`sev ${cve.severity.toLowerCase()}`}>{cve.severity.toUpperCase()}</span></span>
                  </div>
                ))}
              </div>
              <div className="prompt">$ <span className="caret"></span></div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* RECENT DISCOVERIES */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head">
              <h2>Recent Discoveries</h2>
              <span className="rule"></span>
              <Link href="/cves" className="more"><span>View all CVEs</span><ArrowIcon /></Link>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th style={{width:'18%'}}>ID</th>
                  <th style={{width:'19%'}}>Product</th>
                  <th style={{width:'25%'}}>Type</th>
                  <th style={{width:'10.5%'}}>CVSS</th>
                  <th style={{width:'17%'}}>Severity</th>
                  <th>Discovered</th>
                </tr>
              </thead>
              <tbody>
                {cves.slice(0, 5).map((cve, idx) => (
                  <tr key={cve.id}>
                    <td><a href={`https://www.cve.org/CVERecord?id=${cve.id}`} target="_blank" rel="noopener noreferrer">{cve.id}</a></td>
                    <td className="prod">{cve.product}</td>
                    <td className="type">{cve.title.includes('→') ? cve.title.split(' ').slice(-3).join(' ') : cve.title.split(' ').slice(-2).join(' ')}</td>
                    <td className="cvss">{cve.cvss}</td>
                    <td><span className={`sev ${cve.severity.toLowerCase()}`}>{cve.severity.toUpperCase()}</span></td>
                    <td className="date">{['21 Sep 2026','18 Sep 2026','16 Sep 2026','12 Sep 2026','08 Sep 2026'][idx]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="block">
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

        {/* LATEST RESEARCH */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head">
              <h2>Latest Research</h2>
              <span className="rule"></span>
              <Link href="/blog" className="more"><span>View all articles</span><ArrowIcon /></Link>
            </div>
            <div className="posts">
              {recentPosts.length > 0 ? recentPosts.map(post => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="post">
                  <div className="body">
                    <time>{new Date(post.date).toLocaleDateString('en-GB', {day:'2-digit',month:'short',year:'numeric'}).toUpperCase()}</time>
                    <h3>{post.title}</h3>
                    <div className="tags">
                      {post.tags?.slice(0,2).map(tag => <span className="tag" key={tag}>{tag}</span>)}
                      {post.readingTime && <span className="read"><ClockIcon /> {post.readingTime} min</span>}
                    </div>
                  </div>
                  <ArrowIcon />
                </Link>
              )) : (
                <p style={{color:'var(--muted)',padding:'20px 0'}}>Research articles coming soon.</p>
              )}
            </div>
          </div>
        </section>

        {/* ABOUT STRIP */}
        <section className="about">
          <div className="wrap">
            <img className="avatar" src="/images/adam-nurudini.jpg" alt={siteMetadata.author} />
            <div className="bio">
              <div className="label">About</div>
              <h3>{siteMetadata.author}</h3>
              <div className="role">Security Consultant<i>|</i>AppSec &amp; SecOps</div>
              <p>My career has been defined by a "full-spectrum" perspective on security. I've sat on both sides of the fence — building and leading a National Bank's SOC from the ground up, and now operating as an Offensive Security Consultant at Sekuro, where I simulate the adversary to protect Australia's most critical enterprises.</p>
              <Link href="/about" className="learn"><span>Learn more</span> <ArrowIcon /></Link>
            </div>
            <div className="side">
              <div className="label">Certifications</div>
              <div className="certs">
                {certs.slice(0, 7).map(cert => (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" key={cert.name}>
                    {cert.name} <ExtIcon />
                  </a>
                ))}
                <span className="more">+{certs.length - 7} more</span>
              </div>
              <div className="label">Connect</div>
              <div className="connect">
                <a href={siteMetadata.github} target="_blank" rel="noopener noreferrer"><GithubIcon /> GitHub</a>
                <a href={siteMetadata.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon /> Linkedin</a>
                <a href={siteMetadata.twitter} target="_blank" rel="noopener noreferrer"><XIcon /> X</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
