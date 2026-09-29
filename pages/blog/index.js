import Head from 'next/head'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import { getSortedPostsData, getAllTags } from '../../lib/posts'
import siteMetadata from '../../data/siteMetadata'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const allTags = getAllTags()
  return {
    props: {
      posts: allPostsData,
      tags: allTags
    }
  }
}

const ArrowIcon = () => (
  <svg className="arrow" viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const ExtIcon = () => (
  <svg viewBox="0 0 16 16" style={{width:'10px',height:'10px'}}><path d="M9 2h5v5M14 2L7.5 8.5M12 9.5V14H2V4h4.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const SearchIcon = () => (
  <svg viewBox="0 0 16 16" style={{width:'14px',height:'14px'}}><circle cx="7" cy="7" r="4.8" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="m10.5 10.5 3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
)

const RssIcon = () => (
  <svg viewBox="0 0 16 16" style={{width:'12px',height:'12px'}}><path d="M3 3a10 10 0 0 1 10 10M3 7a6 6 0 0 1 6 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><circle cx="3.8" cy="12.2" r="1.3" fill="currentColor"/></svg>
)

const GridIcon = () => (
  <svg viewBox="0 0 16 16" style={{width:'14px',height:'14px'}}><path d="M2.5 2.5h4.5v4.5H2.5zM9 2.5h4.5v4.5H9zM2.5 9h4.5v4.5H2.5zM9 9h4.5v4.5H9z" fill="none" stroke="currentColor" strokeWidth="1.3"/></svg>
)

const ListIcon = () => (
  <svg viewBox="0 0 16 16" style={{width:'14px',height:'14px'}}><path d="M2.5 4h11M2.5 8h11M2.5 12h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 16 16" style={{width:'11px',height:'11px'}}><circle cx="8" cy="8" r="6.3" fill="none" stroke="currentColor" strokeWidth="1.4"/><path d="M8 4.5V8l2.3 1.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
)

const CATS = [
  { k: 'all', label: 'All Posts' },
  { k: 'cve', label: 'CVE Writeups' },
  { k: 'research', label: 'Research' },
  { k: 'guide', label: 'Guides' },
]

export default function Blog({ posts, tags }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [selectedTag, setSelectedTag] = useState(null)
  const [viewMode, setViewMode] = useState('grid')
  const [sort, setSort] = useState('new')

  const cves = siteMetadata.cves.slice(0, 3)

  const totalMinutes = posts.reduce((acc, p) => acc + (p.readTime || 5), 0)
  const cveCount = posts.filter(p => p.slug?.includes('cve') || p.tags?.some(t => t.toLowerCase().includes('cve'))).length

  const filtered = useMemo(() => {
    let result = posts.filter(p => {
      const matchSearch = !search ||
        p.title?.toLowerCase().includes(search.toLowerCase()) ||
        p.summary?.toLowerCase().includes(search.toLowerCase()) ||
        p.tags?.some(t => t.toLowerCase().includes(search.toLowerCase()))

      const matchCat = category === 'all' ||
        (category === 'cve' && (p.slug?.includes('cve') || p.tags?.some(t => t.toLowerCase().includes('cve')))) ||
        (category === 'research' && p.tags?.some(t => t.toLowerCase().includes('research'))) ||
        (category === 'guide' && p.tags?.some(t => t.toLowerCase().includes('guide')))

      const matchTag = !selectedTag || p.tags?.includes(selectedTag)

      return matchSearch && matchCat && matchTag
    })

    if (sort === 'old') {
      result = [...result].reverse()
    }

    return result
  }, [posts, search, category, selectedTag, sort])

  const featured = posts[0]

  const fmtDate = (d) => {
    if (!d) return ''
    const date = new Date(d + 'T00:00:00')
    return date.toLocaleDateString('en-AU', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()
  }

  return (
    <>
      <Head>
        <title>Research &amp; Blog | {siteMetadata.author}</title>
        <meta name="description" content="Security research, vulnerability discoveries, and technical deep dives." />
      </Head>

      {/* HERO */}
      <header className="hero blog-hero">
        <div className="wrap">
          <div>
            <div className="eyebrow">RESEARCH<i>/</i>WRITEUPS<i>/</i>FIELD NOTES</div>
            <h1 className="hero-title">Research, <em>writeups</em><br/>&amp; field notes.</h1>
            <p className="lede">Security research, vulnerability discoveries, exploit development and technical deep dives — plus the lessons learned along the way.</p>
            <div className="search big">
              <SearchIcon />
              <input
                type="search"
                placeholder="Search posts, tags, products…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <kbd>/</kbd>
            </div>
            <div className="stats">
              <div className="stat"><strong>{posts.length}</strong><small>Posts</small></div>
              <div className="stat"><strong>{cveCount}</strong><small>CVE Writeups</small></div>
              <div className="stat"><strong>{totalMinutes}</strong><small>Minutes of Reading</small></div>
            </div>
          </div>

          {/* Featured Terminal */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="term feature">
              <div className="term-bar">
                <span className="dot" style={{background:'#ff5f57'}}></span>
                <span className="dot" style={{background:'#febc2e'}}></span>
                <span className="dot" style={{background:'#28c840'}}></span>
                <span className="t">qwesired@research:~/blog</span>
              </div>
              <div className="term-body">
                <div className="cmd">$ cat latest.md</div>
                <div className="f-badges">
                  {featured.severity && (
                    <span className={`sev ${featured.severity?.toLowerCase() || 'critical'}`}>
                      {featured.severity?.toUpperCase() || 'CRITICAL'}
                    </span>
                  )}
                  <span className="f-cat">FEATURED</span>
                </div>
                <h2>{featured.title}</h2>
                <p>{featured.summary || featured.description}</p>
                <div className="f-meta">
                  <span>{fmtDate(featured.date)}</span>
                  <span>{featured.readTime || 5} MIN READ</span>
                </div>
                <hr />
                <div className="f-foot">
                  <span className="read-link">Read the writeup <ArrowIcon /></span>
                  <span className="prompt">$ <span className="caret"></span></span>
                </div>
              </div>
            </Link>
          )}
        </div>
      </header>

      <main>
        <section className="block">
          <div className="wrap">
            {/* Category Tabs */}
            <div className="tabs">
              {CATS.map(cat => (
                <button
                  key={cat.k}
                  className={`tab ${category === cat.k ? 'on' : ''}`}
                  onClick={() => setCategory(cat.k)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="layout">
              <div>
                {/* Toolbar */}
                <div className="toolbar">
                  <span className="count">{filtered.length} POST{filtered.length !== 1 ? 'S' : ''}</span>
                  <div className="tb-r">
                    <select value={sort} onChange={(e) => setSort(e.target.value)}>
                      <option value="new">Newest first</option>
                      <option value="old">Oldest first</option>
                    </select>
                    <div className="seg-ctl view">
                      <button
                        className={viewMode === 'grid' ? 'on' : ''}
                        onClick={() => setViewMode('grid')}
                        title="Grid view"
                      >
                        <GridIcon />
                      </button>
                      <button
                        className={viewMode === 'list' ? 'on' : ''}
                        onClick={() => setViewMode('list')}
                        title="List view"
                      >
                        <ListIcon />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Active tag filter */}
                {selectedTag && (
                  <div style={{marginBottom:'14px',fontSize:'11px',color:'var(--muted)'}}>
                    Filtered by <b style={{color:'var(--accent)'}}>{selectedTag}</b>
                    <button
                      onClick={() => setSelectedTag(null)}
                      style={{marginLeft:'8px',color:'var(--accent)',background:'none',border:'none',cursor:'pointer'}}
                    >
                      clear ×
                    </button>
                  </div>
                )}

                {/* Posts Grid */}
                {filtered.length > 0 ? (
                  <div className={viewMode === 'grid' ? 'posts-grid' : 'posts-list'}>
                    {filtered.map(post => (
                      <article className="post-card" key={post.slug}>
                        <div className="pc-body">
                          <div className="pc-cat">
                            {post.tags?.some(t => t.toLowerCase().includes('cve')) ? 'CVE WRITEUP' : 'RESEARCH'}
                          </div>
                          <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                          <p className="sum">{post.summary || post.description}</p>
                          <div className="pc-tags">
                            {post.tags?.slice(0, 3).map((tag, i) => (
                              <span
                                className="tag"
                                key={i}
                                onClick={(e) => { e.preventDefault(); setSelectedTag(tag); }}
                                style={{cursor:'pointer'}}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="pc-foot">
                          <div className="pc-meta">
                            <span className="mi">{fmtDate(post.date)}</span>
                            <span className="mi"><ClockIcon /> {post.readTime || 5} min</span>
                          </div>
                          <Link href={`/blog/${post.slug}`} className="read-link">
                            Read <ArrowIcon />
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="empty">
                    <div className="cmd">$ ls ./{category}</div>
                    <p>No posts match your search.</p>
                    <button
                      className="link-cta"
                      onClick={() => { setSearch(''); setCategory('all'); setSelectedTag(null); }}
                    >
                      <span>Clear filters</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="sidebar">
                <div className="side-box">
                  <div className="label">Topics</div>
                  <div className="cloud">
                    {tags.slice(0, 12).map(({ tag, count }) => (
                      <button
                        key={tag}
                        className={`t-chip ${selectedTag === tag ? 'on' : ''}`}
                        onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                      >
                        {tag} <b>{count}</b>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="side-box">
                  <div className="label">Latest CVEs</div>
                  <ul className="side-cves">
                    {cves.map((cve, i) => (
                      <li key={i}>
                        <Link href="/cves">
                          <span className="id">{cve.id}</span>
                          <span className={`sev ${cve.severity?.toLowerCase()}`}>{cve.cvss}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/cves" className="more-link">
                    <span>All CVEs</span><ArrowIcon />
                  </Link>
                </div>

                <div className="side-box sub">
                  <div className="cmd">$ subscribe</div>
                  <p>New research lands here first. Follow along via RSS or on X.</p>
                  <div className="sub-btns">
                    <a className="btn sm" href="/feed.xml">
                      <RssIcon /> RSS Feed
                    </a>
                    <a className="ghost" href={siteMetadata.twitter} target="_blank" rel="noopener noreferrer">
                      @Qwesi_RED <ExtIcon />
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
