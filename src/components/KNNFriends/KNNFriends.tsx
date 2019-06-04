import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import GuestList from '../GuestList/GuestList';

import Storage from '../../storage/storage';

class KNNFriends extends Component {

  render() {
    return (
      <div className="knn-friends">
        <NavBar />
        <div className="knn-friends__main-container">
          <div className="knn-friends__main-container__list-container">
            <h3 className="knn-friends__main-container__list-container__h3">Selecciona a una persona de la lista</h3>
            <hr className="knn-friends__main-container__list-container__hr"/>
            <GuestList className="knn-friends__main-container__list-container__guest-list" guests={Storage.guestList} />
            {/* <GuestList className="knn-friends__main-container__list-container__guest-list"
            guests={[{name: "Nataly Ruiz", age: 23},
            {name: "Jorge Eliecer", age: 23},
            {name: "Maria Paula Zea", age: 22},
            {name: "Lina", age: 25},
            {name: "Valentina", age: 20},
            {name: "Camila Sanchez", age: 22},
            {name: "Daniela Epe", age: 27},
            {name: "Jonathan Esteban Arias", age: 22},
            {name: "Maria del Mar", age: 20},
            {name: "Valentina Gonzalez", age: 23},
            {name: "Juan David Holgín", age: 20},
            {name: "David Stiven Ceballos", age: 19},
            {name: "Andrea Reyes", age: 21},
            {name: "Viviana Sierra", age: 20},
            {name: "Nicolas Martinez", age: 20},
            {name: "Alejandro Salazar", age: 19},
            {name: "Mauricio Botero Vallejo", age: 20},
            {name: "Estefanía Montaña", age: 20},
            {name: "Gabriel", age: 20},
            {name: "Oscar", age: 21}]} /> */}
          </div>

          <div className="knn-friends__main-container__detail-container">

          </div>
        </div>
      </div>
    );
  }
}

export default KNNFriends;