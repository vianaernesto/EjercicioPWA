import React, { Component } from 'react';

class Comic extends Component {

    state ={
        nombre : this.props.comics.name
    }

    render() {
        return (
            <div>
                <li><h6>Nombre: {this.state.nombre}</h6>
                </li>
            </div>
        );
    }
}

export default Comic;