import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

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

            <Form>
                <Row>
                    <Form.Check
                        type="switch"
                        id="in-editMode-check"
                        checked={inEditMode}
                        onChange={changeMode}
                    />
                </Row>
                <Row>
                    <span>{displayStudent()}</span>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="formStudentName" as={Row}>
                            <Form.Label column sm={2}>
                                Name:
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    value={name}
                                    onChange={changeName}
                                    disabled={!inEditMode}
                                />{" "}
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button onClick={changeStatus} disabled={!inEditMode}>
                            {isStudent ? "Remove Student" : "Add Student"}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}
