import React from "react";
import "boxicons";
import "../assets/css/BenefitLanding.css"
import List1 from "../assets/images/benefit-1.png"
import List2 from "../assets/images/benefit-2.png"
import List3 from "../assets/images/benefit-3.png"

export default function BenefitLanding() {

    return (
        <div className="container-benefit">
            <div className="title-benefit">
                <p>KEUNTUNGAN</p>
            </div>
            <div className="content-benefit">
                <ul>
                    <li><img src={List1} alt="list-benefit-1"></img><span>Tips praktis untuk belajarmu lebih efektif</span></li>
                    <li><img src={List2} alt="list-benefit-1"></img><span>Belajar langsung dari ahlinya</span></li>
                    <li><img src={List3} alt="list-benefit-1"></img><span>Tonton video pembelajarannya di mana pun dan kapan pun</span></li>
                </ul>
            </div>
        </div>
    )
}