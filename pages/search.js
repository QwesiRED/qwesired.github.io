import Head from 'next/head'
import { useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import siteMetadata from '../data/siteMetadata'

export default function Search() {
  const searchRef = useRef(null)

  useEffect(() => {
    // Load Pagefind dynamically at runtime
    async function loadPagefind() {
      if (typeof window !== 'undefined' && window.pagefind === undefined) {
        try {
          // Dynamic import using URL to avoid webpack bundling
          const pagefindPath = '/pagefind/pagefind.js'
          const module = await import(/* webpackIgnore: true */ pagefindPath)
          window.pagefind = module
          await window.pagefind.init()
        } catch (e) {
          console.log('Pagefind not available - run npm run build first')
        }
      }
    }
    loadPagefind()
  }, [])

  const handleSearch = async (e) => {
    const query = e.target.value
    const resultsContainer = document.getElementById('search-results')

    if (!query || query.length < 2) {
      resultsContainer.innerHTML = '<p class="text-dark-muted text-sm">Type at least 2 characters to search...</p>'
      return
    }

    if (window.pagefind) {
      const search = await window.pagefind.search(query)
      const results = await Promise.all(search.results.slice(0, 10).map(r => r.data()))

      if (results.length === 0) {
        resultsContainer.innerHTML = '<p class="text-dark-muted text-sm">No results found.</p>'
        return
      }

      resultsContainer.innerHTML = results.map(result => `
        <a href="${result.url}" class="block card p-4 mb-3 card-interactive">
          <h3 class="text-dark-text font-semibold text-sm mb-1">${result.meta.title || 'Untitled'}</h3>
          <p class="text-dark-muted text-xs line-clamp-2">${result.excerpt}</p>
        </a>
      `).join('')
    } else {
      resultsContainer.innerHTML = '<p class="text-dark-muted text-sm">Search available after build. Run <code>npm run build</code> first.</p>'
    }
  }

  return (
    <>
      <Head>
        <title>Search | {siteMetadata.title}</title>
        <meta name="description" content="Search security research and CVE writeups" />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <FaSearch className="text-accent" />
            <h1 className="text-2xl font-bold text-dark-text font-sans">Search</h1>
          </div>
          <p className="text-dark-muted text-sm">
            Search through blog posts, CVE writeups, and resources.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-8">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-faded" size={14} />
          <input
            ref={searchRef}
            type="text"
            placeholder="Search for vulnerabilities, techniques, tools..."
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-3 bg-dark-card border border-dark-border rounded-md text-dark-text placeholder-dark-faded text-sm focus:outline-none focus:border-accent"
            autoFocus
          />
        </div>

        {/* Results */}
        <div id="search-results">
          <p className="text-dark-muted text-sm">Type at least 2 characters to search...</p>
        </div>
      </div>
    </>
  )
}
