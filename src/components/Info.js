import React from "react"
import img1 from "../Asset/images/mercy.jpg.jpg"
import btn from "../Asset/images/Button.png"
import Btn from "../Asset/images/Button (1).png"

export default function Info() {
    return (
        <>
            <div className="card__Info">
                <img src ={img1} alt="" className="card__cover-img" />
            </div>
            <div className="card__info-sub">
                <h2 className="card__Title">Mercy Ebulu</h2>
                <h4 className="card__desc">Frontend Developer</h4>
                <h5 className="card__website">mercyebulu.com</h5>
            </div>
            <div className="card__button">
                <a href="mailto:mercykeilechi@gmail.com"><img src={btn} alt="email-btn"/></a>
                <a href="https://www.linkedin.com/in/mercyebulu/" ><img src={Btn} alt="linkedin-btn"/></a>
            </div>
        </>
    )
}