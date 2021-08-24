import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'
import { Link } from 'react-router-dom'

function Navigation () {
  const classes = useStyles()

  return (
    <Container maxWidth='md'>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant='h5'>Markdown/HTML Files</Typography>
          <Link to='/'>
            <Typography variant='subtitle1' component='span'>Home</Typography>
          </Link> &nbsp;| &nbsp;
          <Link to='/notes/markdown'>
            <Typography variant='subtitle1' component='span'>Markdown</Typography>
          </Link> &nbsp;| &nbsp;
          <Link to='/notes/create-cra-app'>
            <Typography variant='subtitle1' component='span'>Create a React App</Typography>
          </Link> &nbsp;| &nbsp;
          <Link to='/notes/how-to-install-nodejs'>
            <Typography variant='subtitle1' component='span'>How to Install NodeJS</Typography>
          </Link> &nbsp;| &nbsp;
          <Link to='/blog/sample-article'>
            <Typography variant='subtitle1' component='span'>Blog Article</Typography>
          </Link> &nbsp;| &nbsp;
          <Link to='/blog/dog'>
            <Typography variant='subtitle1' component='span'>Blog Article - Doggie</Typography>
          </Link>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Navigation
