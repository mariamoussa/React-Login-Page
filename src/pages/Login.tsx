import { LockOutlined, EmailOutlined, PersonAddAlt1, HeadphonesOutlined } from "@mui/icons-material";
import {
  Container,
  AppBar,
  Toolbar,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};

  return (
    <>
    <AppBar position="fixed" style={{boxShadow:'none', borderBottom:'1px solid #E2E4E9'}}>
      <Toolbar style={{background:'white', color:'gray'}}>
        <div style={{ flexGrow: 1 }}>
        </div>
        <Typography style={{marginRight:'1%'}}>Need help?</Typography>
        <Button style={{border:'1px solid gray', borderRadius:'5px', color:'gray'}}><HeadphonesOutlined/>  Contact Us</Button>
        <Button style={{color:'gray'}}>X</Button>
      </Toolbar>
    </AppBar>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#8CCFB7" }}>
            <PersonAddAlt1 />
          </Avatar>
          <Typography variant="h5">Login</Typography>
          <Typography variant="h6" style={{ color: 'gray' }}>Enter your details to login.</Typography>
          <Box sx={{ mt: 1 }}>
            <Typography variant="h6">Email Address*</Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <EmailOutlined style={{ color: 'gray' }} />
                ),
              }}
            />
            <Typography variant="h6">Password*</Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <LockOutlined style={{ color: 'gray' }} />
                ),
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
              style={{background:'#8CCFB7', color:'black', borderRadius:'7px'}}
            >
              Login
            </Button>
            <Grid container justifyContent={"flex-end"}>
              <Grid item>
                <Typography style={{color:'gray'}}>Don't have an account?</Typography><Link to="/register" style={{color:"#8CCFB7"}}>Register</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
