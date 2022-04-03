import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }
    function checkAnswer(): string {
        if (choice === expectedAnswer) {
            return "✔️";
        } else {
            return "❌";
        }
    }
    return (
        <div>
            <div>
                <h3>Multiple Choice Question</h3>
            </div>
            <div>
                <Form.Group controlId="userChoice">
                    <Form.Label>Select a Choice</Form.Label>
                    <Form.Select value={choice} onChange={updateChoice}>
                        {options.map((str: string) => (
                            <option key={str} value={str}>
                                {str}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            <div>{checkAnswer()}</div>
        </div>
    );
}
