import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getAllPostSlugs, getPostData, getSortedPostsData } from '../../lib/posts'
import siteMetadata from '../../data/siteMetadata'

export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false
  }
}

function extractTOC(html) {
  const headingRegex = /<h([2-3])[^>]*>(.+?)<\/h[2-3]>/gi
  const toc = []
  let match
  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1])
    const text = match[2].replace(/<[^>]+>/g, '')
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    toc.push({ level, text, id })
  }
  return toc
}

function addHeadingIds(html) {
  return html.replace(/<h([2-3])([^>]*)>(.+?)<\/h([2-3])>/gi, (match, level, attrs, content, closeLevel) => {
    const text = content.replace(/<[^>]+>/g, '')
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    return `<h${level}${attrs} id="${id}">${content}</h${closeLevel}>`
  })
}

function removeFirstH1(html) {
  return html.replace(/^(\s*<h1[^>]*>.*?<\/h1>\s*)/i, '')
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug)
  const allPosts = getSortedPostsData()

  const currentIndex = allPosts.findIndex(p => p.slug === params.slug)
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null

  const cleanedHtml = removeFirstH1(postData.contentHtml)
  const toc = extractTOC(cleanedHtml)
  const contentHtml = addHeadingIds(cleanedHtml)

  return {
    props: {
      post: { ...postData, contentHtml },
      prevPost,
      nextPost,
      toc
    }
  }
}

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const CalIcon = () => (
  <svg viewBox="0 0 16 16"><rect x="2" y="3" width="12" height="11" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.4"/><path d="M2 6.5h12M5.5 1.5v3M10.5 1.5v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.3" fill="none" stroke="currentColor" strokeWidth="1.4"/><path d="M8 4.5V8l2.3 1.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
)

const BoxIcon = () => (
  <svg viewBox="0 0 16 16"><path d="M8 1.5 14 4.5v7L8 14.5 2 11.5v-7L8 1.5ZM2 4.5l6 3 6-3M8 7.5v7" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>
)

const ShieldIcon = () => (
  <svg viewBox="0 0 16 16"><path d="M8 1.5 13 3.5v4c0 3.5-2.5 5.5-5 6.5-2.5-1-5-3-5-6.5v-4l5-2Z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>
)

const UserIcon = () => (
  <svg viewBox="0 0 16 16"><circle cx="8" cy="5" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.4"/><path d="M3 14c0-2.8 2.2-5 5-5s5 2.2 5 5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
)

const XIcon = () => (
  <svg viewBox="0 0 16 16"><path fill="currentColor" d="M12.16 1.5h2.21l-4.82 5.5 5.67 7.5h-4.44l-3.47-4.55-3.98 4.55H1.12l5.16-5.9L.84 1.5h4.55l3.14 4.15 3.63-4.15Zm-.77 11.68h1.22L4.71 2.75H3.42l7.97 10.43Z"/></svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 16 16"><path fill="currentColor" d="M13.63 13.63h-2.37V10.3c0-.89-.02-2.03-1.23-2.03-1.24 0-1.43.97-1.43 1.96v3.4H6.23V6h2.28v1.04h.03c.32-.6 1.1-1.23 2.25-1.23 2.4 0 2.84 1.58 2.84 3.64v4.18ZM3.56 4.95a1.38 1.38 0 1 1 0-2.75 1.38 1.38 0 0 1 0 2.75ZM4.75 13.63H2.37V6h2.38v7.63ZM14.81 0H1.18C.53 0 0 .52 0 1.15v13.7c0 .64.53 1.15 1.18 1.15h13.63c.65 0 1.19-.51 1.19-1.15V1.15C16 .52 15.46 0 14.81 0Z"/></svg>
)

const CopyIcon = () => (
  <svg viewBox="0 0 16 16"><rect x="4" y="4" width="9" height="11" rx="1" fill="none" stroke="currentColor" strokeWidth="1.3"/><path d="M4 12H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1" fill="none" stroke="currentColor" strokeWidth="1.3"/></svg>
)

