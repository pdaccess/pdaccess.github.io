import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true
})

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const collection = event.context.params.collection as string || 'blog'
  const slug = query.slug as string

  const contentDir = join(process.cwd(), 'content', collection)
  
  try {
    const files = readdirSync(contentDir)
    let items = files
      .filter(f => f.endsWith('.md'))
      .map(f => {
        const filePath = join(contentDir, f)
        const content = readFileSync(filePath, 'utf-8')
        
        // Parse frontmatter
        const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
        const frontmatter = frontmatterMatch ? frontmatterMatch[1] : ''
        const body = content.replace(/^---\n[\s\S]*?\n---/, '').trim()
        
        // Parse frontmatter fields
        const fields: Record<string, any> = {}
        frontmatter.split('\n').forEach(line => {
          const [key, ...valueParts] = line.split(': ')
          const value = valueParts.join(': ').trim()
          if (key && value) {
            // Try to parse as JSON
            try {
              fields[key] = JSON.parse(value)
            } catch {
              fields[key] = value
            }
          }
        })
        
        return {
          _path: `/${collection}/${f.replace('.md', '')}`,
          _file: f,
          collection,
          ...fields,
          body: md.render(body)
        }
      })
    
    // Sort by updatedAt or time if available
    items = items.sort((a, b) => {
      const dateA = a.updatedAt || a.time || ''
      const dateB = b.updatedAt || b.time || ''
      return dateB.localeCompare(dateA)
    })
    
    // If slug is provided, return single item
    if (slug) {
      const item = items.find(i => i._path === `/${collection}/${slug}`)
      return item || null
    }
    
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to read content'
    })
  }
})
