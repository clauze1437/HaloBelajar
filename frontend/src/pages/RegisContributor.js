import React, { useState } from "react";
import "../assets/css/RegisterForm.css"
import { Link } from "react-router-dom"


const RegisterForm = () =>{
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const onChangeUsername = (e) => {
    const value = e.target.value
    setUsername(value)
  }

  const onChangeEmail = (e) => {
    const value = e.target.value
    setEmail(value)
  }

  const onChangePassword = (e) => {
    const value = e.target.value
    setPassword(value)
  }

  const KlikDaftar = () => {
    const data = {
      username: username,
      email : email,
      password : password
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
                  <h2 class="text-uppercase text-center mb-5">Create a contributor account</h2>

                  <form>

                    <div class="form-outline mb-4">
                      <input type="text" id="form3Example1cg" class="form-control form-control-lg" value={username} onChange={onChangeUsername} />
                      <label class="form-label" for="form3Example1cg">Your Name</label>
                    </div>

                    <div class="form-outline mb-4">
                      <input type="email" id="form3Example3cg" class="form-control form-control-lg" value={email} onChange={onChangeEmail}/>
                      <label class="form-label" for="form3Example3cg">Your Email</label>
                    </div>

                    <div class="form-outline mb-4">
                      <input type="password" id="form3Example4cg" class="form-control form-control-lg" value={password} onChange={onChangePassword} />
                      <label class="form-label" for="form3Example4cg">Password</label>
                    </div>

                    <div class="form-outline mb-4">
                      <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                    </div>

                    <div class="form-check d-flex justify-content-center mb-5">
                      <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                      <label class="form-check-label" for="form2Example3g">
                        I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                      </label>
                    </div>

                    <div class="d-flex justify-content-center">
                      <Link to="/dashboard">
                        <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={KlikDaftar}>
                          Register
                        </button>
                      </Link>
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
