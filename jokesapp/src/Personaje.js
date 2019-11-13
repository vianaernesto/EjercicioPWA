import React, { Component } from 'react';
import Comic from './Comic';

class Personaje extends Component {

    state ={
        nombre : this.props.personaje.name,
        descripcion: this.props.personaje.description,
        comics : this.props.personaje.comics.items,
    }

    render() {
        return (
            <div>
                <li><h4>Nombre : {this.state.nombre}</h4>
                <h5>{this.state.descripcion ? "Descripción:" : ""}</h5><h6>{this.state.descripcion}</h6>
                <h4>Comics a los que pertenece:</h4>
                <ul>{this.state.comics.map((e,i)=>
                        <Comic key={i} comics={e}/>
                    )}</ul>
                </li>
            </div>
        );
    }
}

export default Personaje;