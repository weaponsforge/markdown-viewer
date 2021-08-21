import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/navigation'
import routes from './routes'
import './App.css'

function App (props) {
  return (
    <Router>
      <Navigation />
      <Switch>
        {routes.map((entry, index) => (<Route exact path={entry.path} key={index} render={(props) =>
          <entry.component {...props} title='Props through render' />} />))}
      </Switch>
    </Router>
  )
}

export default App
