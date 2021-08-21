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
          <Typography variant='h4'>Markdown Testing Site</Typography>
          <Link to='/'>
            <Typography variant='subtitle1' component='span'>Home</Typography>
          </Link> &nbsp;| &nbsp;
          <Link to='/markdown'>
            <Typography variant='subtitle1' component='span'>Markdown</Typography>
          </Link> &nbsp;| &nbsp;
          <Link to='/create-cra-app'>
            <Typography variant='subtitle1' component='span'>Create a React App</Typography>
          </Link> &nbsp;| &nbsp;
          <Link to='/how-to-install-nodejs'>
            <Typography variant='subtitle1' component='span'>How to Install NodeJS</Typography>
          </Link>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Navigation
