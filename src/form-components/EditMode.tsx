import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inEditMode, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);
    function changeMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }
    function changeName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function changeStatus(): void {
        setStudent(!isStudent);
    }
    function displayStudent(): string {
        if (isStudent) {
            return name + " is a student";
        } else {
            return name + " is not a student";
        }
    }
    return (
        <div>
            <div>
                <h3>Edit Mode</h3>
            </div>
            <div>
                <Form.Check
                    type="switch"
                    id="in-editMode-check"
                    label="edit mode"
                    checked={inEditMode}
                    onChange={changeMode}
                />
            </div>
            <div>
                <span>{displayStudent()}</span>
            </div>
            <div>
                <span>
                    <Form.Group controlId="formStudentName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={changeName}
                            disabled={!inEditMode}
                        />{" "}
                    </Form.Group>
                </span>
                <span>
                    <Button onClick={changeStatus} disabled={!inEditMode}>
                        {isStudent ? "Remove Student" : "Add Student"}
                    </Button>
                </span>
            </div>
        </div>
    );
}
