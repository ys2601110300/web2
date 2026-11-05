import React, { useState } from "react";
import "./Reservation.css";

function Reservation() {
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(1);

    const handleSubmit = (e) => {
        alert(`아침 식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}명`);
        e.preventDefault();
    };

    return (
        <form className="reservation-form" onSubmit={handleSubmit}>
            <label className="reservation-label">
                아침식사 여부:
                <input
                    type="checkbox"
                    className="reservation-checkbox"
                    checked={haveBreakfast}
                    onChange={(e) => {
                        setHaveBreakfast(e.target.checked);
                    }}
                />
            </label>
            <br />
            <label className="reservation-label">
                방문자 수:
                <input
                    type="number"
                    className="reservation-number"
                    value={numberOfGuest}
                    onChange={(e) => {
                        setNumberOfGuest(e.target.value);
                    }}
                />
            </label>
            <br />
            <button type="submit" className="reservation-btn">
                제출
            </button>
        </form>
    );
}

export default Reservation;