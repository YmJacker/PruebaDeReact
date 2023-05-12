

// importe de componentes
import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

// import de archivos
import './App.css'
import Contador from "./pages/count/Contador";
import Tres from "./pages/TresRaya/Tres"
import TodoList from "./pages/todoList/TodoList"
import ObtenerPokemon from './pages/pokemon/ObtenerPokemon';
import Iniciar from "./pages/Sesion/Iniciar";

import Zzzzz from './zzzprueba/Zzzzz'

import { Nav } from "./nav/Nav";

// funciones
const Home = () => <h1>Hola Mundo!</h1>

function App() {
  const [temaOscuro, setTemaOscuro] = useState(true);

  const handleTemaClick = (nuevoTema) => {
    setTemaOscuro(nuevoTema);
  };

  const Theme = createTheme({
    palette: {
      primary: {
        light: '#ffe5ec',
        main: '#FF6390',
        dark: '#e9195c',
        contrastText: '#fff',
      },
      secondary: {
        light: '#dffff4',
        main: '#63ffd3',
        dark: '#00ca84',
        contrastText: '#000',
      },
      mode: temaOscuro ? 'dark' : 'light', /* 'dark', */
    },
  });

  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Box id='kalhfklsjd'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Contador' element={<Contador />} />
            <Route path='/Tres' element={<Tres />} />
            <Route path='/Pokemon' element={<ObtenerPokemon />} />
            <Route path='/TodoList' element={<TodoList />} />
            <Route path='/Iniciar' element={<Iniciar />} />

            <Route path='/zzz' element={<Zzzzz />} />
          </Routes>
        </Box>
        
        <Nav onTemaClick={handleTemaClick}></Nav>
        
      </ThemeProvider>
    </>
  )
}

export default App
