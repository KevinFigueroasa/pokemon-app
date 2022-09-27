import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import colors from '../../public/colors.json';
import types from '../../public/types.json'
import '../../src/css/progress-bar.css'

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
                <img src={getPokemon.sprites?.other.dream_world.front_default !== null ?
                    getPokemon.sprites?.other.dream_world.front_default : getPokemon.sprites?.other["official-artwork"].front_default !== null ? getPokemon.sprites?.other["official-artwork"].front_default : getPokemon.sprites?.other.home.front_default 
                } alt="" />
                <div className='back-white'>
                    <h2>{getPokemon.name}</h2>
                    <h4>Type: {getPokemon.types?.[0].type.name}</h4>
                    <div className='principal-pokeinfo'>
                        {/* <p className='values'>{getPokemon.stats?.[0].base_stat}<p className='stats'>HP</p></p>
                        <p className='values'>{getPokemon.stats?.[1].base_stat}<p className='stats'>Attack</p></p>
                        <p className='values'>{getPokemon.stats?.[2].base_stat}<p className='stats'>Defense</p></p> */}
                        <div className='principal-stats'>
                            <p className='values'>{getPokemon.stats?.[0].base_stat}</p>
                            <p className='stats'>HP</p>
                        </div>
                        <div className='principal-stats'>
                            <p className='values'>{getPokemon.weight}</p>
                            <p className='stats'>Weight</p>
                        </div>
                        <div className='principal-stats'>
                            <p>{getPokemon.height}</p>
                            <p className='stats'>Height</p>
                        </div>
                    </div>

                    <div className="abilities">
                        <div className="abilities__item">
                            <div className='abilities__item--container'>
                                <p className="abilities__speed">ATK: {getPokemon.stats?.[1].base_stat}</p>
                            </div>
                            <div id='toggle-colors' className={`abilities__bar abilities__bar--${getPokemon.stats?.[1].base_stat <= 30 ? "lent" : getPokemon.stats?.[1].base_stat >=125 ? "rapid" : getPokemon.stats?.[1].base_stat <= 30 ? "lent" : getPokemon.stats?.[1].base_stat}`}></div>
                        </div>
                        <div className="abilities__item">
                            <div className='abilities__item--container'>
                                <p className="abilities__speed">DEF: {getPokemon.stats?.[2].base_stat}</p>
                            </div>
                            <div className={`abilities__bar abilities__bar--${getPokemon.stats?.[2].base_stat <= 30 ? "lent" : getPokemon.stats?.[2].base_stat >=125 ? "rapid" : getPokemon.stats?.[2].base_stat <= 30 ? "lent" : getPokemon.stats?.[2].base_stat}`}></div>
                        </div>
                        <div className="abilities__item">
                            <div className='abilities__item--container'>
                                <p className="abilities__speed">SPD: {getPokemon.stats?.[5].base_stat}</p>
                            </div>
                            <div id='toggle-colors' className={`abilities__bar abilities__bar--${getPokemon.stats?.[5].base_stat <= 30 ? "lent" : getPokemon.stats?.[5].base_stat >=125 ? "rapid" : getPokemon.stats?.[5].base_stat <= 30 ? "lent" : getPokemon.stats?.[5].base_stat}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;