import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import GuestList from '../GuestList/GuestList';

import Storage from '../../storage/storage';

class CreateFestival extends Component {

  render() {
    return (
      <div className="create-festival">
        <NavBar />
        <h1 className="create-festival__title">Escoge un algoritmo para generar tu festival</h1>
        <div className="create-festival__main-container">
          <div className="create-festival__main-container__button-bar">
            <button className="create-festival__main-container__button-bar__btn-small">MAXIMO PLACER</button>
            <button className="create-festival__main-container__button-bar__btn-small">MINIMA MISERIA</button>
            <button className="create-festival__main-container__button-bar__btn-large">GENERAR FESTIVAL ALEATORIO</button>
          </div>

          <div className="create-festival__main-container__guests-container">
            <div className="create-festival__main-container__guests-container__row">
              <GuestList  className="create-festival__main-container__guests-container__row__gest-list" guests={Storage.guestListAlgorithm1} />
            </div>
            <div className="create-festival__main-container__guests-container__row">
              <GuestList  className="create-festival__main-container__guests-container__row__gest-list" guests={Storage.guestListAlgorithm2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateFestival;