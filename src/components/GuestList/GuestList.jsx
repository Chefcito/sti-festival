import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Storage from '../../storage/storage';

import Guest from '../Guest/Guest';

class GuestList extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (id) => {
        Storage.setCurrentKNNGuestId(id);
    }

    render() {
        return (
            <div className="guest-list">
                {this.props.guests.map((guest) => {
                    return <Guest key={guest.id} 
                    id={guest.id} 
                    name={guest.name} 
                    age={guest.age} 
                    selected={guest.selected} 
                    imageId={guest.imageId}
                    onClick={() => {
                        this.handleClick(guest.id);
                    }}/>
                })}
            </div>
        );
    }
}

export default observer(GuestList);