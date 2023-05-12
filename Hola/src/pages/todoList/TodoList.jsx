

import React, { useRef, useState } from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

import './TodoList.css'
import Item from './Item'

const TodoList = () => {

  // con ref se hace referencia a que estamos llamando al 'input'
  const input = useRef();
  const [lista, setLista] = useState([]);

  const TODO = (e) => {
    // cancela el evento y permite leer lo que continua
    e.preventDefault();

    // 2 maneras de hacer lo mismo
    // console.log(input.current.childNodes[0].value)
    // console.log(e.target[0].value)

    const valium = input.current.childNodes[0].value;
    if(valium != ''){
      setLista((e) => [...e, valium]);
      input.current.childNodes[0].value = '';
    }
  }

  const EliminacionTotal = () => {
    setLista((e) => e = [])
  }

  return (
    <>

      <Box>
        <form action="" onSubmit={TODO}>
          <Input label="To Do" placeholder='To Do' ref={input} />
          <Button variant="contained" type='submit'>Add</Button>
          <Button variant="outlined" sx={{marginLeft:'1rem'}} onClick={EliminacionTotal}>Delete All</Button>
        </form>
        <Item lista={lista} setLista={setLista} />
      </Box>

    </>
  )
}

export default TodoList

// cositas

// me explicas lo de imports en barril?