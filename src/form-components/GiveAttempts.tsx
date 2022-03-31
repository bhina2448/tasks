import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [additions, setAdditions] = useState<number>(0);
    function updateAdditions(event: React.ChangeEvent<HTMLInputElement>) {
        setAdditions(parseInt(event.target.value));
        setAttempts(attempts + additions);
    }
    function updateAttempts(newAttempts: number) {
        setAttempts(newAttempts);
    }
    return (
        <div>
            <div>
                <h3>Give Attempts</h3>{" "}
            </div>
            <div>
                <button onClick={() => updateAttempts(attempts - 1)}>
                    use
                </button>
            </div>
            <div>
                <Form.Group controlId="formAdditions">
                    <Form.Control type="number" value={additions} />
                </Form.Group>
                <button onClick={() => updateAdditions}>gain</button>
            </div>
        </div>
    );
}
