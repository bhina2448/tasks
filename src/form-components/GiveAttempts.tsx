import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [additions, setAdditions] = useState<number>(0);
    function updateAdditions(event: React.ChangeEvent<HTMLInputElement>) {
        const response = parseInt(event.target.value);
        if (!isNaN(response)) {
            setAdditions(response);
        }
    }
    function updateAttempts() {
        setAttempts(attempts + additions);
    }
    function useAttempt() {
        setAttempts(attempts - 1);
    }
    return (
        <div>
            <div>
                <h3>Give Attempts</h3>
            </div>
            <div>
                Attempts: <span>{attempts}</span>
            </div>
            <div>
                <button onClick={useAttempt} disabled={attempts === 0}>
                    use
                </button>
                <Form.Group controlId="formAdditions">
                    <Form.Control
                        type="number"
                        value={additions}
                        onChange={updateAdditions}
                    />
                </Form.Group>
                <button onClick={updateAttempts}>gain</button>
            </div>
        </div>
    );
}
