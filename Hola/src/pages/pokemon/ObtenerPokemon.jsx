import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import InfoPokemon from "./InfoPokemon";
import './ObtenerPokemon.css';

// la API
const url = "https://pokeapi.co/api/v2/pokemon";

const ObtenerPokemon = () => {
    // los arryas
    // todos los pokemons, nombre y url
    const [pokemons, setPokemons] = useState([]);
    // el pokemon seleccionado, nombre y url
    const [select, setSelect] = useState(null);
    // los datos del pokemon
    const [pokemon, setPokemon] = useState({});

    // consigo el json de todos los pokemons
    const getPokemonListAPI = async () => {
        const res = await fetch(`${url}`).then(res => res.json());
        const data = await fetch(`${url}?limit=${res.count}`).then(res => res.json());
        // los añado a un array con sus nombres y url, con sus nombres para que el "Autocomplete" de MUI funcione
        const arrayPok = []
        data.results.forEach(item => {
            arrayPok.push({ label: item.name, id: item.url })
        })
        // este array será pokemons
        setPokemons(arrayPok);
    }

    // aqui obtengo los datos del pokemon seleccionado
    const getPokemonAPI = async (url) => {
        // obtengo su json
        const res = await fetch(`${url}`).then(res => res.json());
        setPokemon(res)
    }

    // si se selecciona un pokemon se le pondrá en pokemon
    useEffect(() => {
        select && getPokemonAPI(select.id)
    }, [select])

    // lo mismo que un windows.onload
    useEffect(() => {
        getPokemonListAPI()
    }, [])

    // devuelvo el select que se autocompleta
    return (
        <div className='anyadir'>
            {/* el autocomplete para seleccionar el pokemon */}
            <div className="escogerPokemon">
                <h2>Escoge un Pokemon</h2>
                {
                    pokemons && <Autocomplete
                        onChange={(event, newValue) => {
                            setSelect(newValue);
                        }}
                        disablePortal
                        id="combo-box-demo"
                        options={pokemons}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Pokemon" />}
                    />
                }
            </div>
            {
                select && <InfoPokemon pokemon={pokemon}/>
            }
        </div>
    )
}

export default ObtenerPokemon;
