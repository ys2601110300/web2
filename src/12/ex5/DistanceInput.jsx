import React from "react";

const scaleName = {
    km: "킬로미터",
    mile: "마일"
};

function DistanceInput(props) {
    const handleChange = (event) => {
        props.onDistanceChange(event.target.value);
    };

    return (
        <fieldset className={`distance-field distance-field--${props.scale}`}>
            <legend className="distance-field-legend">
                <span>{scaleName[props.scale]}</span>
                <span className="distance-scale-name">{props.scale === "km" ? "KILOMETERS" : "MILES"}</span>
            </legend>
            <div className="distance-input-wrap">
                <input
                    id={`distance-${props.scale}`}
                    aria-label={`${scaleName[props.scale]} 거리`}
                    type="text"
                    inputMode="decimal"
                    autoComplete="off"
                    spellCheck={false}
                    placeholder="0"
                    value={props.distance}
                    onChange={handleChange}
                />
                <span className="distance-unit" aria-hidden="true">{props.scale}</span>
            </div>
            <p className="distance-field-caption">{scaleName[props.scale]} 단위로 입력하세요</p>
        </fieldset>
    );
}

export default DistanceInput;
