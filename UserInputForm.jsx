import { useState } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../Images/GKB_LABS Logo.png'
import './UserInput.css'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'© '}
      <Link color="inherit"style={{textDecoration:'none',color:'gray'}} href="https://www.gantasoft.com/#/">
       GKB_LABS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const defaultTheme = createTheme();
function RegisterComponent() {
  const regData = {
    Name: '',
    Email: '',
    Age: '',
    DOB: '',
  }
  const [formData, setFormData] = useState(regData)
  const handleData = async(e) => {  
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleDatadate =dateValue =>{
    setFormData({ ...formData, ["DOB"]: dateValue })
}
  const [errors, setErrors] = useState({})
  const [valid, setValid] = useState(true)
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let validationErrors = {}
    if (formData.Name === "" || formData.Name === null) {
      isValid = false;
      validationErrors.Name = 'Name Required'
    }
    if (formData.DOB === '' || formData.DOB === null) {
      isValid = false;
      validationErrors.DOB = 'Date of Birth Required'
    }
    if (formData.Email === '' || formData.Email === null) {
      isValid = false;
      validationErrors.Email = 'Email  Required'
    }else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
      isValid = false;
      validationErrors.Email = 'Email is not Valid'
    }
    if (formData.Age === '' || formData.Age === null) {
      isValid = false;
      validationErrors.Age = 'User Age  Required'
    }
    setErrors(validationErrors)
    setValid(isValid)
    if (Object.keys(validationErrors).length === 0) {
      try {
       axios.post("http://localhost:1234/gkb/insert",(formData), {
          headers: {'Content-Type': 'application/json'},
        });
        alert("Register Successfully") 
      } catch (error) {
        console.error(error);
      }
      debugger
    }}
    
  return ( <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary' }}>
        <img  src={logo} alt=''/>
        </Avatar>
        <Typography component="h1" variant="h5">User Input Form</Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              name='Name'
              value={formData.Name}
              onChange={handleData}
                autoComplete="given-name"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
              />
              <div className='danger'><label>{errors.Name}</label></div>
            </Grid>
            <Grid item xs={12}>
              <TextField
               type="mail"
               className="form-control"
               aria-label="Mail_ID"
               aria-describedby="addon-wrapping"
               name='Email'
               value={formData.Email}
               onChange={handleData}
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
              />
              <div className='danger'><label>{errors.Email}</label></div>
            </Grid>
            <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}
              value={formData.DOB}>
                 <DatePicker
                 className="form-control" 
                   required
                   fullWidth
                   id="DOB"
                   label="DOB"
                   autoComplete="DOB"
          onChange={(newValue) => handleDatadate(newValue)}
        />
        </LocalizationProvider>
    <div className='danger'><label>{errors.DOB}</label></div>
    </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
              fullWidth
              type="number"
                className="form-control"
                aria-label="Age"
                aria-describedby="addon-wrapping"
                name='Age'
                value={formData.Age}
                onChange={handleData}
                id="Age"
                label="Age"
                autoComplete="Age"
              />
              <div className='danger'><label>{errors.Age}</label></div>
            </Grid>
           
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Remember me"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit} 
          >
            Register
          </Button>
          <Link to='/table' style={{textDecoration:'none'}}>Already Registered Users Data </Link>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  </ThemeProvider>
    

  )
}

export default RegisterComponent;
