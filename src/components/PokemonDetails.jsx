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
        <div>
            <h1>{getPokemonDetails.name}</h1>
            <img src={getPokemonDetails.sprites?.other.dream_world.front_default} alt="" />
        </div>
    );
};

export default PokemonDetails;