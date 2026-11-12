import React, {useState} from "react";
import DistanceInput from "./DistanceInput";
import "./DistanceConvert.css";

function DistanceConvert() {
    const [distance, setDistance] = useState("");
    const [scale, setScale] = useState("km");

    const handleKilometerChange = (distance) => {
        setDistance(distance);
        setScale("km");
    };

    const handleMileChange = (distance) => {
        setDistance(distance);
        setScale("mile");
    };

    const kilometer = scale === "mile" ? tryConvert(distance, toKilometer) : distance;
    const mile = scale === "km" ? tryConvert(distance, toMile) : distance;

    return (
        <main className="distance-page">
            <div className="distance-app">
                <div className="distance-brand">
                    <span className="distance-brand-mark" aria-hidden="true">↗</span>
                    DISTANCE STUDIO
                    <span className="distance-edition">어디로든, 가볍게</span>
                </div>

                <header className="distance-header">
                    <p className="distance-eyebrow">KILOMETERS ↔ MILES</p>
                    <h1>길이는 그대로,<br/>단위만 가볍게.</h1>
                    <p className="distance-description">
                        러닝 코스부터 다음 여행까지. 킬로미터와 마일을 바로 바꿔보세요.
                    </p>
                </header>

                <section className="distance-converter" aria-labelledby="distance-title">
                    <div className="distance-card-heading">
                        <div>
                            <p className="distance-card-label">YOUR NEXT DISTANCE</p>
                            <h2 id="distance-title">거리 변환기</h2>
                        </div>
                        <span className="distance-live"><span aria-hidden="true"/>실시간 변환</span>
                    </div>

                    <div className="distance-fields">
                        <DistanceInput
                            scale="km"
                            distance={kilometer}
                            onDistanceChange={handleKilometerChange}
                        />
                        <span className="distance-exchange" aria-hidden="true">⇄</span>
                        <DistanceInput
                            scale="mile"
                            distance={mile}
                            onDistanceChange={handleMileChange}
                        />
                    </div>

                    <p className="distance-input-hint">어느 쪽에 입력해도 반대쪽 거리가 자동으로 계산돼요.</p>

                    <div className="distance-guide">
                        <div className="distance-route" aria-hidden="true"><span/><i/><span/></div>
                        <div>
                            <p>두 단위를 잇는 작은 기준</p>
                            <strong>1 mile <span>=</span> 1.609344 km</strong>
                        </div>
                        <span className="distance-guide-tag">기억해두세요</span>
                    </div>

                    <div className="distance-formulas">
                        <div><span>킬로미터 → 마일</span><p>km <b>÷</b> 1.609344</p></div>
                        <div><span>마일 → 킬로미터</span><p>mile <b>×</b> 1.609344</p></div>
                    </div>
                </section>

                <footer className="distance-footer">
                    <span>A LITTLE CONVERSION. A LONG WAY.</span>
                    <span>변환 결과 · 소수 셋째 자리까지 반올림</span>
                </footer>
            </div>
        </main>
    );
}

function toKilometer(mile) {
    return mile * 1.609344;
}

function toMile(kilometer) {
    return kilometer / 1.609344;
}

function tryConvert(distance, convert) {
    const input = parseFloat(distance);
    if (Number.isNaN(input)) {
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export default DistanceConvert;
