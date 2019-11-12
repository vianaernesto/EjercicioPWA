import React, { Component } from 'react';

class Personaje extends Component {

    state ={
        nombre : this.props.personaje.name,
        descripcion: this.props.personaje.description,
    }

    render() {
        return (
            <div>
                <li><h3>{this.state.nombre}</h3>
                <h4>{this.state.descripcion}</h4></li>
            </div>
        );
    }
}

export default Personaje;