import React from 'react'
import Box from '@mui/material/Box';
import { Grid, Button, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from '../../redux/hooks';
import { removeToCart } from '../../redux/slices/cart.slice';

type CardProp = {
    id: string | number
    img: string,
    nombre: string,
    info: string
}

export const HorizontalCardComponent: React.FC<CardProp> = ({ id, img, nombre, info }) => {

    const dispatch = useAppDispatch()

    function handleDelete() {
        dispatch(removeToCart({
            id
        }))
    }

    return (
        <Box>
            <Grid container>
                <Grid item>
                    <img src={img} alt={nombre} />
                    <Typography variant="h3" color="initial">{nombre}</Typography>
                    <Typography>
                        {info}
                    </Typography>
                    <Button variant="text" color="secondary" onClick={handleDelete}>
                        Delete
                    </Button>
                    <Divider />
                </Grid>
            </Grid>
        </Box>
    )
}
