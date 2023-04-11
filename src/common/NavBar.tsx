
import React, { useState } from 'react';

import styles from './styles.module.css';
import farmaIcon from "../assets/images/farmaIcon.png"

import { Box, AppBar, Toolbar, IconButton, Button, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { useNavigate } from 'react-router-dom';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const NavBar: React.FC<{}> = () => {

    const navigate = useNavigate()

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

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
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
