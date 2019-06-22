import React, {Component} from 'react'
import { BrowserRouter , Route, Switch} from 'react-router-dom'
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import Badges from '../pages/Badges';
import BadgeDetails from '../pages/BadgeDetails';
import Notfound from '../pages/Notfound';
import Layout from './Layout'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/badges" component={Badges}/>
            <Route exact path="/badges/new" component={BadgeNew}/>
            <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
            <Route exact path="/badges/:badgeId" component={BadgeDetails}/>
            <Route component={Notfound}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App
