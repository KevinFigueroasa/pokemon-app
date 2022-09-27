import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import colors from '../../public/colors.json';
import types from '../../public/types.json'

const PokemonCard = ({url}) => {

    const [getPokemon, setGetPokemon] = useState({})
    

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url)
        .then(res => setGetPokemon(res.data))
    }, [])
    
    const colorsFont = () => {
        let color = null
        types.map((type, index) => { // El primer parametro es el elemento del arreglo y el segundo es el índice 
          if (getPokemon.types?.[0].type.name === type) {
            color = colors[index]
          }
        })
        return color
      }

    // console.log(getPokemon)

    return (
        <div className='pokemon-cards' style={{background: colorsFont()}}>
            <div className='pokemon-data'
            onClick={() => navigate(`/pokemons/${getPokemon.id}`)}>
                <img src={getPokemon.sprites?.other.dream_world.front_default === null ?
                    getPokemon.sprites?.other["official-artwork"].front_default : getPokemon.sprites?.other.dream_world.front_default
                } alt="" />
                <div className='back-white'>
                    <h2>{getPokemon.name}</h2>
                    <h4>Type: {getPokemon.types?.[0].type.name}</h4>
                    <div className='principal-pokeinfo'>
                        <p>HP<br />{getPokemon.stats?.[0].base_stat}</p>
                        <p>Attack<br />{getPokemon.stats?.[1].base_stat}</p>
                        <p>Defense<br />{getPokemon.stats?.[2].base_stat}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;