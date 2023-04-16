import React, { useEffect, useState } from 'react';
import { Container, Button, Grid } from '@mui/material';
import { HeaderComponent, CardComponent } from '../../components';
import { characters } from '../../api/characters.api';
import { TypeCharacter } from './interface/character.interface';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';
import Cart from '../../common/Cart';

export const HomePage: React.FC<{}> = () => {

    const [allCharacters, setAllCharacters] = useState<TypeCharacter[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [page, setPage] = useState<number>(1)
    const [count, setCount] = useState<number>(10)

    useEffect(() => {
        setLoading(true)
        characters.getAll({ page })
            .then((resp) => {
                setCount(resp.data.info.pages)
                setAllCharacters(resp.data.results)
                setTimeout(() => setLoading(false), 1000)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [page])

    function handleChange(event: React.ChangeEvent<unknown>, value: number) {
        setPage(value)
    }

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
            <Cart />
            {loading ?

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 16 }}>
                    <CircularProgress color='info' size={60} />
                </Box>
                :
                <>
                    {
                        allCharacters?.length !== 0 ? (
                            <Grid container spacing={2}>
                                {
                                    allCharacters!.map((character) => (
                                        <Grid item key={character.id} xs={3}>
                                            <CardComponent
                                                image={character.image}
                                                name={character.name}
                                                species={character.species}
                                                status={character.status}
                                                id={character.id}
                                            />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        ) : null
                    }
                    <Pagination count={count} page={page} onChange={handleChange} sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 2 }} />
                </>

            }

        </Container>
    )
}