const ChevLeftIcon = () => (
  <svg viewBox="0 0 16 16"><path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const ChevRightIcon = () => (
  <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const Ring = ({ value, sev }) => {
  const r = 38, c = 2 * Math.PI * r, p = (value / 10) * c
  return (
    <svg className={`ring big ${sev}`} viewBox="0 0 96 96">
      <circle cx="48" cy="48" r={r} className="bg" />
      <circle cx="48" cy="48" r={r} className="fg" strokeDasharray={`${p} ${c}`} transform="rotate(-90 48 48)" />
      <text x="48" y="45" textAnchor="middle" className="v">{parseFloat(value).toFixed(1)}</text>
      <text x="48" y="58" textAnchor="middle" className="l">CVSS 3.1</text>
    </svg>
  )
}

export default function BlogPost({ post, prevPost, nextPost, toc }) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [copied, setCopied] = useState(false)
  const shareUrl = `${siteMetadata.siteUrl}/blog/${post.slug}`
  const ogImage = post.image ? `${siteMetadata.siteUrl}${post.image}` : null

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fmtDate = (d) => {
    if (!d) return ''
    const date = new Date(d + 'T00:00:00')
    return date.toLocaleDateString('en-AU', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()
  }

  const isCVE = post.slug?.includes('cve') || post.tags?.some(t => t.toLowerCase().includes('cve'))
  const sevClass = post.severity?.toLowerCase() || (post.cvss >= 9 ? 'critical' : post.cvss >= 7 ? 'high' : 'medium')

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <Head>
        <title>{post.title} | {siteMetadata.title}</title>
        <meta name="description" content={post.description || post.title} key="description" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:title" content={post.title} key="og:title" />
        <meta property="og:description" content={post.description || post.title} key="og:description" />
        <meta property="og:url" content={shareUrl} key="og:url" />
        <meta property="og:site_name" content={siteMetadata.title} key="og:site_name" />
        <meta property="article:author" content={siteMetadata.author} />
        <meta property="article:published_time" content={post.date} />
        {ogImage && <meta property="og:image" content={ogImage} key="og:image" />}
        {ogImage && <meta property="og:image:width" content="1200" />}
        {ogImage && <meta property="og:image:height" content="630" />}
        <meta name="twitter:card" content={ogImage ? "summary_large_image" : "summary"} key="twitter:card" />
        <meta name="twitter:site" content="@Qwesi_RED" key="twitter:site" />
        <meta name="twitter:title" content={post.title} key="twitter:title" />
        <meta name="twitter:description" content={post.description || post.title} key="twitter:description" />
        {ogImage && <meta name="twitter:image" content={ogImage} key="twitter:image" />}
      </Head>

      {/* Progress bar */}
      <div className="progress"><span style={{ width: `${scrollProgress}%` }}></span></div>

      <article className="writeup">
        <div className="wrap">
          {/* Breadcrumb */}
          <nav className="crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blog">Research</Link>
            <span>/</span>
            <b>{post.title.length > 40 ? post.title.slice(0, 40) + '…' : post.title}</b>
          </nav>

          {/* Header with image */}
          <header className="wu-head">
            <div className="wu-head-text">
              <div className="wu-badges">
                {isCVE && post.cvss && (
                  <span className={`sev ${sevClass}`}>{post.severity?.toUpperCase() || 'HIGH'} · {post.cvss}</span>
                )}
                {post.product && (
                  <span className="pill"><BoxIcon /> {post.product}</span>
                )}
                {post.tags?.slice(0, 2).map((tag, i) => (
                  <span key={i} className="pill outline">{tag}</span>
                ))}
              </div>
              <h1>{post.title}</h1>
              {post.description && <p className="standfirst">{post.description}</p>}
              <div className="wu-meta">
                <span className="au">
                  <img src="/images/adam-nurudini.jpg" alt={siteMetadata.author} />
                  {siteMetadata.author}
                </span>
                <span className="mi"><CalIcon /> {fmtDate(post.date)}</span>
                <span className="mi"><ClockIcon /> {post.readingTime || post.readTime || 5} min read</span>
                {post.cveId && (
                  <a className="mi" href={`https://www.cve.org/CVERecord?id=${post.cveId}`} target="_blank" rel="noopener noreferrer">
                    <ShieldIcon /> {post.cveId}
                  </a>
                )}
              </div>
            </div>
            {post.image && (
              <img src={post.image} alt={post.title} className="wu-thumb" />
            )}
          </header>

          {/* Two-column layout */}
          <div className="wu-layout">
            {/* Sidebar */}
            <aside className="wu-side">
              {/* CVSS Score */}
              {isCVE && post.cvss && (
                <div className="side-box score-box">
                  <div className="ring-wrap">
                    <Ring value={post.cvss} sev={sevClass} />
                  </div>
                  {post.vector && <p className="vector mono">{post.vector}</p>}
                </div>
              )}

              {/* Metadata */}
              <div className="side-box meta-box">
                <div className="label">Details</div>
                <dl className="mlist">
                  <dt>Published</dt><dd>{fmtDate(post.date)}</dd>
                  {post.product && <><dt>Product</dt><dd>{post.product}</dd></>}
                  {post.versions && <><dt>Versions</dt><dd>{post.versions}</dd></>}
                  {post.cveId && <><dt>CVE ID</dt><dd>{post.cveId}</dd></>}
                  <dt>Status</dt><dd><span className="dot-ok"></span>Published</dd>
                </dl>
              </div>

              {/* Table of Contents */}
              {toc.length > 2 && (
                <div className="side-box toc-box">
                  <div className="label">Contents</div>
                  <nav className="toc">
                    {toc.map((item, idx) => (
                      <a key={idx} href={`#${item.id}`} className={item.level === 3 ? 'sub' : ''}>
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Share */}
              <div className="side-box share-box">
                <div className="label">Share</div>
                <div className="share">
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}&via=Qwesi_RED`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Share on X"
                  >
                    <XIcon />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Share on LinkedIn"
                  >
                    <LinkedinIcon />
                  </a>
                  <button onClick={copyLink} title="Copy link">
                    <CopyIcon /> {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="wu-body" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </div>

          {/* Author card */}
          <div className="author-card">
            <img src="/images/adam-nurudini.jpg" alt={siteMetadata.author} />
            <div>
              <div className="label">Written by</div>
              <h3>{siteMetadata.author}</h3>
              <p>Offensive Security Consultant specializing in vulnerability research, penetration testing, and red team operations. Published CVE author.</p>
              <div className="ac-links">
                <a href={siteMetadata.twitter} target="_blank" rel="noopener noreferrer">@Qwesi_RED</a>
                <a href={siteMetadata.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={siteMetadata.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          {/* Post navigation */}
          <div className="post-nav">
            {prevPost ? (
              <Link href={`/blog/${prevPost.slug}`} className="pn prev">
                <span><ChevLeftIcon /> Previous</span>
                <b>{prevPost.title}</b>
              </Link>
            ) : <div></div>}
            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`} className="pn next">
                <span>Next <ChevRightIcon /></span>
                <b>{nextPost.title}</b>
              </Link>
            ) : <div></div>}
          </div>

          <Link href="/blog" className="back-all">
            <ChevLeftIcon /> Back to all posts
          </Link>
        </div>
      </article>
    </>
  )
}
