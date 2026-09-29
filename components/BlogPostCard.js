import Link from 'next/link'
import { format } from 'date-fns'
import { FaArrowRight } from 'react-icons/fa'

export default function BlogPostCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="py-5 border-b border-dark-border-subtle last:border-b-0">
        {/* Date */}
        <div className="text-xs text-dark-faded uppercase tracking-wider mb-2">
          {format(new Date(post.date), 'dd MMM yyyy').toUpperCase()}
        </div>

        {/* Content row */}
        <div className="flex items-center justify-between gap-6">
          <div className="flex-1 min-w-0">
            {/* Title */}
            <h3 className="text-base text-dark-text group-hover:text-accent transition-colors mb-2 line-clamp-1">
              {post.title}
            </h3>

            {/* Meta */}
            <div className="flex items-center gap-3 text-xs">
              {post.tags?.slice(0, 2).map(tag => (
                <span key={tag} className="text-dark-muted">
                  {tag}
                </span>
              ))}
              {post.readingTime && (
                <span className="text-dark-faded">⏱ {post.readingTime} min</span>
              )}
            </div>
          </div>

          <FaArrowRight className="text-dark-faded group-hover:text-accent transition-colors flex-shrink-0" size={12} />
        </div>
      </article>
    </Link>
  )
}
