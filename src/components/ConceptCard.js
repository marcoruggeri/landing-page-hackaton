import React from "react"

export default function DarkCard({ img, name, text, textTitle }) {
    return (
        <div className="card dark--card">
            <div className="card--container">
                <img className="concept--card--img" src={img}/>
                <div className="concept--card--title">
                    <h4 className="card--name">{name}</h4>
                </div>
                <p className="card--text"><span className="bold">{textTitle}: </span>{text}</p>
            </div>
            <p className="concept--card--btn"></p>
        </div>
    )
}