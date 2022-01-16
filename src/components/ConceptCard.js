import React from "react"
import darkelf from "../images/dark-elf.png"
import mwolf from "../images/werewolf.png"
import rangerElf from "../images/ranger-elf.png"
import trainedWolf from "../images/trained-wolf.png"
import key from "../images/key.png"
import sword from "../images/sword.png"
import crossBow from "../images/crossbow.png"
import manaPotion from "../images/mana-potion.png"
import lifePotion from "../images/life-potion.png"
import scepter from "../images/scepter.png"


export default function DarkCard({ img, name, text, textTitle }) {
    return (
        <div className="card dark--card">
            <div className="card--container">
                <img className="concept--card--img" src={
                    img === "dark-elf" ? darkelf :
                    img === "werewolf" ? mwolf :
                    img === "ranger-elf" ? rangerElf :
                    img === "trained-wolf" ? trainedWolf :
                    img === "key" ? key :
                    img === "sword" ? sword :
                    img === "crossbow" ? crossBow :
                    img === "mana-potion" ? manaPotion :
                    img === "life-potion" ? lifePotion :
                    img === "scepter" ? scepter : ""
                }/>
                <div className="concept--card--title">
                    <h4 className="card--name">{name}</h4>
                </div>
                <p className="card--text"><span className="bold">{textTitle}: </span>{text}</p>
            </div>
            <p className="concept--card--btn"></p>
        </div>
    )
}