import React, { useState, useEffect } from 'react'
import { Card, Typography, Button, CardMedia, CardContent, CardActions, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addToCart } from '../../redux/slices/cart.slice';
import { setItem } from '../../utils/localStorage/localStorage';

type CardProps = {
    image: string
    name: string
    species: string
    status: string
    id: number
}

export const CardComponent: React.FC<CardProps> = ({ name, image, species, status, id }) => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const [disabledBtn, setDisabledBtn] = useState<boolean>(false)

    const itemExist = useAppSelector((state) => state.cartReducer)

    useEffect(() => {
        setDisabledBtn(itemExist.some((item) => item.id === id))
        setItem('cart', itemExist)
    }, [itemExist, id])

    function handleAddToCart() {
        dispatch(addToCart({
            id,
            name,
            image,
            info: status
        }))
    }

    return (
        <Card sx={{ marginTop: '1rem', minHeight: '450px' }}>
            <CardMedia
                component={'img'}
                height={'194'}
                image={image}
                alt={'asd'}
            />
            <CardContent >
                <Typography sx={{ minHeight: '70px' }} variant="h5" color="initial">Nombre: {name}</Typography>
                <Divider sx={{ margin: '1rem 0 1rem 0' }} />
                <Typography variant="h6" color="initial">Raza: {species}</Typography>
                <Typography variant="h6" color="initial">Status: {status}</Typography>
            </CardContent>
            <CardActions>
                <Button variant="text" color="secondary" fullWidth onClick={() => navigate(`character/${id}`)}>
                    Learn more
                </Button>
                <Button disabled={disabledBtn} variant="text" color="secondary" fullWidth onClick={handleAddToCart}>
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}
