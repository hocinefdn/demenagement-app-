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
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

 

export default function SignUp() {
  


const [nom,setNom]=React.useState("sa");
const [prenom,setPrenom]=React.useState("b");
const [mail,setMail]=React.useState("c");
const [motdepasse,setMotdepasse]=React.useState("d");

const [reponse,setReponse]=React.useState([])


/*useEffect(() =>{
  
 

},[]  )*/


  const handleSubmit = (event) => {
    event.preventDefault();
    const datas = {
      "nom":nom,
      "prenom":prenom,
      "motDePasse":motdepasse,
      "mail":mail,
     
    }
    axios({
    
      url: "http://localhost:3200/inscription",
      method: "POST",
      data:datas
  
     }).then(response =>setReponse(response.data))
     .catch(err=>{console.log(err)})

   
  }

  return (
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate="false" onSubmit={e=>handleSubmit(e)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="nom"
                  required
                  fullWidth
                  id="firstName"
                  label="nom"
                  autoFocus
                  value={nom}
                  onChange={e=>setNom(e.target.value)}
               
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="prénom"
                  name="prenom"
                  autoComplete="family-name"
                  value={prenom}
                  onChange={e=>setPrenom(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="adress mail"
                  name="email"
                  autoComplete="email"
                  value={mail}
                  onChange={e=>setMail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="motdepasse"
                  label="mot de passe"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={motdepasse}
                  onChange={e=>setMotdepasse(e.target.value)}
                 
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
  );
  
}