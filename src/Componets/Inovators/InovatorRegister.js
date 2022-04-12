import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://qubators.org/">
        Qubators.org
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function InovatorRegister() {

const [fullName, setFullName] = React.useState('')
const [phoneNumber, setPhoneNumber] = React.useState('')
const [email, setEmail] = React.useState('')
const [password, setPassword] = React.useState('')

const hist = useNavigate()


const postData = async(e)=>{

    e.preventDefault()
 const res = await axios.post('http://localhost:8060/api/inovators/register', {fullName, phoneNumber,email,password})
 .then((res)=>{
    
        swal({
            title: "Registered Successfully!",
            text: "You can clicked the button!",
            icon: "success",
            button: "ok",
        
          }).then((value) => {
            swal(hist('/invatorsignin'));
          });
  

        
})


}


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container style = {{height : '90vh'}} component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'silver' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
        Register Now
          </Typography>
          <Box component="form" onSubmit={postData} noValidate sx={{ mt: 1 }}>
            <TextField
           onChange={(e)=>{
             setFullName(e.target.value)
           }}


              margin="normal"
              required
              fullWidth
              id="Fullname"
              label="fullname"
              name="fullname"
              autoComplete="fullname"
              autoFocus
            />
            <TextField
              onChange={(e)=>{
             setPhoneNumber(e.target.value)
           }}
          style={{borderColor :  '#00C3FF' }}
          borderColor = '#00C3FF'
              margin="normal"
              required
              fullWidth
              name="PhoneNumber"
              label="PhoneNumber"
              type="PhoneNumber"
              id="PhoneNumber"
              autoComplete="current-password"
              
            />
            <TextField
            onChange={(e)=>{
             setEmail(e.target.value)
           }}
          style={{borderColor :  '#00C3FF' }}
          borderColor = '#00C3FF'
              margin="normal"
              required
              fullWidth
              name="email"
              label="email"
              type="email"
              id="email"
              autoComplete="current-password"
              
            />
            <TextField
              onChange={(e)=>{
             setPassword(e.target.value)
           }}
          style={{borderColor :  '#00C3FF' }}
          borderColor = '#00C3FF'
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
             <Button
             onClick = {postData}
            style= {{backgroundColor : '#ec4214', color : 'white'}}
              type="submit"
              fullWidth
            //   variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Register
            </Button>
            <Grid container>
              <Grid item xs>
                <Link style = {{color : '#00C3FF'}} href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link style = {{color : '#00C3FF'}}  href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}