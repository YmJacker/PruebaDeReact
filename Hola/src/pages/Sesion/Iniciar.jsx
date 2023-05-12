

import React from 'react'

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Iniciar = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };


    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        {'Iniciar Sesión'}
                    </Typography>
                    {/* caja de todo */}
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                        {/* usuario */}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Correo electronico"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        {/* contraseña */}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        {/* recordarme */}
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            sx={{ float: 'left' }}
                            label="Recordar cuenta"
                        />

                        {/* enviar */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                        >
                            Sign In
                        </Button>
                        {/* las opciones extras */}
                        <Grid container sx={{ margin: '10px 0', padding: 0, display: 'flex', justifyContent: 'space-between' }}>
                            <Grid item >
                                <Link href="#" variant="body2">
                                    {'Recuperar contraseña'}
                                </Link>
                            </Grid>

                            <Grid item >
                                <Link href="#" variant="body2">
                                    {"Regístrarse"}
                                </Link>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>

            </Container>
        </>
    )
}

export default Iniciar