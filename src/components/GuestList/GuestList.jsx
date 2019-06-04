import React, { Component } from 'react';
import Guest from '../Guest/Guest';

class GuestList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="guest-list">
                {this.props.guests.map((guest) => {
                    return <Guest name={guest.name} />
                })}
            </div>
        );
    }
}

export default GuestList;