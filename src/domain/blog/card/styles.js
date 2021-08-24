import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 345,
    '& h2': {
      fontWeight: 'bold',
      textAlign: 'left'
    },
    '& p': {
      fontSize: '14px',
      color: '#000000'
    }
  },
  media: {
    height: 148
  }
}))

export default useStyles
