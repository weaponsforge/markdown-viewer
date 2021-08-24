import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import Container from '@material-ui/core/Container'

// Text highlight add-ons
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism'

// Custom CSS
import './custom.css'

// Renders markdown files as a static web page.
function MarkdownBlogPage (props) {
  const [doc, setDoc] = useState('Loading...')

  useEffect(() => {
    try {
      const mdFile = props.match.params.id ? props.match.params.id : 'markdown'
      const md = require(`../../../pages/markdown/${mdFile}.md`)

      fetch(md.default).then((response) => response.text()).then((text) => {
        setDoc(text)
      })
    } catch (err) {
      setDoc('Not found')
    }
  }, [props.history, props.match.params.id])

  return (
    <Container maxWidth='md'>
      <ReactMarkdown
        children={doc}
        remarkPlugins={[remarkGfm]}
        components={{
          /* eslint-disable react/prop-types */
          code ({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match
              ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={coldarkCold}
                  language={match[1]}
                  PreTag='div'
                  {...props}
                />
              )
              : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
          }
        }}
      />
    </Container>
  )
}

MarkdownBlogPage.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
}

export default MarkdownBlogPage
