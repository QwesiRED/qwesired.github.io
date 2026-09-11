import Head from 'next/head'
import Link from 'next/link'
import { format } from 'date-fns'
import { FaArrowLeft, FaTwitter, FaLinkedin, FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa'
import { getAllPostSlugs, getPostData, getSortedPostsData } from '../../lib/posts'
import siteMetadata from '../../data/siteMetadata'

export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug)
  const allPosts = getSortedPostsData()

  // Get related posts (exclude current post, take up to 5)
  const relatedPosts = allPosts
    .filter(p => p.slug !== params.slug)
    .slice(0, 5)

  return {
    props: {
      post: postData,
      relatedPosts
    }
  }
}

const tagColorMap = {
  'CVE': 'tag-red',
  'Vulnerability Research': 'tag-green',
  'Penetration Testing': 'tag-blue',
  'Web Security': 'tag-purple',
  'Authentication Bypass': 'tag-orange',
  'Path Traversal': 'tag-orange',
  'Critical': 'tag-red',
  'SSRF': 'tag-purple',
  'RCE': 'tag-red',
}

export default function BlogPost({ post, relatedPosts }) {
  const shareUrl = `${siteMetadata.siteUrl}/blog/${post.slug}`
  const ogImage = post.image ? `${siteMetadata.siteUrl}${post.image}` : null

  return (
    <>
      <Head>
        <title>{post.title} | {siteMetadata.title}</title>
        <meta name="description" content={post.description || post.title} key="description" />

        {/* Open Graph */}
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

        {/* Twitter Card */}
        <meta name="twitter:card" content={ogImage ? "summary_large_image" : "summary"} key="twitter:card" />
        <meta name="twitter:site" content="@Qwesi_RED" key="twitter:site" />
        <meta name="twitter:title" content={post.title} key="twitter:title" />
        <meta name="twitter:description" content={post.description || post.title} key="twitter:description" />
        {ogImage && <meta name="twitter:image" content={ogImage} key="twitter:image" />}
      </Head>

      {/* Main container - expands on xl to fit blog + sidebar */}
      <div className="max-w-3xl xl:max-w-6xl mx-auto px-4 py-12">
        <div className="xl:flex xl:gap-10">
          {/* Blog content - always keeps its full width (max-w-3xl) */}
          <article className="w-full xl:w-[768px] xl:flex-shrink-0">
          {/* Back Link */}
          <Link href="/blog" className="inline-flex items-center text-dark-muted hover:text-accent transition-colors text-sm mb-8">
            <FaArrowLeft className="mr-2" size={12} />
            Back to Blog
          </Link>

          {/* Hero Image */}
          {post.image && (
            <div className="mb-8 rounded-lg overflow-hidden border border-dark-border-subtle">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-dark-text mb-4 font-sans leading-tight">
              {post.title}
            </h1>

            {/* Mobile/Tablet: Show date and author inline */}
            <div className="xl:hidden flex flex-wrap items-center gap-3 text-dark-muted text-sm mb-4">
              <span className="flex items-center gap-1.5">
                <FaCalendar size={12} className="text-dark-faded" />
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </span>
              <span className="text-dark-faded">•</span>
              <span>By {siteMetadata.author}</span>
            </div>

            {/* Mobile/Tablet: Show tags */}
            {post.tags && (
              <div className="xl:hidden flex flex-wrap gap-2">
                {post.tags.slice(0, 4).map(tag => (
                  <span key={tag} className={`tag ${tagColorMap[tag] || ''}`}>
                    {tag}
                  </span>
                ))}
                {post.tags.length > 4 && (
                  <span className="text-dark-faded text-xs">+{post.tags.length - 4} more</span>
                )}
              </div>
            )}
          </header>

          {/* Content */}
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Mobile/Tablet: Share and Author */}
          <div className="xl:hidden mt-12 pt-8 border-t border-dark-border-subtle">
            <h3 className="text-sm font-semibold text-dark-text mb-4 font-sans">Share this post</h3>
            <div className="flex gap-3 mb-8">
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}&via=Qwesi_RED`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 card text-dark-muted hover:text-accent hover:border-accent text-xs gap-1.5"
              >
                <FaTwitter size={12} />
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 card text-dark-muted hover:text-accent hover:border-accent text-xs gap-1.5"
              >
                <FaLinkedin size={12} />
                LinkedIn
              </a>
            </div>

            {/* Author Card */}
            <div className="card p-4 flex items-center gap-4 mb-8">
              <img
                src="/images/adam-nurudini.jpg"
                alt={siteMetadata.author}
                className="w-12 h-12 rounded-full object-cover border border-accent/30"
              />
              <div>
                <h4 className="text-sm font-semibold text-dark-text font-sans">{siteMetadata.author}</h4>
                <p className="text-dark-muted text-xs">Offensive Security Consultant | CVE Author</p>
              </div>
            </div>

            {/* Mobile: Related Posts */}
            {relatedPosts.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-dark-text mb-4 font-sans">More Posts</h3>
                <div className="space-y-3">
                  {relatedPosts.slice(0, 3).map(relPost => (
                    <Link
                      key={relPost.slug}
                      href={`/blog/${relPost.slug}`}
                      className="block card p-3 hover:border-accent transition-colors"
                    >
                      <h4 className="text-sm text-dark-text font-medium line-clamp-2 mb-1">{relPost.title}</h4>
                      <span className="text-xs text-dark-faded">{format(new Date(relPost.date), 'MMM d, yyyy')}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Right side panel - uses remaining space on xl screens */}
        <aside className="hidden xl:block xl:flex-1 xl:max-w-xs">
          <div className="sticky top-20 space-y-6">
            {/* Post Meta */}
            <div className="card p-5">
              <h3 className="text-xs font-semibold text-dark-faded uppercase tracking-wider mb-4">Post Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-dark-muted">
                  <FaCalendar size={12} className="text-dark-faded" />
                  <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
                </div>
                <div className="flex items-center gap-2 text-dark-muted">
                  <FaUser size={12} className="text-dark-faded" />
                  <span>{siteMetadata.author}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="card p-5">
                <h3 className="text-xs font-semibold text-dark-faded uppercase tracking-wider mb-4">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className={`tag ${tagColorMap[tag] || ''}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share */}
            <div className="card p-5">
              <h3 className="text-xs font-semibold text-dark-faded uppercase tracking-wider mb-4">Share</h3>
              <div className="flex flex-col gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}&via=Qwesi_RED`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 card text-dark-muted hover:text-accent hover:border-accent text-xs gap-2 justify-center"
                >
                  <FaTwitter size={14} />
                  Share on Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 card text-dark-muted hover:text-accent hover:border-accent text-xs gap-2 justify-center"
                >
                  <FaLinkedin size={14} />
                  Share on LinkedIn
                </a>
              </div>
            </div>

            {/* Author */}
            <div className="card p-5">
              <h3 className="text-xs font-semibold text-dark-faded uppercase tracking-wider mb-4">Author</h3>
              <div className="flex items-center gap-3">
                <img
                  src="/images/adam-nurudini.jpg"
                  alt={siteMetadata.author}
                  className="w-10 h-10 rounded-full object-cover border border-accent/30"
                />
                <div>
                  <h4 className="text-sm font-semibold text-dark-text font-sans">{siteMetadata.author}</h4>
                  <p className="text-dark-faded text-xs">CVE Author</p>
                </div>
              </div>
              <p className="text-dark-muted text-xs mt-3 leading-relaxed">
                Offensive Security Consultant specializing in vulnerability research and penetration testing.
              </p>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="card p-5">
                <h3 className="text-xs font-semibold text-dark-faded uppercase tracking-wider mb-4">More Posts</h3>
                <div className="space-y-4">
                  {relatedPosts.map(relPost => (
                    <Link
                      key={relPost.slug}
                      href={`/blog/${relPost.slug}`}
                      className="block group"
                    >
                      <h4 className="text-sm text-dark-text group-hover:text-accent transition-colors font-medium line-clamp-2 mb-1">
                        {relPost.title}
                      </h4>
                      <span className="text-xs text-dark-faded">{format(new Date(relPost.date), 'MMM d, yyyy')}</span>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center text-accent hover:text-accent-600 text-xs mt-4 gap-1"
                >
                  View all posts <FaArrowRight size={10} />
                </Link>
              </div>
            )}
          </div>
        </aside>
        </div>
      </div>
    </>
  )
}
