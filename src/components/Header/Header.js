import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, MenuItem } from '@mui/material';

const menuItems = ["Sports", "Culture", "Gallery"]
const Header = () => {
    return (
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
                        <MenuItem sx={{ flexGrow: 1 }}>
                            <Typography variant="h6" component="div" style={{ marginRight: "10px" }}>
                                ABC News
                            </Typography>
                            {/* {
                                menuItems.map(item => <Typography key={item} style={{ padding: "5px", border: "1px solid white", marginRight: "5px" }}>
                                    {item}
                                </Typography>)
                            } */}
                        </MenuItem>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Header;