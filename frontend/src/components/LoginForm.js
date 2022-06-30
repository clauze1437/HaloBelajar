import React from 'react';
import { useState } from "react";
import Logo from "../assets/images/Logo Text.png";
import "../assets/css/RegisterForm.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import axios from 'axios';

const LoginForm = () =>{
  const [email,setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [password,setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [alert, setAlert] = useState("");

  const handleEmail = (e) => {
    const value = e.target.value
    setEmail(value)
    if (!value) {
      setErrorEmail('Username cannot be empty')
    }
    setError('')
  
  }

  const handlePassword = (e) => {
    const value = e.target.value
    setPassword(value)
    if (!value) {
      setErrorPassword('Password cannot be empty')
    }
    setError('')
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataUser = {
      email: email,
      password: password
    }
    
    if (!email) {
      setError('Email cannot be empty')
    } else if (!password) {
      setError('Password cannot be empty')
    } else {
      axios
        .post('http://localhost:8080/api/auth/login', dataUser)
        .then(result => {
          if (result.data.message == "Success") {
            console.log(result)
            localStorage.setItem('email', result.data.data.email)
            localStorage.setItem('token', result.data.token)
            setRedirect(true)
            setAlert(result.data.data.message)
            console.log(result.data)
            setTimeout(() => {
              setAlert(result.data.data.data.message)
            }, 5000)
            window.location.href = '/kelas-saya';
          }
        })
        .catch(error => {
          setError(error.response.data.errors)
          console.log(error.response.data.message)
        })
    }
  }

  return (
    <div class="">
      <div class="mask py-5 d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card">
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">Login</h2>
                  {
                    error && (
                      <div className="alert alert-danger" style={{ width: "24rem" }}>
                        <p>{error}</p>
                      </div>
                    )
                  }
                  {
                    alert && (
                      <div className="alert alert-primary" style={{ width: "24rem" }}>
                        <p>Login Success</p>
                      </div>
                    )
                  }
                  <form onSubmit={handleSubmit}>
                  <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={handleEmail}/>
              <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={handlePassword}/>
              <label for="floatingPassword">Password</label>
              </div>
              <br></br>

                    <div class="d-flex justify-content-center">
                     
                    <button onClick={handleSubmit} type="button" className="btn btn-primary">
                                Submit
                        </button>
                      
                    </div>

                    <p class="text-center text-muted mt-5 mb-0">Don't Have an Account? <Link to="/sign-up"
                        class="fw-bold text-body"><u>Regist here</u></Link></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default LoginForm;
