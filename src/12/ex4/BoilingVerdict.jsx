import React from "react";

function BoilingVerdict(props) {
    const hasTemperature = Number.isFinite(props.celsius);
    const isBoiling = hasTemperature && props.celsius >= 100;
    const status = !hasTemperature ? "empty" : isBoiling ? "boiling" : "calm";

    return (
        <div className={`temperature-verdict temperature-verdict--${status}`} role="status" aria-live="polite">
            <span className="temperature-verdict-icon" aria-hidden="true">{isBoiling ? "♨" : "≈"}</span>
            <div>
                <strong>{!hasTemperature ? "지금 물의 상태는?" : isBoiling ? "물이 끓습니다." : "물이 끓지 않습니다."}</strong>
                <p>{!hasTemperature
                    ? "온도를 입력하면 물이 끓는지 함께 알려드려요."
                    : isBoiling
                        ? "섭씨 100°C 이상, 물이 끓는 온도에 도달했어요."
                        : "섭씨 100°C 미만, 아직 끓는점에 도달하지 않았어요."}</p>
            </div>
            <span className="temperature-verdict-badge">{!hasTemperature ? "입력 대기" : isBoiling ? "BOILING" : "BELOW 100°C"}</span>
        </div>
    );
}

export default BoilingVerdict;
