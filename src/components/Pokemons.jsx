import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import {currentPage} from '../store/slices/currentPage.slice';

const Pokemons = () => {

    const pokeMaster  = useSelector(state => state.userName)

    const [getPokemons, setGetPokemons] = useState([])

    const [ inputPokemon, setInputPokemon ] = useState('')

    const [ pokemonsTypes, setPokemonsTypes ] = useState([])

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const searchByName = () => {
        navigate(`/pokemons/${inputPokemon}`)
    }

    const searchByType = (pokemonTypeUrl) => {
        // alert(pokemonTypeUrl)
        if (pokemonTypeUrl) {
            axios
            .get(pokemonTypeUrl)
            .then(res => setGetPokemons(res.data.pokemon))
        }
    }

    const [nPage, setNPage] = useState(1)
    const page = useSelector(state => state.currentPage)
    const pokemonsPerPage = useSelector(state => state.pokemonsPerPage)
    const [nPage2, setNPage2] = useState(9)
    // const pokemonsPerPage = 16 Esto lo llevo a un satate de redux
    const lastPokemonIndex = page * pokemonsPerPage
    const firstPokemonIndex = lastPokemonIndex - pokemonsPerPage
    const pokemonsPaginated = getPokemons.slice(firstPokemonIndex, lastPokemonIndex)
    const totalPage = Math.ceil(getPokemons.length / pokemonsPerPage) // redondea el resultado hacia Arriba al contrario de floor
    const pageNumbers = []

    for (let i = nPage; i <= nPage2; i++) {
        pageNumbers.push(i)
    }

    const prev = (npage) => {
        setNPage(nPage-5)
        setNPage2(nPage2-5)
        dispatch(currentPage(npage-1))
      } 
      const next = (npage) => {
        setNPage(nPage+5)
        setNPage2(nPage2 +5)
        if (nPage === 1) {
          dispatch(currentPage(10))
        }else{
          dispatch(currentPage(npage))
        }
      } 
      const dispatchAction = (num) => {
        
        dispatch(currentPage(num))
    
      }

    useEffect(() => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
        .then(res => setGetPokemons(res.data.results))

        axios
        .get(`https://pokeapi.co/api/v2/type/`)
        .then(res => setPokemonsTypes(res.data.results))
    }, [])

    // console.log(getPokemons)
    console.log(getPokemons)

    return (
        <div className='pokemons-container'>
            <h1>Pokemons</h1>
            <input type="text"
            value={inputPokemon}
            onChange={e => setInputPokemon(e.target.value)}
            />
            <p>Bienvenido: {pokeMaster}</p>
            <button onClick={searchByName}>Search</button>
            <div>
                <select onChange={e => searchByType(e.target.value)}>
                    <option value="">Select Pokemon Type...</option>
                    {
                        pokemonsTypes.map(pokemon => (
                            <option key={pokemon.url} value={pokemon.url}>{pokemon.name}</option>
                        ))
                    }
                </select>
            </div>
            <button 
            onClick={() => prev(nPage)}
            disabled={nPage === 1}
            >Previus Page</button>
            {
                pageNumbers.map(num => (
                <button 
                    key={num}
                    onClick={() => dispatchAction(num)}
                    className={'selected'}
                >{num}
                </button>
                ))
            }
            <button onClick={() => next(nPage)}
            disabled={totalPage <= nPage2}
            >Next Page</button>
            <div className='pokemon-cards-container'>
                {
                    // getPokemons.map(pokemon => ( // este còdigo estaba antes de la pàginaciòn
                        pokemonsPaginated.map(pokemon => (
                        // <div key={pokemon.url}>{pokemon.url}</div>
                        <PokemonCard 
                        key={pokemon.url ? pokemon.url : pokemon.pokemon.url} 
                        url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Pokemons;