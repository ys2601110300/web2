import React from "react";

const scaleName = {
    c: "섭씨",
    f: "화씨"
};

function TemperatureInput(props) {
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    };

    return (
        <fieldset className={`temperature-field temperature-field--${props.scale}`}>
            <legend className="temperature-field-legend">
                <span>{scaleName[props.scale]}</span>
                <span className="temperature-scale-name">{props.scale === "c" ? "CELSIUS" : "FAHRENHEIT"}</span>
            </legend>
            <div className="temperature-input-wrap">
                <input
                    id={`temperature-${props.scale}`}
                    aria-label={`${scaleName[props.scale]} 온도`}
                    type="text"
                    inputMode="decimal"
                    autoComplete="off"
                    spellCheck={false}
                    placeholder="0"
                    value={props.temperature}
                    onChange={handleChange}
                />
                <span className="temperature-unit" aria-hidden="true">°{props.scale.toUpperCase()}</span>
            </div>
            <p className="temperature-field-caption">{scaleName[props.scale]} 온도를 입력하세요</p>
        </fieldset>
    );
}

export default TemperatureInput;
