import React, { useState } from "react";
import "boxicons";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/UbahDataSiswa.css";
import "../assets/css/RegisterForm.css"
import NavSiswa from "./NavSiswa";
import { Link } from "react-router-dom"
import "../assets/css/dashboard.css";

const UbahPass = () =>{
    const [password,setPassword] = useState("");
    const [errorPassword,setErrorPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [errorConfirmPassword,setErrorConfirmPassword] = useState("");
  
    const onChangePassword = (e) => {
      const value = e.target.value
      setPassword(value)
      if(value){
        setErrorPassword("Password tidak boleh kosong")
      }else{
        setErrorPassword("")
      }
    }
    const onChangeConfirmPassword = (e) => {
        const value = e.target.value
        setConfirmPassword(value)
        if(value){
            setErrorConfirmPassword("Confirm Password tidak boleh kosong")
          }else if(password !== value){
            setErrorConfirmPassword("Password tidak cocok")
          }
          else{
            setErrorConfirmPassword("")
          }
  
    return(
        <div class="">
        <div class="mask py-5 d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card">
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">Login</h2>
      
                    <form>
                      <div class="form-outline mb-4">
                        <input type="password" id="form3Example4cg" class="form-control form-control-lg" value={password} onChange={onChangePassword} />
                        <label class="form-label" for="form3Example4cg">Password</label>
                      </div>
                      <div class="form-outline mb-4">
                        <input type="new-password" id="form3Example4cg" class="form-control form-control-lg" value={confirmPassword} onChange={onChangeConfirmPassword} />
                        <label class="form-label" for="form3Example4cg">Password baru</label>
                      </div>
                      <div class="d-flex justify-content-center">
                        <Link to="/kelas-saya" className="text-decoration-none">
                          <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                              Simpan
                          </button>
                        </Link>
                      </div>

      
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
    }
export default UbahPass