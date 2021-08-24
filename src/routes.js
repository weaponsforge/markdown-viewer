import MarkdownBlogPage from './domain/blog/markdown_viewer'
import HtmlBlogPage from './domain/blog/html_viewer'
import Blog from './components/blog'

const routes = [
  {
    path: '/blog/:id',
    isProtected: false,
    component: HtmlBlogPage
  },
  {
    path: '/notes/:id',
    isProtected: false,
    component: MarkdownBlogPage
  },
  {
    path: '/home',
    isProtected: false,
    component: Blog
  },
  {
    path: '/',
    isProtected: false,
    component: Blog
  }
]

export default routes
