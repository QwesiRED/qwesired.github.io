import Head from 'next/head'
import Link from 'next/link'
import siteMetadata from '../data/siteMetadata'

const ArrowIcon = () => (
  <svg className="arrow" viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const ExtIcon = () => (
  <svg viewBox="0 0 16 16" style={{width:'10px',height:'10px'}}><path d="M9 2h5v5M14 2L7.5 8.5M12 9.5V14H2V4h4.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" style={{width:'16px',height:'16px'}}><path fill="currentColor" d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>
)

const TerminalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="m7 10 3 2.5L7 15M12.5 15.5H17"/></svg>
)

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r=".8" fill="currentColor"/></svg>
)

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6 2 12l6 6M16 6l6 6-6 6"/></svg>
)

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>
)

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.5 4 5.5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>
)

const principles = [
  { Icon: TargetIcon, title: 'FIELD TESTED', desc: 'Born from repetitive tasks on\nreal client engagements' },
  { Icon: CodeIcon, title: 'OPEN SOURCE', desc: 'Code is public on GitHub —\nread it, fork it, improve it' },
  { Icon: BoltIcon, title: 'OPERATOR FRIENDLY', desc: 'Simple to run, clear output,\nfits existing workflows' },
  { Icon: ShieldIcon, title: 'AUTHORISED USE ONLY', desc: 'For security testing with\nexplicit permission' },
]

