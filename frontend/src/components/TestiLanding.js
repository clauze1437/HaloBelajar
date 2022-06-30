import React, { useState } from "react";
import "boxicons";
import "../assets/css/TestiLanding.css";
import Avatar from "../assets/images/Budi.png";
import Avatar2 from "../assets/images/Ani.png";
import Avatar3 from "../assets/images/Adi.png";

export default function TestiLanding() {
  // const [picture, setPicture] = useState(null);
  // const [name, setName] = useState("");
  // const [category, setCategory] = useState("");

  // const handlePictureChange = (e) => {
  //     setPicture(e.target.value);
  // }

  return (
    <div className="container-all-testi">
      <h1>Testimoni di HaloBelajar</h1>
      <div className="container-testimonials">
        <div className="card-testimonials">
          <div className="layer-testimonials"></div>
          <div className="content-testimonials">
            <div class="image">
              <img alt="" src={Avatar} width="150" height="150" />
            </div>
            <div class="details-testimonials">
              <h2>
                Budi<br></br>
                <span>Front End</span>
              </h2>
            </div>
            <p>Belajar dengan aplikasi ini sangat bagus dan menyenangkan. Serasa muda dan berkelas, serta sederhana dan mudah dimengerti.</p>
          </div>
        </div>

        <div className="card-testimonials">
          <div className="layer-testimonials"></div>
          <div className="content-testimonials">
            <div class="image">
              <img alt="" src={Avatar2} width="150" height="150" />
            </div>
            <div class="details-testimonials">
              <h2>
                Ani<br></br>
                <span>Back End</span>
              </h2>
            </div>
            <p>Videonya sangat memahami dan mendetail, dan saran mereka sangat sesuai deh pokoknya.</p>
          </div>
        </div>

        <div className="card-testimonials">
          <div className="layer-testimonials"></div>
          <div className="content-testimonials">
            <div class="image">
              <img alt="" src={Avatar3} width="150" height="150" />
            </div>
            <div class="details-testimonials">
              <h2>
                Adi<br></br>
                <span>Full Stack</span>
              </h2>
            </div>
            <p>Saya suka belajar dengan HaloBelajar karena memberi kesempatan untuk mendapatkan kunci kesuksesan bisnis saya.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
