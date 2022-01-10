import React from "react"
import { faEthereum } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Card(props) {
    return (
        <div className="card">
            <div className="card--container">
                <img className="card--img" src={props.img}/>
                <div className="card--title">
                    <h4 className="card--name">{props.name}</h4>
                    <h4 className="card--price">.1 <FontAwesomeIcon icon={faEthereum}/></h4>
                </div>
                <p className="card--text"><span className="bold">Base form: </span>{props.text}</p>
            </div>
            <button className="card--btn">MINT NOW</button>
        </div>
    )
}