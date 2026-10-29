import React, {useState} from "react";

function MessageSender()
{
    const [text, setText] = useState("");

    function input(e)
        {
            setText(e.target.value);
        }
    function reply(e)
    {
            alert(text);
            setText("");
    }

    return (
        <div style = {{padding: '20px'}}>
            <h1>메시지 전송 프로그램</h1>
            <input type = {"text"}
                   placeholder = {"전송할 메시지 입력"}
                   value = {text}
                   onChange = {input}/>
            <button onClick = {reply}>
                전송
            </button>
            <p>미리보기: {text}</p>
        </div>
    );
}

export default MessageSender;