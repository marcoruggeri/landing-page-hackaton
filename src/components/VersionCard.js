import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

export default function VersionCard({ version, step1, step2, step3, step4 }) {
  return (
    <div className="versionCard">
      <h1 className="versionCard--title">Phase {version}</h1>
      <div className="versionCard--flex">
        <p className="versionCard--square">
          <FontAwesomeIcon icon={faSquare} />
        </p>
        <p className="versionCard--feature">{step1}</p>
      </div>
      <div className="versionCard--flex">
        <p className="versionCard--square">
          <FontAwesomeIcon icon={faSquare} />
        </p>
        <p className="versionCard--feature">{step2}</p>
      </div>
      <div className="versionCard--flex">
        <p className="versionCard--square">
          <FontAwesomeIcon icon={faSquare} />
        </p>
        <p className="versionCard--feature">{step3}</p>
      </div>
      {step4 && (
        <div className="versionCard--flex">
          <p className="versionCard--square">
            <FontAwesomeIcon icon={faSquare} />
          </p>
          <p className="versionCard--feature">{step4}</p>
        </div>
      )}
    </div>
  );
}
