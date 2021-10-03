import { Container } from '@mui/material';
import React, { useState } from 'react';
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LoginIcon from '@mui/icons-material/Login';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { AccountCircle } from '@mui/icons-material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PasswordIcon from '@mui/icons-material/Password';
import HomeIcon from '@mui/icons-material/Home';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Box } from '@mui/system';
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'

const SignUp = () => {
    const [gender, setGender] = useState('male')
    return (
        <Container maxWidth="sm" style={{ marginBottom: '20px' }}>
            <div style={{ height: "80px" }}></div>
            <Paper style={{ backgroundColor: '#fcfcfc', textAlign: 'center', padding: '20px 30px', marginBottom: '20px', border: '1px solid lightgray', borderRadius: '7px' }}>
                <Typography variant="h4" color="textSecondary" > SIGN UP</Typography>
                <form noValidate autoComplete="off">
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle style={{ fontSize: '34' }} sx={{ color: 'action.active', mr: 1, my: 1 }} />
                        <TextField
                            variant="standard"
                            margin="dense"
                            label="Full Name"
                            placeholder="Enter Your Name"
                            fullWidth
                        />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <EmailIcon style={{ fontSize: '34' }} sx={{ color: 'action.active', mr: 1, my: 1 }} />
                        <TextField
                            variant="standard"
                            margin="dense"
                            label="E-mail"
                            placeholder="Enter Your E-mail"
                            fullWidth
                        />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <ContactPhoneIcon style={{ fontSize: '34' }} sx={{ color: 'action.active', mr: 1, my: 1 }} />
                        <TextField
                            variant="standard"
                            margin="dense"
                            label="Phone"
                            type="number"
                            placeholder="Enter Your Phone Number"
                            fullWidth
                        />
                    </Box>
                    <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <AssignmentIndIcon style={{ fontSize: '34' }} sx={{ color: 'action.active', mr: 1, my: 1 }} />
                            <TextField
                                variant="standard"
                                margin="dense"
                                label="User ID"
                                placeholder="Set Your User ID"
                            // fullWidth
                            />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <PasswordIcon style={{ fontSize: '34' }} sx={{ color: 'action.active', mr: 1, my: 1 }} />
                            <TextField
                                variant="standard"
                                margin="dense"
                                label="Password"
                                placeholder="Set Your Password"
                            // fullWidth
                            />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <HomeIcon style={{ fontSize: '34' }} sx={{ color: 'action.active', mr: 1, my: 1 }} />
                        <TextField
                            variant="standard"
                            margin="dense"
                            label="Address"
                            placeholder="Enter Your Address"
                            fullWidth
                            multiline
                            rows={2}
                        />
                    </Box>
                    <FormControl style={{ display: 'block', textAlign: 'start', marginTop: '10px' }}>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup row value={gender} onChange={(e) => setGender(e.target.value)} >
                            <FormControlLabel value='male' control={<Radio />} label='Male' />
                            <FormControlLabel value='female' control={<Radio />} label='Female' />
                            <FormControlLabel value='others' control={<Radio />} label='Others' />
                        </RadioGroup>
                    </FormControl>

                    <Button variant="contained" color="primary" endIcon={<FingerprintIcon />}>
                        Sign Up
                    </Button>
                </form>
            </Paper>

            <Typography variant="overline" color="primary" style={{ marginRight: '10px' }}> Already Have an Account ? </Typography>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">
                <Button variant="contained" color="secondary" endIcon={<LoginIcon />}>
                    Login
                </Button>
            </Link>
        </Container>
    );
};

export default SignUp;