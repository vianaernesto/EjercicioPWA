import React, { Component } from 'react';
import Personaje from './Personaje';

class Marvel extends Component {

    state ={
        personajes : []
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.personajes.map((e,i)=>
                        <Personaje key={i} personaje={e}/>
                    )}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        if (!navigator.onLine) {
            if (localStorage.getItem('personajes') === null)
                this.setState({ personajes: "loading..." });
            else
                this.setState({ personajes: localStorage.getItem('personajes') });
        }
      
        fetch("https://gateway.marvel.com:443/v1/public/characters?ts=Ernesto&hash=6ac34fdeacbb4bec39982e5e938622cb&apikey=629bf2d5b2cc8c551348406dc16a0f89")
          .then(res => {
              return res.json();
          }).then(res => {
              this.setState({ personajes: res.data.results });
              localStorage.setItem('personajes', res.data.results);
          });
      }
}

export default Marvel;