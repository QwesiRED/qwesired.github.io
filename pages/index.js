import Head from 'next/head'
import Link from 'next/link'
import { FaShieldAlt, FaBug, FaCode, FaArrowRight, FaSearch, FaBriefcase, FaFileCode, FaCertificate, FaLinkedin, FaTwitter } from 'react-icons/fa'
import siteMetadata from '../data/siteMetadata'
import { getSortedPostsData } from '../lib/posts'
import BlogPostCard from '../components/BlogPostCard'
import CVECard from '../components/CVECard'
import Terminal from '../components/Terminal'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      recentPosts: allPostsData.slice(0, 3)
    }
  }
}

const expertiseIcons = {
  code: FaCode,
  bug: FaBug,
  search: FaSearch,
  shield: FaShieldAlt,
  file: FaFileCode,
  briefcase: FaBriefcase
}

export default function Home({ recentPosts }) {
  return (
    <>
      <Head>
        <title>{siteMetadata.title} | {siteMetadata.author}</title>
        <meta name="description" content={siteMetadata.profile.summary} />
      </Head>

      {/* Hero Section */}
      <section className="py-12 lg:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left Side - Profile */}
            <div>
              {/* Avatar + Name */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/images/adam-nurudini.jpg"
                  alt={siteMetadata.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent/50"
                />
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-dark-text font-sans">
                    {siteMetadata.author}
                  </h1>
                  <p className="text-accent font-mono text-sm">
                    {siteMetadata.profile.headline}
                  </p>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-dark-text text-sm italic mb-3">
                {siteMetadata.profile.tagline}
              </p>

              {/* Short Bio */}
              <p className="text-dark-muted leading-relaxed mb-4 text-sm">
                10+ years in security - built a bank's SOC from scratch, now simulating adversaries to protect Australia's most critical enterprises at Sekuro. CVE author. Full-spectrum perspective.
              </p>

              {/* Certifications */}
              <div className="flex flex-wrap gap-2 mb-6">
                {siteMetadata.certifications.slice(0, 5).map(cert => (
                  <a
                    key={cert.name}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 bg-accent/10 border border-accent/30 rounded text-accent text-xs font-semibold hover:bg-accent/20 hover:border-accent transition-colors"
                    title={`${cert.fullName} - ${cert.provider}`}
                  >
                    {cert.name}
                  </a>
                ))}
                <a
                  href="https://www.credly.com/users/adam-nurudini/badges"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 text-dark-faded text-xs hover:text-accent transition-colors"
                >
                  +{siteMetadata.certifications.length - 5} more
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link href="/blog" className="btn btn-primary">
                  Read My Blog
                </Link>
                <Link href="/cves" className="btn btn-outline">
                  View My CVEs
                </Link>
              </div>
            </div>

            {/* Right Side - Animated Terminal */}
            <Terminal />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <FaShieldAlt className="text-accent" />
            <h2 className="text-lg font-semibold text-dark-text font-sans">Expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteMetadata.expertise.map((item, idx) => {
              const Icon = expertiseIcons[item.icon] || FaShieldAlt
              return (
                <div key={idx} className="card p-5">
                  <Icon className="text-accent text-lg mb-3" />
                  <h3 className="text-sm font-semibold text-dark-text mb-2 font-sans">{item.title}</h3>
                  <p className="text-dark-muted text-xs leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CVE Section - Featured First */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <FaBug className="text-accent" />
              <h2 className="text-lg font-semibold text-dark-text font-sans">CVE Discoveries</h2>
            </div>
            <Link href="/cves" className="text-accent hover:text-accent-600 text-sm flex items-center gap-1">
              View all <FaArrowRight size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteMetadata.cves.map(cve => (
              <CVECard key={cve.id} cve={cve} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Research */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-dark-text font-sans">Latest Research</h2>
            <Link href="/blog" className="text-accent hover:text-accent-600 text-sm flex items-center gap-1">
              View all posts <FaArrowRight size={12} />
            </Link>
          </div>

          {recentPosts.length > 0 ? (
            <div className="space-y-4">
              {recentPosts.map(post => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-dark-muted">
              <p>Research articles coming soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Connect CTA */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="card p-6 border-accent/20 bg-accent/5 text-center">
            <h2 className="text-lg font-semibold text-dark-text mb-2 font-sans">Let's Connect</h2>
            <p className="text-dark-muted text-sm mb-4 max-w-xl mx-auto">
              Open to speaking engagements, security community collaboration, and knowledge sharing.
            </p>
            <div className="flex justify-center gap-3">
              <a href={siteMetadata.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary flex items-center gap-2">
                <FaLinkedin size={14} /> Connect on LinkedIn
              </a>
              <a href={siteMetadata.twitter} target="_blank" rel="noopener noreferrer" className="btn btn-outline flex items-center gap-2">
                <FaTwitter size={14} /> Follow on X
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
