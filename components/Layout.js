import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import siteMetadata from '../data/siteMetadata'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZVVVXMZWZQ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZVVVXMZWZQ');
            `,
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/adam-nurudini.jpg" />
        <meta name="theme-color" content="#0d1117" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteMetadata.title} />
        <meta property="og:title" content={`${siteMetadata.author} | ${siteMetadata.description}`} />
        <meta property="og:description" content={siteMetadata.profile.summary} />
        <meta property="og:image" content={`${siteMetadata.siteUrl}/images/adam-nurudini.jpg`} />
        <meta property="og:url" content={siteMetadata.siteUrl} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Qwesi_RED" />
        <meta name="twitter:title" content={`${siteMetadata.author} | ${siteMetadata.description}`} />
        <meta name="twitter:description" content={siteMetadata.profile.summary} />
        <meta name="twitter:image" content={`${siteMetadata.siteUrl}/images/adam-nurudini.jpg`} />

        {/* Additional SEO */}
        <meta name="author" content={siteMetadata.author} />
        <meta name="keywords" content="penetration testing, security consultant, CVE, vulnerability research, OSCP, offensive security, AppSec, SecOps" />
        <link rel="canonical" href={siteMetadata.siteUrl} />
        <link rel="alternate" type="application/rss+xml" title={`${siteMetadata.title} RSS Feed`} href="/feed.xml" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  )
}
