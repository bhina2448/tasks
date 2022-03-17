import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(6);

    //if true is given to this function it will roll the left die
    //if false is given to this function it will roll thr right die
    function rollDie(isLeft: boolean): void {
        if (isLeft) {
            setLeftDie(d6());
        } else {
            setRightDie(d6());
        }
    }
    //Checks if game has been won or lost and returns a string accordingly to be printed
    function checkStatus(): string {
        if (leftDie === 1 && rightDie === 1) {
            return "Snake Eyes! You Lose!";
        } else if (leftDie === rightDie) {
            return "You Win!";
        } else {
            return "Game In Progess";
        }
    }
    return (
        <div>
            <div>Two Dice</div>
            <div>
                <span>
                    Left Die: <span>{leftDie}</span>
                </span>
                <span>
                    Right Die: <span>{rightDie}</span>
                </span>
            </div>
            <div>
                <Button onClick={() => rollDie(true)}>Roll Left</Button>
                <Button onClick={() => rollDie(false)}>Roll Right</Button>
            </div>
            <div>
                <span>{checkStatus()}</span>
            </div>
        </div>
    );
}
