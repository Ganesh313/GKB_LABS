import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom'
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
    name: '',
    email: '',
    age: '',
    dob: '',
  }
  const navigate=useNavigate()
  const [formData, setFormData] = useState(regData)
  const handleData = async(e) => {  
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleDatadate =dateValue =>{
    setFormData({ ...formData, ["dob"]: dateValue })
}
  const [errors, setErrors] = useState({})
  const [valid, setValid] = useState(true)
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let validationErrors = {}
    if (formData.name === "" || formData.name === null) {
      isValid = false;
      validationErrors.name = 'Name Required'
    }
    if (formData.dob === '' || formData.dob === null) {
      isValid = false;
      validationErrors.dob = 'Date of Birth Required'
    }
    if (formData.email === '' || formData.email === null) {
      isValid = false;
      validationErrors.email = 'Email  Required'
    }else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      validationErrors.email = 'Email is not Valid'
    }
    if (formData.age === '' || formData.age === null) {
      isValid = false;
      validationErrors.age = 'User Age  Required'
    }
    setErrors(validationErrors)
    setValid(isValid)
    if (Object.keys(validationErrors).length === 0) {
      try {
       axios.post("http://localhost:1234/gkb/insert",formData, {
          headers: {'Content-Type': 'application/json'}
        }).then(
(result)=>{
  setFormData(result.data)
  alert("Registered Successfully")
  navigate('/table')
}
     )} catch (error) { 
      }
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
        <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              name='name'
              value={formData.name}
              onChange={handleData}
                autoComplete="given-name"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
              />
              <div className='danger'><label>{errors.name}</label></div>
            </Grid>
            <Grid item xs={12}>
              <TextField
               type="mail"
               className="form-control"
               aria-label="Mail_ID"
               aria-describedby="addon-wrapping"
               name='email'
               value={formData.email}
               onChange={handleData}
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
              />
              <div className='danger'><label>{errors.email}</label></div>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
              fullWidth
              type="date"
                className="form-control"
                aria-label="DOB"
                aria-describedby="addon-wrapping"
                name='dob'
                value={formData.dob}
                onChange={handleData}
                id="DOB"
                label="___________DOB"
                autoComplete="DOB"
              />
    <div className='danger'><label>{errors.dob}</label></div>
    </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
              fullWidth
              type="number"
                className="form-control"
                aria-label="Age"
                aria-describedby="addon-wrapping"
                name='age'
                value={formData.age}
                onChange={handleData}
                id="Age"
                label="Age"
                autoComplete="Age"
              />
              <div className='danger'><label>{errors.age}</label></div>
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
