import React, { useEffect } from 'react';
import { Container, Button } from '@mui/material';
import { HeaderComponent } from '../../components/Header/index';
import { characters } from '../../api/characters.api';

export const HomePage: React.FC<{}> = () => {

    // useEffect(() => {
    //     characters.getAll({ page: 1 })
    //         .then((resp) => {
    //             console.log(resp.data.results)
    //         })
    //         .catch((error) => {
    //             console.error(error)
    //         })
    // }, [])

    useEffect(() => {
        characters.getById({ id: 1 })
            .then((resp) => {
                console.log(resp)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    return (
        <Container maxWidth="xl">
            <HeaderComponent
                title='Hola'
                description='Bienvenido'
                element={<Button
                    variant='contained'
                >
                    Continuar
                </Button>}
            />
        </Container>
    )
}

