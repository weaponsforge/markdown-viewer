import MarkdownViewer from './components/markdown_viewer'

const routes = [
  {
    path: '/home',
    isProtected: false,
    component: MarkdownViewer
  },
  {
    path: '/:id',
    isProtected: false,
    component: MarkdownViewer
  },
  {
    path: '/',
    isProtected: false,
    component: MarkdownViewer
  }
]

export default routes
