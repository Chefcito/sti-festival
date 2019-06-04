import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Guest from '../Guest/Guest';

class GuestList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="guest-list">
                {this.props.guests.map((guest) => {
                    return <Guest key={guest.id} name={guest.name} age={guest.age} />
                })}
            </div>
        );
    }
}

export default observer(GuestList);