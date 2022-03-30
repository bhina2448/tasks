import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    function compareAnswers(): string {
        if (expectedAnswer === answer) {
            return "✔️";
        } else {
            return " ❌";
        }
    }
    return (
        <div>
            <div>
                <h3>Check Answer</h3>
            </div>
            <div>
                <Form.Group controlId="formAnswer">
                    <Form.Label>Answer:</Form.Label>
                    <Form.Control value={answer} onChange={updateAnswer} />
                </Form.Group>
            </div>
            <div>{compareAnswers}</div>
        </div>
    );
}
