import React from "react";
import "./InLine.css";

function Mailbox(props){
    const unreadMessage = 3;

    return (
        <div className="mailbox">
            <h1>안녕하세요!</h1>

            {unreadMessage > 0 && (
                <h2>
                    현재 <span>{unreadMessage}</span>개의 읽지 않은 메시지가 있습니다.
                </h2>
            )}
        </div>
    );
}

export default Mailbox;