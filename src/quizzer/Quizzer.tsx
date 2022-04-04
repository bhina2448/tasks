import React from "react";
import plan from "./TaskImage.jpg";

export function Quizzer(): JSX.Element {
    return (
        <div>
            <h3>Quizzer</h3>
            <img src={plan} alt="plan for quizzer" />
        </div>
    );
}
