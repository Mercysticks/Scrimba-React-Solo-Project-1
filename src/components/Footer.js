import React from "react"
import Twitter from "../Asset/svg/Twitter Icon.svg"
import Facebook from "../Asset/svg/Facebook Icon.svg"
import Insta from "../Asset/svg/Instagram Icon.svg"
import Github from "../Asset/svg/GitHub Icon.svg"

export default function Footer () {
    return (
        <>
        <div className="card__footer">
            <a href ="https://twitter.com/mercysticks"><img src={Twitter} alt="" /></a>
            <a href ="https://web.facebook.com/mercysticks/"><img src ={Facebook} alt="" /></a>
            <a href ="https://www.instagram.com/mercysticks/"><img src ={Insta} alt="" /></a>
            <a href ="https://github.com/Mercysticks"><img src ={Github} alt="" /></a>
        </div>
        </>
    )
}