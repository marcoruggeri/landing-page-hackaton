import React from "react"

export default function DarkCard(props) {
    return (
        <div className="card dark--card">
            <div className="card--container">
                <img className="card--img" src={props.img}/>
                <div className="card--title">
                    <h4 className="card--name">{props.name}</h4>
                </div>
                <p className="card--text"><span className="bold">Base form: </span>{props.text}</p>
            </div>
            <button className="card--btn dark--btn">MINT NOW</button>
        </div>
    )
}