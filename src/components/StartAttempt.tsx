import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, changeProgress] = useState<boolean>(false);
    function setProgress(p: boolean): void {
        changeProgress(p);
        if (!inProgress) {
            setAttempts(attempts - 1);
        }
    }
    function addAttempt(): void {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <div>Start Attempt</div>
            <div>
                Quiz is:
                <span>
                    {inProgress ? (
                        <span>In Progress</span>
                    ) : (
                        <span>Not In Progress</span>
                    )}
                </span>
            </div>
            <div>
                Attempts Remaining: <span>{attempts}</span>
            </div>
            <div>
                <Button
                    onClick={() => setProgress(true)}
                    disabled={inProgress || attempts === 0}
                >
                    Start Quiz
                </Button>

                <Button
                    onClick={() => setProgress(false)}
                    disabled={!inProgress}
                >
                    Stop Quiz
                </Button>

                <Button onClick={addAttempt} disabled={inProgress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
