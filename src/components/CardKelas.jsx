import React, { useState } from "react";
import "../assets/css/KelasSaya.css";
import Golang from "../assets/images/golang.jpg";
import "boxicons";
import { Link } from "react-router-dom"

export default function CardKelas(/* { image, title, subtitle } */) {

    const [image, setImage] = useState(Golang);
    const [title, setTitle] = useState("Belajar Golang Basic");
    const [subtitle, setSubtitle] = useState("belajar golang");

    return(
        <div className="container-kelas">
            <Link to="/video" className="link-kelas">
                <div className="card-kelas">
                    <div className="content-kelas">
                        <div className="image">
                            <img alt="" src={image} width="250"/>
                        </div>
                        <div className="details-kelas">
                            <h2>{title}</h2>
                        </div>
                        <p>{subtitle}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}