import React from 'react'
import { Drawer, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/system/Stack';
import IconButton from '@mui/material/IconButton';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useAppSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { setOpenCart } from '../../redux/slices/cartIcon.slice';
import { HorizontalCardComponent } from '../../components/HorizontalCard';

const Cart: React.FC<{}> = () => {

    const isOpen = useAppSelector((state) => state.cartIconReducer)
    const items = useAppSelector((state) => state.cartReducer)
    const dispatch = useDispatch()


    function handleOpenCart() {
        dispatch(setOpenCart(!isOpen.openCart))
    }
    return (
        <Drawer anchor='right' open={isOpen.openCart}>
            <Box>
                <Stack>
                    <IconButton onClick={handleOpenCart}>
                        <HighlightOffRoundedIcon />
                    </IconButton>
                </Stack>
                <Divider>
                    {items.length > 0 ? items.map(({ image, info, name, id }) => (
                        <HorizontalCardComponent id={id} key={id} img={image} nombre={name} info={info} />
                    )) : 'Nada en el carrito'}
                </Divider>
            </Box>

        </Drawer>
    )
}

export default Cart