export default function Tools() {
  const tools = siteMetadata.tools

  return (
    <>
      <Head>
        <title>Tools | {siteMetadata.author}</title>
        <meta name="description" content="Open-source security tools for offensive security and penetration testing." />
      </Head>

      {/* HERO */}
      <header className="hero">
        <div className="wrap">
          <div>
            <div className="eyebrow">TOOLS<i>/</i>OPEN SOURCE<i>/</i>OFFENSIVE SECURITY</div>
            <h1 className="hero-title">Open-source <em>tools</em><br/>built from real<br/>engagements.</h1>
            <p className="lede">Open-source security tools I've developed to automate common pentesting tasks and improve offensive security workflows.</p>
            <div className="stats">
              <div className="stat"><strong>{tools.length}</strong><small>Tool Released</small></div>
              <div className="stat"><strong>Python</strong><small>Primary Language</small></div>
              <div className="stat"><strong>More</strong><small>In Development</small></div>
            </div>
            <div className="ctas">
              <a className="btn" href={siteMetadata.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon /> View on GitHub
              </a>
              <a className="link-cta" href="#tools"><span>Browse Tools</span> <ArrowIcon /></a>
            </div>
          </div>

          {/* Terminal */}
          <div className="term">
            <div className="term-bar">
              <span className="dot" style={{background:'#ff5f57'}}></span>
              <span className="dot" style={{background:'#febc2e'}}></span>
              <span className="dot" style={{background:'#28c840'}}></span>
              <span className="t">qwesired@research:~/tools</span>
            </div>
            <div className="term-body">
              <div className="cmd">$ ls -la ./tools/</div>
              <div style={{fontSize:'11px',lineHeight:'2'}}>
                {tools.map((tool, idx) => (
                  <div key={idx} style={{display:'grid',gridTemplateColumns:'96px 1fr auto',alignItems:'center'}}>
                    <span style={{color:'var(--faded)'}}>drwxr-xr-x</span>
                    <span style={{color:'var(--text)'}}>{tool.name}/</span>
                    <span className="st ok">AVAILABLE</span>
                  </div>
                ))}
                <div style={{display:'grid',gridTemplateColumns:'96px 1fr auto',alignItems:'center'}}>
                  <span style={{color:'var(--faded)'}}>drwx------</span>
                  <span style={{color:'var(--muted)'}}>upcoming/</span>
                  <span className="st wip">IN DEV</span>
                </div>
              </div>
              <hr />
              <div className="cmd">$ cat README.md | head -3</div>
              <p style={{fontSize:'10.5px',color:'var(--muted)',lineHeight:'1.6',marginTop:'8px'}}>
                Security tools built from real penetration testing<br/>
                engagements. Designed for operators who need<br/>
                reliable, field-tested utilities.
              </p>
              <div className="prompt">$ <span className="caret"></span></div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* TOOLS */}
        <section className="block" id="tools">
          <div className="wrap">
            <div className="sec-head">
              <h2>Released Tools</h2>
              <span className="rule"></span>
              <span className="count">{String(tools.length).padStart(2, '0')} TOOL</span>
            </div>

            {tools.map((tool, idx) => (
              <article className="tool" key={idx}>
                <div className="tool-main">
                  <div className="tool-top">
                    <div className="tool-icon"><TerminalIcon /></div>
                    <div>
                      <h3>{tool.name}</h3>
                      <div className="repo mono">QwesiRED/{tool.name}</div>
                    </div>
                    <span className="status"><span className="pulse"></span>AVAILABLE</span>
                  </div>
                  <p className="tool-desc">{tool.description}</p>
                  <div className="meta">
                    <span className="lang"><i style={{background:'#3572A5'}}></i>Python</span>
                    {tool.tags.map((tag, i) => (
                      <span className="tag" key={i}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="tool-side">
                  <div className="term mini-term">
                    <div className="term-bar">
                      <span className="dot" style={{background:'#ff5f57'}}></span>
                      <span className="dot" style={{background:'#febc2e'}}></span>
                      <span className="dot" style={{background:'#28c840'}}></span>
                      <span className="t">install</span>
                    </div>
                    <div className="term-body">
                      <div className="cmd">$ git clone {tool.github}</div>
                      <div className="cmd">$ cd {tool.name}</div>
                      <div className="c-dim"># see README for usage</div>
                    </div>
                  </div>
                  <div className="tool-btns">
                    <a className="btn sm" href={tool.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon /> View on GitHub
                    </a>
                    <a className="ghost" href={`${tool.github}/issues`} target="_blank" rel="noopener noreferrer">
                      Report an issue <ExtIcon />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* COMING */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head"><h2>More Tools Coming</h2><span className="rule"></span></div>
            <div className="coming">
              <div className="slot">
                <span className="st wip">IN DEVELOPMENT</span>
                <div className="bars">
                  <i style={{width:'70%'}}></i>
                  <i style={{width:'45%'}}></i>
                  <i style={{width:'58%'}}></i>
                </div>
                <p>Next release is being tested on live engagements.</p>
              </div>
              <div className="slot">
                <span className="st wip">PLANNED</span>
                <div className="bars">
                  <i style={{width:'55%'}}></i>
                  <i style={{width:'75%'}}></i>
                  <i style={{width:'35%'}}></i>
                </div>
                <p>Tooling ideas from AppSec and cloud reviews.</p>
              </div>
              <div className="slot follow">
                <div className="cmd">$ watch QwesiRED</div>
                <p>Follow on GitHub to know when new tools ship.</p>
                <a className="link-cta" href={siteMetadata.github} target="_blank" rel="noopener noreferrer">
                  <span>Follow on GitHub</span> <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head"><h2>How These Are Built</h2><span className="rule"></span></div>
            <div className="skills four">
              {principles.map((item, idx) => (
                <div className="skill" key={idx}>
                  <item.Icon />
                  <h3>{item.title}</h3>
                  {item.desc.split('\n').map((line, i) => <p key={i}>{line}</p>)}
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
                <div className="cmd accent">$ ./suggest-tool.sh</div>
                <h2>Have an idea for a tool?</h2>
                <p>Suggestions, bug reports and pull requests are welcome.</p>
              </div>
              <div className="ctas">
                <a href={`mailto:${siteMetadata.email}?subject=Tool%20idea`} className="btn">Get in Touch <ArrowIcon /></a>
                <a className="link-cta" href={siteMetadata.github} target="_blank" rel="noopener noreferrer">
                  <span>GitHub</span> <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
