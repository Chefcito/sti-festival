import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Storage from '../../storage/storage';

class Guest extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.selected,
        }
    }

    render() {
        return (
        <div className="guest">
            <div className="guest__image">
                <img className="guest__image__img" src={require("../../resources/images/profile/" + this.props.imageId + ".png")} alt=""/>
            </div>

            <div className="guest__info">
                <p className="guest__info__name" 
                style={{ color: this.props.id === Storage.currentKNNGuestId ? '#EE2535' : 'white',}}>{this.props.name}</p>
                <p className="guest__info__age" 
                style={{ color: this.props.id === Storage.currentKNNGuestId ? '#EE2535' : 'white',}}>{this.props.age}</p>
            </div>
        </div>
        );
    }
}

export default observer(Guest);