import Head from 'next/head'
import { FaFlag, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import siteMetadata from '../data/siteMetadata'

export default function CTFWriteups() {
  const writeups = siteMetadata.ctfWriteups || []

  return (
    <>
      <Head>
        <title>CTF Writeups | {siteMetadata.title}</title>
        <meta name="description" content="Capture The Flag challenge writeups and solutions" />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <FaFlag className="text-accent" />
            <h1 className="text-2xl font-bold text-dark-text font-sans">
              CTF Writeups
            </h1>
          </div>
          <p className="text-dark-muted text-sm max-w-2xl">
            Capture The Flag challenge writeups, solutions, and walkthroughs from various
            competitions and practice platforms.
          </p>
        </div>

        {/* Writeups */}
        {writeups.length > 0 ? (
          <div className="space-y-4">
            {writeups.map((writeup, idx) => (
              <div key={idx} className="card p-5 card-interactive">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-base font-semibold text-dark-text font-sans">
                    {writeup.name}
                  </h2>
                  <a
                    href={writeup.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-faded hover:text-accent transition-colors"
                  >
                    <FaGithub size={18} />
                  </a>
                </div>

                <p className="text-dark-muted text-sm mb-4">
                  {writeup.description}
                </p>

                {writeup.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {writeup.tags.map(tag => (
                      <span key={tag} className="tag tag-green">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <a
                  href={writeup.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-accent-600 text-xs gap-1"
                >
                  View Writeups <FaExternalLinkAlt size={10} />
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-4xl mb-4 opacity-50">🚩</div>
            <h2 className="text-lg font-semibold text-dark-text mb-2 font-sans">Coming Soon</h2>
            <p className="text-dark-muted text-sm">CTF writeups will be published here.</p>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-10 card p-5 border-accent/20 bg-accent-glow/30">
          <h3 className="text-sm font-semibold text-dark-text mb-2 font-sans">About CTF Challenges</h3>
          <p className="text-dark-muted text-xs">
            CTF (Capture The Flag) competitions are cybersecurity challenges that test skills in
            web exploitation, reverse engineering, cryptography, forensics, and more. These writeups
            document my approach to solving various challenges.
          </p>
        </div>
      </div>
    </>
  )
}
