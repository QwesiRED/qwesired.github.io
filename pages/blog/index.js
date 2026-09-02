import Head from 'next/head'
import { FaBook } from 'react-icons/fa'
import { getSortedPostsData, getAllTags } from '../../lib/posts'
import BlogPostCard from '../../components/BlogPostCard'
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

const tagColorMap = {
  'CVE': 'tag-red',
  'Vulnerability Research': 'tag-green',
  'Penetration Testing': 'tag-blue',
  'Web Security': 'tag-purple',
  'Authentication Bypass': 'tag-orange',
  'Path Traversal': 'tag-orange',
}

export default function Blog({ posts, tags }) {
  return (
    <>
      <Head>
        <title>Blog | {siteMetadata.title}</title>
        <meta name="description" content="Security research articles, CVE writeups, and vulnerability discoveries" />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <FaBook className="text-accent" />
            <h1 className="text-2xl font-bold text-dark-text font-sans">
              Blog
            </h1>
          </div>
          <p className="text-dark-muted text-sm max-w-2xl">
            Security research, vulnerability discoveries, exploit development, and technical deep dives.
          </p>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xs font-semibold text-dark-faded mb-3 uppercase tracking-wider">Topics</h2>
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 10).map(({ tag, count }) => (
                <span key={tag} className={`tag ${tagColorMap[tag] || ''}`}>
                  {tag} <span className="text-dark-faded ml-1">({count})</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Posts */}
        {posts.length > 0 ? (
          <div className="space-y-4">
            {posts.map(post => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-4xl mb-4 opacity-50">📝</div>
            <h2 className="text-lg font-semibold text-dark-text mb-2 font-sans">No posts yet</h2>
            <p className="text-dark-muted text-sm">Check back soon for security research and CVE writeups.</p>
          </div>
        )}
      </div>
    </>
  )
}
