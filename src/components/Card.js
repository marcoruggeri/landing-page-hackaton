import React from "react";
import dragonide from "../images/dragonide.png"
import elf from "../images/elf.png"
import dwarf from "../images/dwarf.png"
import human from "../images/human.png"
import ogre from "../images/ogre.png"
import magoStats from "../images/Mago-stats.png"
import rangerStats from "../images/Ranger-stats.png"
import warriorStats from "../images/Guerriero-stats.png"
import paladinStats from "../images/Paladino-stats.png"
import barbarianStats from "../images/Barbaro-stats.png"


export default function Card({ img, name, text, statsImg, textTitle, int, str, con, dex, spd, wis }) {
  return (
    <div className="card first-card">
      <div className="card--container">
        <img className="card--img" src={
          img === "dragonide" ? dragonide :
          img === "elf" ? elf :
          img === "dwarf" ? dwarf :
          img === "human" ? human :
          img === "ogre" ? ogre : ""}
        /> 
        <div className="card--title">
          <h4 className="card--name">{name}</h4>
          <h4 className="card--name">Lv 1</h4>
        </div>
        <p className="card--text">
          <span className="bold">{textTitle}: </span>
          {text}
        </p>
        <img className="card--stats--img" src={
          statsImg === "Mago-stats" ? magoStats :
          statsImg === "Ranger-stats" ? rangerStats :
          statsImg === "Paladino-stats" ? paladinStats : 
          statsImg === "Guerriero-stats" ? warriorStats :
          statsImg === "Barbaro-stats" ? barbarianStats : ""
          }
        />
        <div className="card--stats--grid">
          <p className="card--stat">INT: <span className="bold">{int}</span></p>
          <p className="card--stat">STR: <span className="bold">{str}</span></p>
          <p className="card--stat">CON: <span className="bold">{con}</span></p>
          <p className="card--stat">DEX: <span className="bold">{dex}</span></p>
          <p className="card--stat">SPD: <span className="bold">{spd}</span></p>
          <p className="card--stat">WIS: <span className="bold">{wis}</span></p>
        </div>
      </div>
    </div>
  );
}
