import React, { Component } from 'react';

class Guest extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="guest">
            <p className="guest__name">{this.props.name}</p>
            <p className="guest__age">{this.props.age}</p>
        </div>
        );
    }
}

export default Guest;