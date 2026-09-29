import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const ok = form.checkValidity();

    if (!ok) {
      form.reportValidity && form.reportValidity();
      return;
    }

    const subject = '[Website] ' + (data.get('topic') || 'Enquiry') + ' — ' + data.get('name');
    const body = 'Name: ' + data.get('name') + '\nEmail: ' + data.get('email') + '\nTopic: ' + data.get('topic') + '\n\n' + data.get('message');
    window.location.href = 'mailto:adam.nurudini@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  };

  return (
    <>
      <Head>
        <title>Contact | Adam Nurudini</title>
        <meta name="description" content="Security consulting, penetration testing or vulnerability research collaboration — or a disclosure to report. Reach out and I'll get back to you." />
      </Head>

      <header className="hero contact-hero">
        <div className="wrap">
          <div>
            <div className="eyebrow">CONTACT<i>/</i>CONSULTING<i>/</i>DISCLOSURE</div>
            <h1 className="hero-title">Let's <em>talk</em> security.</h1>
            <p className="lede">Security consulting, penetration testing or vulnerability research collaboration — or a disclosure to report. Reach out and I'll get back to you.</p>
            <div className="stats">
              <div className="stat"><strong>&lt; 24h</strong><small>Typical Reply</small></div>
              <div className="stat"><strong>Melbourne</strong><small>Based, AU</small></div>
              <div className="stat"><strong className="accent"><span className="pulse"></span>Open</strong><small>To Collaborate</small></div>
            </div>
            <div className="ctas">
              <a className="btn" href="mailto:adam.nurudini@gmail.com">Email Me <svg className="arrow" viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
              <a className="link-cta" href="https://www.linkedin.com/in/adamnurudini/" target="_blank" rel="noopener noreferrer"><span>Connect on LinkedIn</span> <svg className="arrow" viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            </div>
          </div>

          <div className="term">
            <div className="term-bar">
              <span className="dot" style={{background:'#ff5f57'}}></span>
              <span className="dot" style={{background:'#febc2e'}}></span>
              <span className="dot" style={{background:'#28c840'}}></span>
              <span className="t">qwesired@research:~/contact</span>
            </div>
            <div className="term-body">
              <div className="cmd">$ cat contact.json</div>
              <pre className="cjson">{`{
  `}<span className="key">"name"</span>: <span className="str">"Adam Nurudini"</span>,{`
  `}<span className="key">"role"</span>: <span className="str">"Offensive Security Consultant"</span>,{`
  `}<span className="key">"location"</span>: <span className="str">"Melbourne, AU"</span>,{`
  `}<span className="key">"email"</span>: <span className="str">"adam.nurudini@gmail.com"</span>,{`
  `}<span className="key">"status"</span>: <span className="str acc">"open to collaborate"</span>,{`
  `}<span className="key">"responds_in"</span>: <span className="str">"&lt; 24 hours"</span>{`
}`}</pre>
              <div className="prompt">$ <span className="caret"></span></div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="block">
          <div className="wrap">
            <div className="contact-grid">
              <div>
                <div className="sec-head"><h2>Send a Message</h2><span className="rule"></span></div>
                <form className="cform" onSubmit={handleSubmit} noValidate>
                  <div className="row2">
                    <label>Name<input name="name" type="text" required placeholder="Jane Doe" /></label>
                    <label>Email<input name="email" type="email" required placeholder="jane@company.com" /></label>
                  </div>
                  <label>Reason for contact
                    <select name="topic" required defaultValue="">
                      <option value="" disabled>Select a topic…</option>
                      <option>Penetration testing engagement</option>
                      <option>Application / cloud security review</option>
                      <option>Vulnerability disclosure</option>
                      <option>Speaking / workshop invitation</option>
                      <option>Research collaboration</option>
                      <option>Something else</option>
                    </select>
                  </label>
                  <label>Message<textarea name="message" rows="6" required placeholder="Tell me a little about the scope, timeline and what you need…"></textarea></label>
                  <div className="form-foot">
                    <span className="note">
                      <svg viewBox="0 0 16 16" width="12" height="12"><rect x="3.5" y="7" width="9" height="6.5" rx="1.3" fill="none" stroke="currentColor" strokeWidth="1.3"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" fill="none" stroke="currentColor" strokeWidth="1.3"/></svg>
                      Opens in your email client — nothing is stored here.
                    </span>
                    <button type="submit" className="btn">Send Message <svg className="arrow" viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                  </div>
                </form>
              </div>

              <aside className="channels">
                <div className="sec-head"><h2>Direct</h2><span className="rule"></span></div>
                <a className="ch" href="mailto:adam.nurudini@gmail.com">
                  <span className="ch-ic"><svg viewBox="0 0 16 16"><rect x="1.5" y="3.5" width="13" height="9" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.3"/><path d="m2 4.5 6 4 6-4" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg></span>
                  <span className="ch-t"><b>Email</b><small>adam.nurudini@gmail.com</small></span>
                  <svg className="ch-go" viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a className="ch" href="https://www.linkedin.com/in/adamnurudini/" target="_blank" rel="noopener noreferrer">
                  <span className="ch-ic"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg></span>
                  <span className="ch-t"><b>LinkedIn</b><small>in/adamnurudini</small></span>
                  <svg className="ch-go" viewBox="0 0 16 16"><path d="M9 2h5v5M14 2L7.5 8.5M12 9.5V14H2V4h4.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a className="ch" href="https://x.com/Qwesi_RED" target="_blank" rel="noopener noreferrer">
                  <span className="ch-ic"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z"/></svg></span>
                  <span className="ch-t"><b>X / Twitter</b><small>@Qwesi_RED</small></span>
                  <svg className="ch-go" viewBox="0 0 16 16"><path d="M9 2h5v5M14 2L7.5 8.5M12 9.5V14H2V4h4.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a className="ch" href="https://github.com/QwesiRED" target="_blank" rel="noopener noreferrer">
                  <span className="ch-ic"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg></span>
                  <span className="ch-t"><b>GitHub</b><small>QwesiRED</small></span>
                  <svg className="ch-go" viewBox="0 0 16 16"><path d="M9 2h5v5M14 2L7.5 8.5M12 9.5V14H2V4h4.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>

                <div className="loc-card">
                  <div className="label">
                    <svg viewBox="0 0 16 16" width="12" height="12"><path d="M8 1C5.24 1 3 3.24 3 6c0 4.5 5 9 5 9s5-4.5 5-9c0-2.76-2.24-5-5-5Zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" fill="none" stroke="currentColor" strokeWidth="1.3"/></svg>
                    Based in
                  </div>
                  <b>Melbourne, Australia</b>
                  <span>AEST · UTC+10 · Available for remote &amp; on-site work across AU</span>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="block">
          <div className="wrap">
            <div className="sec-head"><h2>What I Can Help With</h2><span className="rule"></span></div>
            <div className="help">
              <div className="hc">
                <svg viewBox="0 0 16 16"><path d="M8 1.5 3 3.5v4c0 3.3 2.2 5.7 5 6.6 2.8-.9 5-3.3 5-6.6v-4L8 1.5Z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/><path d="m5.7 8 1.6 1.6L10.5 6" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <h3>Penetration Testing</h3>
                <p>Web, API, mobile, cloud and infrastructure — internal, external and red team.</p>
              </div>
              <div className="hc">
                <svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.8" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="m10.5 10.5 3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <h3>Security Reviews</h3>
                <p>Code review, secure SDLC and cloud architecture hardening across AWS, Azure and GCP.</p>
              </div>
              <div className="hc">
                <svg viewBox="0 0 16 16"><path d="M8 1.5 14 4.5v7L8 14.5 2 11.5v-7L8 1.5Z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/><path d="M8 5.5v5M5.5 7l2.5-1.5L10.5 7" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <h3>Vulnerability Disclosure</h3>
                <p>Found an issue in something I research? Report it privately and I'll coordinate a fix.</p>
              </div>
              <div className="hc">
                <svg viewBox="0 0 16 16"><path d="M9 1.5 3 9h4l-1 5.5L13 7H9l1-5.5Z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>
                <h3>Talks &amp; Training</h3>
                <p>Conference talks and hands-on workshops on offensive security and SecOps.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="block" id="disclosure">
          <div className="wrap">
            <div className="cta-panel">
              <div>
                <div className="cmd">$ ./report.sh --responsible</div>
                <h2>Reporting a vulnerability?</h2>
                <p>Email me with steps to reproduce and impact. I follow coordinated disclosure and will keep you updated through to a fix.</p>
              </div>
              <div className="ctas">
                <a className="btn" href="mailto:adam.nurudini@gmail.com?subject=Vulnerability%20Disclosure">Report Securely <svg className="arrow" viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
                <Link href="/blog" className="link-cta"><span>See past disclosures</span> <svg className="arrow" viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
