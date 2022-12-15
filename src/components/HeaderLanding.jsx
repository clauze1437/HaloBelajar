import React from "react";
import { Link } from "react-router-dom";
import "boxicons";
import "../assets/css/HeaderLanding.css"
import Logo from "../assets/images/Logo Text Light.svg";
import LogoText from "../assets/images/Logo.png";

export default function HeaderLanding() {
    return (
        
        <div className="container-allHeader">
            <div className="container-header">
                {/* <nav role="navigation">
                    <img className="logo-nav" src={LogoText} alt="Logo HaloBelajar"></img>
                    <ul class="menu-nav" role="list">
                        <li className="log-in"><a href="#">Log In</a></li>
                        <li className="sign-up"><a href="#">Sign Up</a></li>
                    </ul>
                </nav> */}

                <section className="content-header">
                    <article>
                        <h1>Belajar seru dan mudah dipahami</h1>
                        <p>
                            HaloBelajar merupakan sebuah platform yang dapat membantumu
                            dalam belajar. Ada berbagai materi yang dapat kamu akses
                            untuk menambah pengetahuanmu.
                        </p>
                        <Link to="/sign-up">
                            <button className="btn btn-try">
                                Try for free
                            </button>
                        </Link>
                    </article>
                    <img className="logo-header" src={Logo} alt="Logo HaloBelajar"></img>
                </section>
            </div>
        </div>
    )
}