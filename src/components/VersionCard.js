import React from "react"
import {faCheckSquare} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function VersionCard(props) {
    return (
        <div className="versionCard">
            <h1 className="versionCard--title">Version {props.version}</h1>
            <p className="versionCard--feature"><FontAwesomeIcon icon={faCheckSquare}/> Feature 1</p>
            <p className="versionCard--feature"><FontAwesomeIcon icon={faCheckSquare}/> Feature 1</p>
            <p className="versionCard--feature"><FontAwesomeIcon icon={faCheckSquare}/> Feature 1</p>
            <p className="versionCard--feature"><FontAwesomeIcon icon={faCheckSquare}/> Feature 1</p>
        </div>
    )
}