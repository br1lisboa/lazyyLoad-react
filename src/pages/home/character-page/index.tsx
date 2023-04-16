import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { characters } from '../../../api/characters.api';
import { TypeCharacter } from './interface/chaacter.interface';
import Box from '@mui/material/Box';
import Container from '@mui/system/Container';
import { Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

const CharacterPage: React.FC<{}> = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const [loading, setLoading] = useState<boolean>(true)
    const [character, setCharacter] = useState<TypeCharacter | null>(null)

    useEffect(() => {
        characters.getById({ id })
            .then((resp) => {
                setCharacter(resp.data)
                setLoading(false)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [id])

    return (
        <Box sx={{ width: '100%' }}>
            <Container maxWidth={'xl'}>
                {loading ?
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 16 }}>
                        <CircularProgress color='info' size={60} />
                    </Box>
                    :
                    <Grid container columnSpacing={2} sx={{ mt: 2 }}>
                        <Grid item xs={6}>
                            <Typography variant='h2'>
                                {character!.name}
                            </Typography>
                            <Divider />
                            <Typography variant='h6'>
                                {character!.origin.name}
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                                <Chip color='secondary' variant='outlined' label={character!.status} />
                            </Box>
                            <Button color='secondary' onClick={() => navigate('/')}>Back</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={character!.image} alt={character!.name}
                                style={{ width: '100%', borderRadius: '0.5em' }}
                            />
                        </Grid>
                    </Grid>
                }
            </Container>
        </Box>
    )
}

export default CharacterPage