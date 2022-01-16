import React from "react";

export default function Card({ img, name, text, mint, statsImg, textTitle, int, str, con, dex, spd, wis }) {
  return (
    <div className="card first-card">
      <div className="card--container">
        <img className="card--img" src={`../images/${img}.png`} />
        <div className="card--title">
          <h4 className="card--name">{name}</h4>
          <h4 className="card--name">Lv 1</h4>
        </div>
        <p className="card--text">
          <span className="bold">{textTitle}: </span>
          {text}
        </p>
        <img className="card--stats--img" src={`../images/${statsImg}.png`}/>
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
