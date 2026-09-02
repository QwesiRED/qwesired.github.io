const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const postsDirectory = path.join(process.cwd(), 'posts')
const siteMetadata = require('../data/siteMetadata')

function escapeXml(str) {
  if (!str) return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function generateRSSFeed() {
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      return {
        slug: fileName.replace(/\.md$/, ''),
        ...data
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteMetadata.title)}</title>
    <link>${siteMetadata.siteUrl}</link>
    <description>${escapeXml(siteMetadata.description)}</description>
    <language>${siteMetadata.language}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteMetadata.siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteMetadata.siteUrl}/blog/${post.slug}</link>
      <guid>${siteMetadata.siteUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.description || post.title}]]></description>
    </item>`).join('')}
  </channel>
</rss>`

  const outDir = path.join(process.cwd(), 'public')
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true })
  }
  fs.writeFileSync(path.join(outDir, 'feed.xml'), rss)
  console.log('RSS feed generated at public/feed.xml')
}

generateRSSFeed()
