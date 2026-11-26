import React from "react";
import "../ex1/WelcomeDialog.css";
import Dialog from "./Dialog";

function WelcomeDialog(props) {
    return(
        <Dialog title = {"Welcome to us"} message = {"Welcome to visit my site."}></Dialog>
    );
}

export default WelcomeDialog;