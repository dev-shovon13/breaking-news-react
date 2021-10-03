import { Container } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { Paper } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

const Login = () => {
    return (
        <Container maxWidth="sm" style={{}}>
            <div style={{ height: "90px" }}></div>
            <Paper style={{ backgroundColor: '#fcfcfc', textAlign: 'center', padding: '20px 30px', marginBottom: '50px', border: '1px solid lightgray', borderRadius: '7px' }}>
                <Typography variant="h4" color="textSecondary" > LOG IN</Typography>
                <form noValidate autoComplete="off">
                    <TextField
                        style={{
                            backgroundColor: 'white'
                        }}
                        margin="normal"
                        variant="outlined"
                        label="User ID"
                        placeholder="Enter Your User ID"
                        fullWidth
                    />
                    <TextField
                        style={{
                            backgroundColor: 'white'
                        }}
                        margin="normal"
                        variant="outlined"
                        label="Password"
                        placeholder="Enter Your Password"
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<LoginIcon />}
                    >
                        Log In
                    </Button>
                </form>
            </Paper>

            <Typography variant="overline" color="primary" style={{ marginRight: '10px' }}> Don't Have an Account ? </Typography>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/signup">
                <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<FingerprintIcon />}
                >
                    SignUp
                </Button>
            </Link>
        </Container>
    );
};

export default Login;