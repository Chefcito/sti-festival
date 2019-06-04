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
          </div>

          <div className="knn-friends__main-container__detail-container">
            <div className="knn-friends__main-container__detail-container__guest">
              <img className="knn-friends__main-container__detail-container__guest__img" src={require('../../resources/images/profile/' + '5' + '.png')} alt=""/>
              <h2 className="knn-friends__main-container__detail-container__guest__name">Maria Paula Zea</h2>

              <div className="knn-friends__main-container__detail-container__guest__preferences">
                <table className="knn-friends__main-container__detail-container__guest__preferences__table">
                  <tr className="knn-friends__main-container__detail-container__guest__preferences__table__tr-titles">
                    <th className="knn-friends__main-container__detail-container__guest__preferences__table__tr__td">Comidas</th>
                    <th className="knn-friends__main-container__detail-container__guest__preferences__table__tr__td">Bebidas</th>
                    <th className="knn-friends__main-container__detail-container__guest__preferences__table__tr__td">Géneros</th>
                    <th className="knn-friends__main-container__detail-container__guest__preferences__table__tr__td">Artistas</th>
                  </tr>

                  <tr className="knn-friends__main-container__detail-container__guest__preferences__table__tr">
                    <td className="knn-friends__main-container__detail-container__guest__preferences__table__tr__td">Hamburguesa</td>
                    <td className="knn-friends__main-container__detail-container__guest__preferences__table__tr__td">Cerveza</td>
                    <td className="knn-friends__main-container__detail-container__guest__preferences__table__tr__td">Pop</td>
                    <td className="knn-friends__main-container__detail-container__guest__preferences__table__tr__td">Maroon 5</td>
                  </tr>

                  <tr className="knn-friends__main-container__detail-container__guest__preferences__table__tr">
                    <td className="knn-friends__main-container__detail-container__guest__preferences__table__tr__td">Asados</td>
                    <td className="knn-friends__main-container__detail-container__guest__preferences__table__tr__td">Vino</td>
                    <td className="knn-friends__main-container__detail-container__guest__preferences__table__tr__td">Trap</td>
                    <td className="knn-friends__main-container__detail-container__guest__preferences__table__tr__td">Adele</td>
                  </tr>

                  <tr className="knn-friends__main-container__detail-container__guest__preferences__table__tr">
                    <td className="knn-friends__main-container__detail-container__guest__preferences__table__tr__td">Postres</td>
                    <td className="knn-friends__main-container__detail-container__guest__preferences__table__tr__td">Té</td>
                    <td className="knn-friends__main-container__detail-container__guest__preferences__table__tr__td">Bachata</td>
                    <td className="knn-friends__main-container__detail-container__guest__preferences__table__tr__td">Aventura</td>
                  </tr>
                </table>
              </div>

              <h2 className="knn-friends__main-container__detail-container__guest__KNN-title">Vecinos cercanos</h2>
              <div className="knn-friends__main-container__detail-container__guest__KNN-guests">
                <GuestList className="knn-friends__main-container__detail-container__guest__KNN-guests__guest-list" guests={Storage.guestListKNN}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KNNFriends;