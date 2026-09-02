import Link from 'next/link'
import { format } from 'date-fns'

const tagColors = {
  'CVE': 'tag-red',
  'Vulnerability Research': 'tag-green',
  'Penetration Testing': 'tag-blue',
  'Web Security': 'tag-purple',
  'Authentication Bypass': 'tag-orange',
  'Path Traversal': 'tag-orange',
  'Red Team': 'tag-red',
  'OSINT': 'tag-green',
  'Exploit Development': 'tag-purple',
}

export default function BlogPostCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <article className="card p-5 card-interactive">
        {/* Tags row */}
        {post.tags && (
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {post.tags.slice(0, 4).map(tag => (
              <span key={tag} className={`tag ${tagColors[tag] || ''}`}>
                {tag}
              </span>
            ))}
            <span className="text-dark-faded text-xs ml-auto">
              {format(new Date(post.date), 'MMM d, yyyy')}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-base font-semibold text-dark-text mb-2 font-sans line-clamp-2">
          {post.title}
        </h3>

        {/* Description */}
        {post.description && (
          <p className="text-dark-muted text-sm mb-4 line-clamp-2">
            {post.description}
          </p>
        )}

        {/* Read link */}
        <div className="text-accent text-sm">
          Read: {post.title.length > 50 ? post.title.substring(0, 50) + '...' : post.title} →
        </div>
      </article>
    </Link>
  )
}
