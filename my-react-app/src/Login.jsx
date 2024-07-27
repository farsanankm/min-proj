import React, { useState } from 'react';
import './Login.css';
import { TextField, Button } from '@mui/material';
import Wrapper from './images/Wrapper';
 
const signupinitialValue={
    name:'',
    username:'',
    password:''
}
const Login = () => {
  const [account, toggleAccount] = useState('login');
  const[signup,setSignup]=useState(signupinitialValue);

  const toggleSignup=()=>{
    account==='signup'? toggleAccount('login'): toggleAccount('signup')
  }
  const onInputChange =(e)=>{
      setSignup({...signup,[e.target.name]:e.target.value});
  }

  return (
    <div className='l'>
      <div className='L'>
        {
          account === 'login' ? (
            <>
              <p style={{ color: "blue", fontFamily: "serif", marginTop: "10%", paddingTop: "10%", fontSize: "200%" }}> BLOGS</p>
              <Wrapper>
                <TextField variant="standard" label="Enter Username" style={{ width: "70%" }} /><br />
                <TextField variant="standard" label="Enter Password" type="password" style={{ width: "70%" }} /><br /><br />
                <Button variant='contained' style={{ width: "70%", borderRadius: "5%" }}>Login</Button><br />
                <p style={{ color: "black", fontSize: "90%", textAlign: "center" }}>OR</p>
                <Button onClick={() => toggleAccount('signup')} variant='contained' style={{ width: "70%", borderRadius: "5%" }}>New account</Button>
                <br /><br />
              </Wrapper>
            </>
          ) : (
            <Wrapper>
              <TextField  onChange={(e)=>onInputChange(e)} name='name'variant="standard" label="Enter name" style={{ width: "70%" }} /><br />
              <TextField  onChange={(e)=>onInputChange(e)} name='username' variant="standard" label="Enter Username" style={{ width: "70%" }} /><br />
              <TextField   onChange={(e)=>onInputChange(e)} name='password'variant="standard" label="Enter Password" type="password" style={{ width: "70%" }} /><br /><br />
              <Button variant='contained' style={{ width: "70%", borderRadius: "5%" }}>SignUp</Button><br />
              <p style={{ color: "black", fontSize: "90%", textAlign: "center" }}>OR</p>
              <Button onClick={() => toggleAccount('login')} variant='contained' style={{ width: "70%", borderRadius: "5%" }}>Already have an account</Button>
              <br /><br />
            </Wrapper>
          )
        }
      </div>
    </div>
  );
}

export default Login;
