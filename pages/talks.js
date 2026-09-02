import Head from 'next/head'
import { FaMicrophone, FaYoutube, FaFilePdf, FaExternalLinkAlt, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'
import siteMetadata from '../data/siteMetadata'

export default function Talks() {
  const talks = siteMetadata.talks || []

  return (
    <>
      <Head>
        <title>Talks & Presentations | {siteMetadata.title}</title>
        <meta name="description" content="Security conference talks, presentations, and workshops by QwesiRED" />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <FaMicrophone className="text-accent" />
            <h1 className="text-2xl font-bold text-dark-text font-sans">
              Talks & Presentations
            </h1>
          </div>
          <p className="text-dark-muted text-sm max-w-2xl">
            Security conference talks, workshops, and presentations I've delivered
            on topics ranging from penetration testing to security operations.
          </p>
        </div>

        {/* Talks List */}
        {talks.length > 0 ? (
          <div className="space-y-4">
            {talks.map((talk, idx) => (
              <div key={idx} className="card p-5 card-interactive">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                  <div>
                    <h2 className="text-base font-semibold text-dark-text font-sans mb-1">
                      {talk.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-dark-muted">
                      <span className="flex items-center gap-1">
                        <FaCalendar size={10} className="text-accent" />
                        {talk.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt size={10} className="text-accent" />
                        {talk.event}
                      </span>
                    </div>
                  </div>
                  {talk.tags && (
                    <div className="flex flex-wrap gap-2">
                      {talk.tags.map(tag => (
                        <span key={tag} className="tag tag-accent">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <p className="text-dark-muted text-sm mb-4">
                  {talk.description}
                </p>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {talk.video && (
                    <a
                      href={talk.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-danger hover:text-danger/80 text-xs gap-1"
                    >
                      <FaYoutube size={12} /> Watch Video
                    </a>
                  )}
                  {talk.slides && (
                    <a
                      href={talk.slides}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent hover:text-accent-600 text-xs gap-1"
                    >
                      <FaFilePdf size={12} /> View Slides
                    </a>
                  )}
                  {talk.link && (
                    <a
                      href={talk.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent hover:text-accent-600 text-xs gap-1"
                    >
                      <FaExternalLinkAlt size={10} /> More Info
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-4xl mb-4 opacity-50">🎤</div>
            <h2 className="text-lg font-semibold text-dark-text mb-2 font-sans">Coming Soon</h2>
            <p className="text-dark-muted text-sm">Conference talks and presentations will be posted here.</p>
          </div>
        )}

        {/* Past Speaking */}
        {siteMetadata.speaking && siteMetadata.speaking.length > 0 && (
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-dark-text mb-4 font-sans">Past Speaking Engagements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {siteMetadata.speaking.map((event, idx) => (
                <div key={idx} className="flex items-center text-dark-muted text-sm p-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                  <span>{event}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-10 card p-5 border-accent/20 bg-accent-glow/30">
          <h3 className="text-sm font-semibold text-dark-text mb-2 font-sans">Invite Me to Speak</h3>
          <p className="text-dark-muted text-xs mb-3">
            Interested in having me speak at your conference or event? I cover topics including
            penetration testing, vulnerability research, security operations, and more.
          </p>
          <a
            href={`mailto:${siteMetadata.email}`}
            className="inline-flex items-center text-accent hover:text-accent-600 text-xs gap-1"
          >
            Get in touch <FaExternalLinkAlt size={10} />
          </a>
        </div>
      </div>
    </>
  )
}
