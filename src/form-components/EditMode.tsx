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
    function changeStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function displayStudent(): string {
        if (isStudent) {
            return name + " is a student";
        } else {
            return name + " is not a student";
        }
    }

    if (inEditMode) {
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
                            <Form.Group controlId="formStudentName">
                                <Form.Label column sm={2}>
                                    Name:
                                </Form.Label>
                                <Col>
                                    <Form.Control
                                        value={name}
                                        onChange={changeName}
                                    />{" "}
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="is-student-check">
                                <Form.Label column sm={2}>
                                    Student?
                                </Form.Label>
                                <Form.Check
                                    type="checkbox"
                                    checked={isStudent}
                                    onChange={changeStatus}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    } else {
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
                </Form>
            </div>
        );
    }
}
