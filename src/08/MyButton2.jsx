import React, {useState} from "react";

function MyButton2()
{
    const [count, setCount] = useState(1);

    const btnClick = (id, event) =>
    {
        console.log(id, event.target);
    };

    return(
        <button onClick ={(event => {
            setCount((count) => count + 1);
            btnClick(count, event);
        })}>
            버튼을 클립하세요( 개발자도구(F12) 실행)
        </button>
    );
}

export default MyButton2;