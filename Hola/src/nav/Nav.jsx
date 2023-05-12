

import React, { useState } from 'react';
import { Link } from "react-router-dom";

// componentes
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

// iconos
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import TagIcon from '@mui/icons-material/Tag';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonIcon from '@mui/icons-material/Person';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// imports de archivos
import './Nav.css'

// funciones
export const Nav = ({ onTemaClick }) => {
    const [temaOscuro, setTemaOscuro] = useState(true);

    const temaSupongo = () => {
      setTemaOscuro(!temaOscuro);
      onTemaClick(!temaOscuro);
    };

    return (
        <Box
        sx={{
            '& > :not(style)': { m: 1 },
            backgroundColor: temaOscuro ? 'primary.dark' : 'primary.light'
        }}
        className="navegador">
            {/* inicio */}
            <Link to='/'>
                <Fab color="primary" aria-label="Inicio">
                    <HomeIcon />
                </Fab>
            </Link>

            {/* count */}
            <Link to='/Contador'>
                <Fab color="primary" aria-label="Contador">
                    <AddIcon />
                </Fab>
            </Link>
            {/* 3 en raya */}
            <Link to='/Tres'>
                <Fab color="primary" aria-label="3 en raya">
                    <TagIcon />
                </Fab>
            </Link>
            {/* pokemon */}
            <Link to='/Pokemon'>
                <Fab color="primary" aria-label="Pokemon">
                    <CatchingPokemonIcon />
                </Fab>
            </Link>
            {/* Todo list */}
            <Link to='/TodoList'>
                <Fab color="primary" aria-label="To Do List">
                    <FormatListBulletedIcon />
                </Fab>
            </Link>
            {/* calculadora */}
            <Link to='/Iniciar'>
                <Fab color="primary" aria-label="sesion">
                    <PersonIcon />
                </Fab>
            </Link>
            <Fab onClick={temaSupongo} >
                {temaOscuro ? <Brightness4Icon /> : <Brightness7Icon />}
            </Fab>
        </Box>
    );
}
