import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {

    const { id } = useParams()

    const [getPokemonDetails, setGetPokemonDetails] = useState({})

    useEffect(() => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => setGetPokemonDetails(res.data))
    }, [])

    console.log(getPokemonDetails)

    return (
        <div className='pokemon-details-container'>
            <div className='pokemon-details'>
                <img src={getPokemonDetails.sprites?.other.dream_world.front_default} alt="" />
                <h1>{getPokemonDetails.name}</h1>
                <p>Weight: {getPokemonDetails.weight}</p>
                <p>Heigth: {getPokemonDetails.height}</p>
            </div>

            <div className='pokemon-movements'>
                <h2>Movements</h2>
                    <ul>
                        {
                                getPokemonDetails.moves?.map(move => (
                                    <li>{move.move.name}</li>
                                ))
                        }
                    </ul>
            </div>
        </div>
    );
};

export default PokemonDetails;