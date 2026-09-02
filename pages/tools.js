import Head from 'next/head'
import { FaWrench, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import siteMetadata from '../data/siteMetadata'

export default function Tools() {
  const tools = siteMetadata.tools || []

  return (
    <>
      <Head>
        <title>Tools | {siteMetadata.title}</title>
        <meta name="description" content="Security tools developed by QwesiRED" />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <FaWrench className="text-accent" />
            <h1 className="text-2xl font-bold text-dark-text font-sans">
              Tools
            </h1>
          </div>
          <p className="text-dark-muted text-sm max-w-2xl">
            Open-source security tools I've developed to automate common pentesting tasks
            and improve offensive security workflows.
          </p>
        </div>

        {/* Tools Grid */}
        {tools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tools.map((tool, idx) => (
              <div key={idx} className="card p-5 card-interactive">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-base font-semibold text-dark-text font-sans">
                    {tool.name}
                  </h2>
                  <a
                    href={tool.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-faded hover:text-accent transition-colors"
                  >
                    <FaGithub size={18} />
                  </a>
                </div>

                <p className="text-dark-muted text-sm mb-4">
                  {tool.description}
                </p>

                {tool.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.tags.map(tag => (
                      <span key={tag} className="tag tag-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <a
                  href={tool.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-accent-600 text-xs gap-1"
                >
                  View on GitHub <FaExternalLinkAlt size={10} />
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-4xl mb-4 opacity-50">🔧</div>
            <h2 className="text-lg font-semibold text-dark-text mb-2 font-sans">Coming Soon</h2>
            <p className="text-dark-muted text-sm">Tools will be published here.</p>
          </div>
        )}

        {/* More Coming */}
        <div className="mt-10 card p-5 border-accent/20 bg-accent-glow/30">
          <h3 className="text-sm font-semibold text-dark-text mb-2 font-sans">More Tools Coming</h3>
          <p className="text-dark-muted text-xs">
            I'm actively developing more tools for penetration testing, credential harvesting,
            and security automation. Follow me on GitHub to stay updated.
          </p>
        </div>
      </div>
    </>
  )
}
