import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import GuestList from '../GuestList/GuestList';

class KNNFriends extends Component {

  render() {
    return (
      <div className="knn-friends">
        <NavBar />
        <div className="knn-friends__main-container">
          <div className="knn-friends__main-container__list-container">
            <h3 className="knn-friends__main-container__list-container__h3">Selecciona a una persona de la lista</h3>
            <hr className="knn-friends__main-container__list-container__hr"/>
            <GuestList className="knn-friends__main-container__list-container__guest-list"
            guests={[]} />
          </div>

          <div className="knn-friends__main-container__detail-container">

          </div>
        </div>
      </div>
    );
  }
}

export default KNNFriends;