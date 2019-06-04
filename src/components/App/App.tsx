import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../Home/Home';
import KNNFriends from '../KNNFriends/KNNFriends';
import CreateFestival from '../CreateFestival/CreateFestival';
import Music from '../Music/Music';

class App extends Component {
  constructor(props: {}){
    super(props);
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

export default App;
