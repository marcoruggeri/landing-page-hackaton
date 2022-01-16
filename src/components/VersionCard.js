import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquare } from "@fortawesome/free-regular-svg-icons"

export default function VersionCard(props) {
    return (
        <div className="versionCard">
            <h1 className="versionCard--title">Version {props.version}</h1>
            <p className="versionCard--feature"><FontAwesomeIcon icon={faSquare}/> Feature 1</p>
            <p className="versionCard--feature"><FontAwesomeIcon icon={faSquare}/> Feature 1</p>
            <p className="versionCard--feature"><FontAwesomeIcon icon={faSquare}/> Feature 1</p>
            <p className="versionCard--feature"><FontAwesomeIcon icon={faSquare}/> Feature 1</p>
        </div>
    )
}