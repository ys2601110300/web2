import React, { useState } from "react";
import "./FruitSelect.css"; // CSS 파일 임포트

function FruitSelect() {
    // 1. 초기값을 첫 번째 option의 value와 동일하게 설정
    const [value, setValue] = useState("사과");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // 새로고침 방지를 맨 위에 작성
        alert("선택한 과일: " + value);
    };

    return (
        <div className="fruit-container">
            <form className="fruit-form" onSubmit={handleSubmit}>
                <label className="fruit-label">
                    과일을 선택하세요
                    <select
                        className="fruit-select"
                        value={value}
                        onChange={handleChange}
                    >
                        {/* 한글 과일명이 바로 나오도록 value를 한글로 설정 (영어를 원하시면 apple 등으로 변경) */}
                        <option value="사과">🍎 사과</option>
                        <option value="바나나">🍌 바나나</option>
                        <option value="포도">🍇 포도</option>
                        <option value="레몬">🍋 레몬</option>
                    </select>
                </label>
                {/* 2. 중복 실행 방지를 위해 버튼의 onClick 제거 */}
                <button className="fruit-submit-btn" type="submit">
                    제출하기
                </button>
            </form>
        </div>
    );
}

export default FruitSelect;