import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/pokeMaster.slice';

const Login = () => {

    const [getName, setGetChangeName] = useState("")

    const navigate = useNavigate()

    const dispach = useDispatch()

    const dispachPokeMaster = () => {
        dispach(changeName(getName))
        navigate('/pokemons')
    }

    return (
        <div className='login'>
            <div className='welcome-trainer'>
                <h2>Hi, trainer! <br/>You're ready?</h2>
                <img id='poke-master' src="public\entrenadorPok.png" alt="" />
            </div>
            {/* <h2>Enter your name to start</h2> */}
            <div className='login-container'>
                <input type="text"
                placeholder='Enter your name'
                className='page__form--input'
                value={getName}
                onChange={e => setGetChangeName(e.target.value)}
                />

                <button className='button-start' onClick={dispachPokeMaster}>
                    <i className="fa-solid fa-right-to-bracket"></i>
                </button>
            </div>
        </div>
    );
};

export default Login;