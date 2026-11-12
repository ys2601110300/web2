import React, {useState} from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import "./Calculator.css";

function Calculator() {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <main className="temperature-page">
            <div className="temperature-app">
                <div className="temperature-brand">
                    <span className="temperature-brand-mark" aria-hidden="true">°</span>
                    TEMPERATURE LAB
                    <span className="temperature-edition">작은 일상 속 과학</span>
                </div>

                <header className="temperature-header">
                    <p className="temperature-eyebrow">복잡한 계산 없이, 간단하게</p>
                    <h1>온도는 달라도,<br/>같은 순간을 가리키니까.</h1>
                    <p className="temperature-description">
                        섭씨와 화씨 사이, 숫자만 입력하면 바로 바꿔드려요.
                    </p>
                </header>

                <section className="temperature-calculator" aria-labelledby="converter-title">
                    <div className="temperature-card-heading">
                        <h2 id="converter-title">온도 변환기</h2>
                        <span className="temperature-live"><span aria-hidden="true"/>실시간 변환</span>
                    </div>

                    <div className="temperature-fields">
                        <TemperatureInput
                            scale="c"
                            temperature={celsius}
                            onTemperatureChange={handleCelsiusChange}
                        />
                        <span className="temperature-exchange" aria-hidden="true">⇄</span>
                        <TemperatureInput
                            scale="f"
                            temperature={fahrenheit}
                            onTemperatureChange={handleFahrenheitChange}
                        />
                    </div>

                    <p className="temperature-input-hint">어느 쪽에 입력해도 반대쪽 온도가 자동으로 계산돼요.</p>
                    <BoilingVerdict celsius={parseFloat(celsius)}/>

                    <div className="temperature-reference">
                        <div><span>물이 어는 온도</span><strong>0°C <span>=</span> 32°F</strong></div>
                        <span className="temperature-reference-line" aria-hidden="true"/>
                        <div><span>물이 끓는 온도</span><strong>100°C <span>=</span> 212°F</strong></div>
                    </div>
                </section>

                <footer className="temperature-footer">
                    <span>CELSIUS & FAHRENHEIT</span>
                    <span>끓는점 기준 · 1기압</span>
                </footer>
            </div>
        </main>
    );
}

function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export default Calculator;
