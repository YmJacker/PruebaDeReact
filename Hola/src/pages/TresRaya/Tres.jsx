

import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import CloseIcon from '@mui/icons-material/Close';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

// import './Tres.css';

const condicional = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const Tres = () => {

    const [turno, setTurno] = useState(0);
    const casillas = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const [click, setClick] = useState(false);
    const [lines, setLines] = useState(condicional);
    let [win, setWin] = useState(false);

    const turnoDe = () => {
        return (
            <Box>
                { win? <h3>Victoria de</h3> : <h3>Turno de los</h3>}
                <Fab sx={{ margin: 2 }} color = {turno % 2 === 1 ? "primary" : "secondary"}>
                    {(win? (turno - 1) : turno) % 2 === 1 ? <CloseIcon /> : <PanoramaFishEyeIcon />}
                </Fab>
            </Box>
        )
    }

    const tablero = () => {
        return (
            <Grid container spacing={1}>
                {casillas.map(casilla => (
                    <Grid item xs={4} key={casilla} id={casilla}>
                        <Fab onClick={!win ? Click : null} id={`icono-${casilla}`}></Fab>
                    </Grid>
                ))}
            </Grid>
        )
    }

    const Click = (e) => {
        turno == 4 && (setClick(a => a = true))
        const casilla = e.target.parentNode;
        const icono = turno % 2 === 1 ? <CloseIcon /> : <PanoramaFishEyeIcon />;

// por la putisima cara aqui no se quiere aplicar el puto color de los cojones

        const iconoElement = <Fab color = {turno % 2 === 1 ? "primary" : "secondary"} id={`icono-${casilla.id}`}>{icono}</Fab>
        // cojo el elemento, le digo que es raiz y le añado las cosas como appendChild
        const domNode = document.getElementById(casilla.id);
        const root = createRoot(domNode);
        root.render(iconoElement);
        // sustituir
        let pongoAlgo;
        pongoAlgo = turno % 2 === 1 ? "X" : "O";
        setLines(lines.map((arr) => {
            return arr.map((value) => {
                if (value == casilla.id) {
                    return pongoAlgo
                } else {
                    return value
                }
            })
        }))
        setTurno(turno => turno + 1);
    }

    const comprobar = () => {
        let i = 0;
        while (!win && i < lines.length) {
            let a = lines[i][0];
            if (a == lines[i][1] && a == lines[i][2]) {
                setWin((a) => a = true);
            }
            i++
        }
    }

    useEffect(() => {
        click && comprobar()
    }, [turno])

    return (
        <Box>
            {turnoDe()}
            <h1>3 en raya</h1>
            <br />
            {tablero()}
        </Box>
    )
}

export default Tres;
