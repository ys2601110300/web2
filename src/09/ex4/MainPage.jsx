import React, {useState} from "react";
import WarningBanner from "./WarningBanner";
import "./MainPage.css";

function MainPage(){
    const [showWarning, setShowWarning] = useState(false);

    const btnListener = () => {
        setShowWarning(prevShowWarning => !prevShowWarning);
    }

    return(
        <div className="main-page">
            <WarningBanner warning = {showWarning}/>
            <button onClick = {btnListener}>
                {showWarning? "감추기" : "표시하기"}
            </button>
        </div>
    )
}

export default MainPage;