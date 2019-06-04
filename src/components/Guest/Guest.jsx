import React, { Component } from 'react';

class Guest extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="guest">
            <p className="guest__name">{this.props.name}</p>
        </div>
        );
    }
}

export default Guest;