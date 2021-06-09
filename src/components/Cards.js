import React from 'react'
import './Cards.css';

export default function Cards({pokemons}) {
    console.log(pokemons)
    return (
        <div className="container">
            <img className="logo" src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png"/>
            {pokemons.map((p) => (
                <li className="pokeCard" key={p.name}>{p.name}</li>
            ))}
        </div>
    )
}