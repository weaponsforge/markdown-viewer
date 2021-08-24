import PropTypes from 'prop-types'
import { useHistory, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import LizardImage from '../../../assets/images/contemplative-reptile.jpg'
import useStyles from './styles'

function BlogCard ({ title = 'Title', content = '...', image = LizardImage, link = '/' }) {
  const classes = useStyles()
  const history = useHistory()
  const handleClick = () => history.push(link)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary' onClick={handleClick}>
          Read on
        </Button>
      </CardActions>
    </Card>
  )
}

BlogCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.node,
  link: PropTypes.link
}

export default BlogCard
