

import React from 'react'
import { createRoot } from 'react-dom/client';

import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, green, blue } from '@mui/material/colors';

import './TodoList.css'

const Theme = createTheme({
    palette: {
        check: {
            light: green.A200,
            main: green[500],
            dark: green[800],
            contrastText: '#fff',
        },
        edit: {
            light: blue.A200,
            main: blue[500],
            dark: blue[800],
            contrastText: '#fff',
        },
        delete: {
            light: red.A200,
            main: red[500],
            dark: red[800],
            contrastText: '#fff',
        },
    },
});

const Item = ({ lista, setLista }) => {

    const Hecho = () => {
        return (
            <ThemeProvider theme={Theme}>
                <Fab color="check" aria-label="Check" onClick={Completado}><CheckIcon /></Fab>
                <Fab color='delete' aria-label="delete" onClick={Eliminar}><DeleteIcon /></Fab>
            </ThemeProvider>
        )
    }
        
    const DesHecho = () => {
        return (
            <ThemeProvider theme={Theme}>
                <Fab color="edit" onClick={desHacer} ><CloseIcon /></Fab>
                <Fab color='delete' aria-label="delete" onClick={Eliminar}><DeleteIcon /></Fab>
            </ThemeProvider>
        )
    }

    const Completado = (e) => {
        let a = e.target;
        while(!/item-\d+/.exec(a.id)) a = a.parentNode
        a.getElementsByTagName('span')[0].classList.add('qioweyuxnv');

        const elFab1 = a.getElementsByClassName('MuiFab-check')[0].parentNode;
        const root1 = createRoot(elFab1);
        root1.render(<DesHecho/>);
    }

    const desHacer = (e) => {
        let a = e.target;
        while(!/item-\d+/.exec(a.id)) a = a.parentNode
        a.getElementsByTagName('span')[0].classList.remove('qioweyuxnv');

        const elFab2 = a.getElementsByClassName('MuiFab-edit')[0].parentNode;
        const root2 = createRoot(elFab2);
        root2.render(<Hecho/>);
    }

    // const Editar = (e) => {
    //     console.log(e)
    // }

    const Eliminar = (e) => {
        let a = e.target;
        while(!/item-\d+/.exec(a.id)) a = a.parentNode

        const posicion = a.id.split('-')[1]
        setLista((a) => a.slice( posicion, posicion ))
    }

    return (
        <>
            {lista.map((item, key) => {
                return (
                    <Box
                        id={`item-${key}`}
                        key={key}
                        sx={{
                            '& > :not(style)': { m: 1 },
                            backgroundColor: 'grey',
                            fontSize: '2em', paddingLeft: '1rem', margin: '1rem', borderRadius: '10px',
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                        }}
                    >
                        <span>{item}</span>
                        <ThemeProvider theme={Theme}>
                            <Box sx={{ '& > :not(style)': { m: 1 } }}>

                                <Hecho />

                            </Box>
                        </ThemeProvider>
                    </Box>
                )
            })}
        </>
    )
}

export default Item