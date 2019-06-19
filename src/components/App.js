import React, {Component} from 'react'
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import { BrowserRouter , Route, Switch} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/badges" component={Badges}/>
          <Route exact path="/badges/new" component={BadgeNew}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
