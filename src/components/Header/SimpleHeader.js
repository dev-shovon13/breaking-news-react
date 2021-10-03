import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import SearchAppBar from './SimpleHeader2';

const SimpleHeader = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed">
                    <Container>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="div" >
                                <NavLink to="/home" style={{ textDecoration: 'none', color: 'white' }}>
                                    ABC News
                                </NavLink>
                            </Typography>

                            <Box sx={{ flexGrow: 1 }} />
                            <NavLink to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                                <Button color="inherit">Login</Button>
                            </NavLink>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
            <SearchAppBar />
        </>
    );
};

export default SimpleHeader;