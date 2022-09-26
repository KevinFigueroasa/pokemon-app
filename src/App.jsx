import './App.css'
import {Routes, HashRouter, Route} from 'react-router-dom'
import Login from './components/Login'
import Pokemons from './components/Pokemons'
import PokemonDetails from './components/PokemonDetails'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login/>} />

          <Route element={<ProtectedRoutes/>}>
            <Route path='/pokemons' element={<Pokemons/>}/>
            <Route path='/pokemons/:id' element={<PokemonDetails/>}/>           
          </Route>

        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
