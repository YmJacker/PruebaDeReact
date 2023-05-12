

import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';

// icons
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

// archivos
import './Contador.css';

const Contador = () => {
    const [count, setCount] = useState(0);
    const reset = () => {
        setCount((n) => n = 0)
    }
    const plus = () => {
        setCount((n) => n + 1)
    }
    const rest = () => {
        setCount((n) => n - 1)
    }
    return (
        <Box>
            <Card sx={{backgroundColor: 'secondary.dark'}}>
                <CardContent className='numeritos'>{count}</CardContent>
            </Card>
            <br />
            <Stack spacing={5} direction="row">
                <Fab color="primary" aria-label="AddIcon" onClick={plus}>
                    <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="RestartAltIcon" onClick={reset}>
                    <RestartAltIcon />
                </Fab>
                <Fab color="primary" aria-label="RemoveIcon" onClick={rest}>
                    <RemoveIcon />
                </Fab>
            </Stack>
        </Box>
    )
};

export default Contador;