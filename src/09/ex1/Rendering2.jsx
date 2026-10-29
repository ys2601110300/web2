import React from "react";
import {GuestGreeting, UserGreeting} from "./Rendering";

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

export default Greeting;
