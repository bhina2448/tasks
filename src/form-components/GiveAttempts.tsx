import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [additions, setAdditions] = useState<number>(0);
    function updateAdditions(event: React.ChangeEvent<HTMLInputElement>) {
        setAdditions(parseInt(event.target.value));
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
                <Form>
                    <Row>
                        <Col>
                            Attempts: <span>{attempts}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button
                                onClick={() => updateAttempts(attempts - 1)}
                            >
                                use
                            </button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formAdditions">
                                <Form.Control
                                    type="number"
                                    value={additions}
                                    onChange={updateAdditions}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={3}>
                            <button
                                onClick={() =>
                                    updateAttempts(additions + attempts)
                                }
                            >
                                gain
                            </button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
}
