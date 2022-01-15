import React from "react";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({ img, name, text, mint }) {
  return (
    <div className="card first-card">
      <div className="card--container">
        <img className="card--img" src={img} />
        <div className="card--title">
          <h4 className="card--name">{name}</h4>
          <h4 className="card--price">
            .1 <FontAwesomeIcon icon={faEthereum} />
          </h4>
        </div>
        <p className="card--text">
          <span className="bold">Base form: </span>
          {text}
        </p>
      </div>
      <button className="card--btn" onClick={() => mint()}>
        MINT NOW
      </button>
    </div>
  );
}
