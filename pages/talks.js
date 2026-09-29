import Head from 'next/head'
import Link from 'next/link'
import siteMetadata from '../data/siteMetadata'

const ArrowIcon = () => (
  <svg className="arrow" viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const ExtIcon = () => (
  <svg viewBox="0 0 16 16" style={{width:'10px',height:'10px'}}><path d="M9 2h5v5M14 2L7.5 8.5M12 9.5V14H2V4h4.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const engagements = [
  { type: 'WORKSHOP', org: 'ISACA', desc: 'Philosophy of Information Security Workshop' },
  { type: 'SPEAKER & HOST', org: 'OWASP Ghana Chapter', desc: 'Conference Speaker & Host' },
  { type: 'SPEAKER', org: 'Mobex Africa ICT Expo', desc: 'Cyber Security Conference' },
  { type: 'TRAINER', org: 'GIMPA School of Technology', desc: 'Cyber Security Workshop Trainer' },
  { type: 'ATTENDEE', org: 'Black Hat Asia 2018', desc: 'Conference Attendee' },
]

export default function Talks() {
  const talks = siteMetadata.talks

  const talksByYear = talks.reduce((acc, talk) => {
    const year = talk.date
    if (!acc[year]) acc[year] = []
    acc[year].push(talk)
    return acc
  }, {})

  const years = Object.keys(talksByYear).sort((a, b) => b.localeCompare(a))
  const orgs = ['ISACA', 'OWASP Ghana', 'Mobex Africa', 'GIMPA', 'Black Hat Asia']

  return (
    <>
      <Head>
        <title>Talks | {siteMetadata.author}</title>
        <meta name="description" content="Security conference talks, workshops, and presentations." />
      </Head>

      {/* HERO */}
      <header className="hero">
        <div className="wrap">
          <div>
            <div className="eyebrow">TALKS<i>/</i>WORKSHOPS<i>/</i>PRESENTATIONS</div>
            <h1 className="hero-title">Talks, <em>workshops</em><br/>&amp; presentations.</h1>
            <p className="lede">Security conference talks, workshops, and presentations I've delivered on topics ranging from penetration testing to security operations.</p>
            <div className="stats">
              <div className="stat"><strong>{talks.length}</strong><small>Talks with Slides</small></div>
              <div className="stat"><strong>{engagements.length}</strong><small>Speaking Engagements</small></div>
              <div className="stat"><strong>2015–24</strong><small>Years Active</small></div>
            </div>
            <div className="ctas">
              <a className="btn" href={`mailto:${siteMetadata.email}?subject=Speaking%20invitation`}>
                Invite to Speak <ArrowIcon />
              </a>
              <a className="link-cta" href="#talks"><span>Browse Talks</span> <ArrowIcon /></a>
            </div>
          </div>

          {/* Terminal */}
          <div className="term">
            <div className="term-bar">
              <span className="dot" style={{background:'#ff5f57'}}></span>
              <span className="dot" style={{background:'#febc2e'}}></span>
              <span className="dot" style={{background:'#28c840'}}></span>
              <span className="t">qwesired@research:~/talks</span>
            </div>
            <div className="term-body">
              <div className="cmd">$ talks --latest</div>
              <dl className="kv">
                <dt>TITLE</dt><dd>{talks[0]?.title.split(' ').slice(0, 2).join(' ')}</dd>
                <dt>YEAR</dt><dd>{talks[0]?.date}</dd>
                <dt>TYPE</dt><dd>SECURITY CONFERENCE</dd>
                <dt>SLIDES</dt><dd>AVAILABLE</dd>
              </dl>
              <hr />
              <div className="cmd">$ talks --orgs</div>
              <div className="orgs">
                {orgs.map((org, i) => <span key={i}>{org}</span>)}
              </div>
              <div className="prompt">$ <span className="caret"></span></div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* TALKS */}
        <section className="block" id="talks">
          <div className="wrap">
            <div className="sec-head">
              <h2>All Talks</h2>
              <span className="rule"></span>
              <span className="count">{talks.length} TALKS</span>
            </div>

            <div className="timeline">
              {years.map(year => (
                <div className="yr-group" key={year}>
                  <div className="yr">{year}</div>
                  <div className="yr-items">
                    {talksByYear[year].map((talk, idx) => (
                      <a
                        href={talk.slides}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="talk-card"
                        key={idx}
                      >
                        <div>
                          <div className="meta">
                            {talk.tags?.slice(0, 2).map((tag, i) => (
                              <span className="tag" key={i}>{tag}</span>
                            ))}
                          </div>
                          <h3>{talk.title}</h3>
                          <p>{talk.description}</p>
                          <div className="meta">
                            <span className="mi">{talk.event}</span>
                          </div>
                        </div>
                        <div className="slides">
                          <div className="slide-stack">
                            <i></i><i></i><i></i>
                          </div>
                          <span>View slides <ExtIcon /></span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENGAGEMENTS */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head"><h2>Speaking Engagements</h2><span className="rule"></span></div>
            <div className="engs">
              {engagements.map((eng, idx) => (
                <div className="eng" key={idx}>
                  <span className="st ok">{eng.type}</span>
                  <h3>{eng.org}</h3>
                  <p>{eng.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="block" id="contact">
          <div className="wrap">
            <div className="cta-panel">
              <div>
                <div className="cmd accent">$ ./invite.sh --speaker</div>
                <h2>Invite me to speak</h2>
                <p>Conferences, meetups, workshops or internal team sessions on offensive security, AppSec and SecOps.</p>
              </div>
              <div className="ctas">
                <a href={`mailto:${siteMetadata.email}?subject=Speaking%20invitation`} className="btn">
                  Get in Touch <ArrowIcon />
                </a>
                <Link href="/about" className="link-cta">
                  <span>View bio</span> <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
