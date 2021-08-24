import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import DOMPurify from 'dompurify'

// Custom CSS
import './custom.css'

// Renders a valid-syntax HTML file thats saved with a .md extension name.
function HtmlBlogPage (props) {
  const [doc, setDoc] = useState('Loading...')

  useEffect(() => {
    try {
      // Use HTML syntax in MD files
      // because using the .html extension will require manual webpack.config customization and the react app to be ejected
      const htmlDoc = require(`../../../pages/html/${props.match.params.id}.md`)

      fetch(htmlDoc.default).then((response) => response.text()).then((text) => {
        const sanitizedDoc = DOMPurify.sanitize(text)
        setDoc(sanitizedDoc)
      })
    } catch (err) {
      setDoc('Not found')
    }
  }, [props.history, props.match.params.id])

  return (
    <Container maxWidth='md'>
      <div dangerouslySetInnerHTML={{ __html: doc }} />
    </Container>
  )
}

HtmlBlogPage.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
}

export default HtmlBlogPage
