import React, { useState } from 'react';

import { LinearProgress } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';

import './InfoPokemon.css';

const InfoPokemon = ({ pokemon }) => {

  // el tipo del pokemon, puede ser 2
  const tipos = pokemon.types && Array.isArray(pokemon.types)
    ? pokemon.types.map((typeData) => typeData.type.name)
    : [];
  const stats = pokemon.stats && Array.isArray(pokemon.stats)
    ? pokemon.stats.map((typeData) => typeData)
    : []; /* 255 es el maximo en stat */

  const [shiny, setShiny] = useState("front_default");
  const [isChecked, setIsChecked] = useState(false);


  function handleCheck() {
    setIsChecked(!isChecked); // cambiar el estado del checkbox al hacer clic
    !isChecked
      ? setShiny((s) => (s = 'front_shiny'))
      : setShiny((s) => (s = 'front_default'));
  }

  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid container direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
        {/* pokemon */}
        <Grid item xs={12} md={4}>
          {/* Mostrar información del pokemon */}
          <h2 className='nombre'>
            {pokemon.name}
            <Checkbox icon={<StarIcon />} checkedIcon={<StarIcon sx={{ color: yellow[700] }} />} checked={isChecked} onChange={handleCheck} />
          </h2>
          {/* tipos */}
          <div>
            {tipos.map((type, index) => (
              <span key={index} className={'tipo ' + type}>{type}</span>
            ))}
          </div>
          {/* img del pokemon */}
          <div className='img'>
            <img src={pokemon.sprites && pokemon.sprites.other['official-artwork'][shiny]} alt={pokemon.name + ' No tiene sprite'} />
          </div>
        </Grid>

        {/* stats */}
        <Grid container justifyContent="space-evenly" alignItems="center" item xs={12} md={8} spacing={2}>
          {/* los titulos de los stats */}
          <Grid container item xs={12} alignItems="center" >
            <Grid item xs={3}>
              <h3>Stat</h3>
            </Grid>
            <Grid item xs={2}>
              <h3>Base</h3>
            </Grid>
            <Grid item xs={7}>
              <h3>Barra del máximo del stat</h3>
            </Grid>
          </Grid>

          {/* la tabla de stats */}
          {stats.map((stat, index) => (
            <Grid item container xs={12} key={index} alignItems="center" >
              <Grid item xs={3}>
                <div align="left">{stat.stat.name}</div>
              </Grid>
              <Grid item xs={2}>
                <div>{stat.base_stat}</div>
              </Grid>
              <Grid item xs={7}>
                <div><LinearProgress variant="determinate" value={(stat.base_stat / 255) * 100} /></div>
              </Grid>
            </Grid>
          ))}
          
        </Grid>
      </Grid>
    </Box>
  );
}

export default InfoPokemon;
