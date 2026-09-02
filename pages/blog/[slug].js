import Head from 'next/head'
import Link from 'next/link'
import { format } from 'date-fns'
import { FaArrowLeft, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { getAllPostSlugs, getPostData } from '../../lib/posts'
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
  return {
    props: {
      post: postData
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
}

export default function BlogPost({ post }) {
  const shareUrl = `${siteMetadata.siteUrl}/blog/${post.slug}`

  return (
    <>
      <Head>
        <title>{post.title} | {siteMetadata.title}</title>
        <meta name="description" content={post.description || post.title} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description || post.title} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@Qwesi_RED" />
      </Head>

      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center text-dark-muted hover:text-accent transition-colors text-sm mb-8">
          <FaArrowLeft className="mr-2" size={12} />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          {/* Tags */}
          {post.tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <span key={tag} className={`tag ${tagColorMap[tag] || ''}`}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-2xl md:text-3xl font-bold text-dark-text mb-4 font-sans leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-dark-muted text-sm">
            <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
            <span className="text-dark-faded">•</span>
            <span>By {siteMetadata.author}</span>
          </div>
        </header>

        {/* Content */}
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Share */}
        <div className="mt-12 pt-8 border-t border-dark-border-subtle">
          <h3 className="text-sm font-semibold text-dark-text mb-4 font-sans">Share this post</h3>
          <div className="flex gap-3">
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
        </div>

        {/* Author */}
        <div className="mt-8 card p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded bg-accent-glow border border-accent/30 flex items-center justify-center text-accent text-sm font-bold font-mono">
            AN
          </div>
          <div>
            <h4 className="text-sm font-semibold text-dark-text font-sans">{siteMetadata.author}</h4>
            <p className="text-dark-muted text-xs">Offensive Security Consultant | CVE Author</p>
          </div>
        </div>
      </article>
    </>
  )
}
