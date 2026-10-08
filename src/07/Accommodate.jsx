import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";
import "./Accommodate.css";

const MAX_CAPACITY = 10;

function Accommodate() {
    const [count, increaseCount, decreaseCount] = useCounter(0);
    const [isFull, setIsFull] = useState(false);

    useEffect(() => {
        console.log("============ useEffect ============");
        console.log("useEffect 실행됨: 컴포넌트가 마운트될 때, 업데이트될 때");
        console.log(`isFull : ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div className="accommodate-page">
            <div className="accommodate-card">
                <p className="accommodate-count">
                    현재 총 <span className="accommodate-number">{count}</span>명<br/>수용중입니다.
                </p>

                <div className="accommodate-actions">
                    <button type="button" className="accommodate-button accommodate-button-enter" onClick={increaseCount} disabled = {isFull}>
                        수용시설에 입장
                    </button>

                    <button type="button" className="accommodate-button accommodate-button-exit" onClick={decreaseCount}>
                        수용시설에서 퇴장
                    </button>
                </div>

                <div className="accommodate-status" role="status" aria-live="polite" aria-atomic="true">
                    {isFull && (<p className="accommodate-warning">수용시설에 정원이 가득 찼습니다</p>)}
                </div>
            </div>
        </div>
    );
}

export default Accommodate;