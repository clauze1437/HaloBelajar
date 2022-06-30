import React from "react";
import "../assets/css/FooterLanding.css";
import "boxicons";
import LogoKM from "../assets/images/logo-km.png";

export default function FooterLanding() {

    return (
        <div class="mt-5 pt-5 pb-5 container-allFooter">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-xs-12 about-company">
                        <h2>Contact Us</h2>
                        <p class="pr-5">Here are our social media accounts to be connected to.</p>
                        <p>
                            <a href="#"><i class='bx bxl-youtube'></i></a>
                            <a href="#"><i class='bx bxl-linkedin' ></i></a>
                            <a href="#"><i class='bx bxl-instagram' ></i></a>
                        </p>
                    </div>

                    <div class="col-lg-3 col-xs-12 links">
                        <h3 class="mt-lg-0 mt-sm-3 title-others">Others</h3>
                        <ul class="m-0 p-0">
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-1 col-xs-12 mitra">
                        <h3 class="mt-lg-0 mt-sm-2">Mitra</h3>
                        <img src={LogoKM} alt="Logo Kampus Merdeka" width="90px"></img>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col copyright">
                        <p class="content-copyright"><small>© 2022. PT Halo Belajar</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}