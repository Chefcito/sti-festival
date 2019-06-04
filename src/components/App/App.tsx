import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { observer } from 'mobx-react';

import Home from '../Home/Home';
import KNNFriends from '../KNNFriends/KNNFriends';
import CreateFestival from '../CreateFestival/CreateFestival';
import Music from '../Music/Music';

import Storage from '../../storage/storage'

class App extends Component {
  constructor(props: {}){
    super(props);
  }
  
  componentDidMount() {
    Storage.getGuests();
      setTimeout(() => {
        Storage.setGuests();
      }, 2000);
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>   
            <Route path="/" component={ Home } exact />
            <Route path="/KNNFriends" component={ KNNFriends } exact />
            <Route path="/CreateFestival" component={ CreateFestival } exact />
            <Route path="/Music" component={ Music } exact />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default observer(App);
