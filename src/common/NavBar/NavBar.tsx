import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, AppBar, Toolbar, IconButton, Button, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

import styles from '../styles.module.css';
import farmaIcon from "../../assets/images/farmaIcon.png"
import { useDispatch } from 'react-redux';
import { setOpenCart } from '../../redux/slices/cartIcon.slice';
import { useAppSelector } from '../../redux/hooks';
import Badge from '@mui/material/Badge';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const NavBar: React.FC<{}> = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isOpen = useAppSelector((state) => state.cartIconReducer)
    const itemsCart = useAppSelector((state) => state.cartReducer)

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Gestion de Remitos', 'Recepcion de remitos'].map((text, index) => (

                    <ListItem key={text} disablePadding
                        onClick={() => {
                            (text === 'Gestion de Remitos') ? navigate('/gestion-remitos') : navigate('/recepcion-remitos')
                        }}>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem
                    onClick={() => { navigate('/') }}
                    disablePadding
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <MeetingRoomIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    function handleOpenCart() {
        dispatch(setOpenCart(!isOpen.openCart))
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="sticky">
                    <Toolbar>
                        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                            <Grid item>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={toggleDrawer('left', true)}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs={10} className={styles.centerStart}>
                                <img src={farmaIcon} alt="farma" className={styles.logo} />
                            </Grid>
                            <Grid item >
                                <IconButton
                                    onClick={handleOpenCart}>
                                    <Badge badgeContent={itemsCart.length}>
                                        <ShoppingCartRoundedIcon />
                                    </Badge>
                                </IconButton>
                            </Grid>
                            <Grid item >
                                <Button color="inherit">Login</Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>

            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </>
    )
}
