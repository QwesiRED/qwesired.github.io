import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug,
        ...matterResult.data
      }
    })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, '')
        }
      }
    })
}

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  return {
    slug,
    contentHtml,
    ...matterResult.data
  }
}

export function getAllTags() {
  const posts = getSortedPostsData()
  const tagCount = {}

  posts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => {
        tagCount[tag] = (tagCount[tag] || 0) + 1
      })
    }
  })

  return Object.entries(tagCount)
    .sort((a, b) => b[1] - a[1])
    .map(([tag, count]) => ({ tag, count }))
}

export function getPostsByTag(tag) {
  const posts = getSortedPostsData()
  return posts.filter(post => post.tags && post.tags.includes(tag))
}
