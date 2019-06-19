import React, {Component} from 'react'
import { BrowserRouter , Route, Switch} from 'react-router-dom'
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Layout from './Layout'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/badges" component={Badges}/>
            <Route exact path="/badges/new" component={BadgeNew}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App
