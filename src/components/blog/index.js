import BlogCard from '../../domain/blog/card'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import useStyles from './styles'

// Images
import LizardImage from '../../assets/images/contemplative-reptile.jpg'
import FieldsImage from '../../assets/images/fields.jpg'
import StarryNightImage from '../../assets/images/starry-night.jpg'
import PuppiesImage from '../../assets/images/cute-puppies.jpg'
import PinkImage from '../../assets/images/pink.jpg'
import './styles.css'

function Blog (props) {
  const classes = useStyles()
  console.log(props)

  return (
    <Container className={classes.container} maxWidth='md'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <BlogCard
            title='Markdown'
            content='Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica'
            image={FieldsImage}
            link='/notes/markdown'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BlogCard
            title='Create a React App'
            content='Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica'
            image={LizardImage}
            link='/notes/create-cra-app'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BlogCard
            title='How to Install NodeJS'
            content='Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica'
            image={PinkImage}
            link='/notes/how-to-install-nodejs'
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <BlogCard
            title='Blog Article'
            content='Sample blog article'
            image={StarryNightImage}
            link='/blog/sample-article'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BlogCard
            title='Blog Article - Doggie'
            content='Another blog article sample'
            image={PuppiesImage}
            link='/blog/dog'
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Blog
