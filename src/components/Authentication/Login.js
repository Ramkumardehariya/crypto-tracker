import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { CryptoState } from '../../CryptoContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../../firebase";


const SignUp = ({handleClose}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   
  const {setAlert} = CryptoState();

 const handleSubmit = async() => {
     if(!email || !password){
        setAlert({
          open: true,
          Message: "Please fill all the fields",
          type: "error"
        })
     }
     try {
       const result = await signInWithEmailAndPassword(auth, email, password);
       setAlert({
        open: true,
        Message: "Log in successfully",
        type: "success"
      })
     } catch (error) {
      setAlert({
        open: true,
        Message: error.Message,
        type: "error"
      })
     }
 }
 
  return (
    <Box
     p={3}
     style={{display:"flex", flexDirection:"column", gap:"20px"}}
    >

       <TextField
       variant='outlined'
       type='email'
       label="Enter Email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       fullWidth
       ></TextField>

       <TextField
       variant='outlined'
       type='password'
       label="Enter Password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       fullWidth
       ></TextField>

       <Button
       variant='contained'
       size='large'
       style={{backgroundColor:"#EEBC1D"}}
       onClick={handleSubmit}
       >
         Log in
       </Button>

    </Box>
  )
}

export default SignUp