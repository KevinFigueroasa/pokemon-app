import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const [pokemons, setPokemons] = useState([])
    const [results, setResults] = useState([])
    const [inputText, setInputText] = useState('')
    const [isOpened, setIsOpened] = useState(false)
    const navigate = useNavigate();

    // const [ inputPokemon, setInputPokemon ] = useState('')

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1200`)
            .then(res => setPokemons(res.data.results))
    }, [])

    const searchByName = () => {
        navigate(`/pokemons/${inputText}`)
    }

    const ref = useOnclickOutside(() => {
        setIsOpened(false)
    })

    const search = (text) => {
        setInputText(text)

        const results = pokemons?.filter(pokemon => pokemon.name.includes(text.toLowerCase()))

        setIsOpened(false)

        if (results) {
            setIsOpened(true)
            setResults(results.slice(0, 15))
        }
    }

    const getId = url => url.split('/').at(-2);

    const parseName = name => name?.replace('-', ' ');

    console.log("search", pokemons)

    return (
        <>
            <div className='search-container'>
                <input className='page__search--input' autoCorrect='undefined' type="search" autoComplete="off" value={inputText} name="Buscar" onChange={e => search(e.target.value)} placeholder="Search pokemon" />
                <button
                onClick={searchByName}
                    className='button-search'
                ><i className="fa-solid fa-magnifying-glass"></i></button>
                {isOpened && (
                    <ul className='search__container' id="results" ref={ref}>
                        {results.map(pokemon => (

                            <li key={pokemon.url} onClick={() => navigate(`/pokemons/${pokemon.name}/`)}>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getId(pokemon.url)}.png`} />
                                <span>{parseName(pokemon.name)}</span>
                                {console.log(pokemon.url)}
                            </li>

                        ))}
                    </ul>
                )
                }
            </div>
        </>
    );
};

export default Search;