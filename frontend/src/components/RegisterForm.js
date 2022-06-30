import React, { useState } from "react";
import "../assets/css/RegisterForm.css"
import { Link } from "react-router-dom"
import axios from "axios"


const RegisterForm = () =>{
  const [username,setUsername] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState("");
  const [alert, setAlert] = useState("");
  
  const handleUsername = (e) => {
    const value = e.target.value
    setUsername(value)
    if (value.length < 3 || value.length > 20) {
      setErrorUsername('The username must be between 3 and 20 characters.')
    }
    setError('')
  }

  const handleEmail = (e) => {
    const value = e.target.value
    setEmail(value)
    if (!value) {
      setErrorEmail('This is not a valid email.')
    }
    setError('')
  }

  const handlePassword = (e) => {
    const value = e.target.value
    setPassword(value)
    if (value.length < 6 || value.length > 40) {
      setErrorPassword('The password must be between 6 and 40 characters')
    }
    setError('')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataUser = {
      username: username,
      email: email,
      password: password
    }
    
    if (!username) {
      setError("The username must be between 3 and 20 characters.")
    } else if (!email) {
      setError('This is not a valid email.')
    } else if (!password) {
      setError('The username must be between 3 and 20 characters.')
    } else {
      axios
        .post('api/auth/register', dataUser)
        .then(result => {
          if (result) {
            if (result.data) {
              setUsername('')
              setEmail('')
              setPassword('')
              setAlert(result.data.massage)
              setTimeout(() => {
                setAlert('')
              }, 3000)
            }
          }
        })
        .catch(error => {
          setError(error.reponse.data.massage)
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
                  <h2 class="text-uppercase text-center mb-5">Create an account</h2>
                  {
                  error && (
                    <div className="alert alert-danger mt-2 p-2" style={{ width: "25rem" }}>
                      <p>{error}</p>
                    </div>
                  )
                }
                {
                  alert && (
                    <div className="alert alert-primary mt-2 p-2" style={{ width: "25rem" }}>
                      <p>Registration Successfull</p>
                    </div>
                  )
                }
                  <form onSubmit={handleSubmit}>

                  <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder="username" value={username} onChange={handleUsername}/>
              <label for="floatingInput">User name</label>
              </div>
                <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={handleEmail}/>
              <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={handlePassword}/>
              <label for="floatingPassword">Password</label>
              </div>
              <br></br>

                <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                <button className="button-login" type="submit">
                      Register
                    </button>
                  
                </div>

                <p class="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login"
                    class="fw-bold text-body"><u>Login here</u></Link></p>
              </form>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
