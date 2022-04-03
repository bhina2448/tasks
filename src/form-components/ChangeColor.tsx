import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "pink",
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "indigo"
    ];
    const [chosen, setChosen] = useState<string>("pink");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setChosen(event.target.value);
    }
    return (
        <div>
            <div>
                <h3>Change Color</h3>
            </div>
            <Form>
                <Row>
                    <ul>
                        {colors.map((color: string) => (
                            <li key={color}>
                                <Col sm={3}>
                                    <Form.Check
                                        type="radio"
                                        name="Colors"
                                        onChange={updateColor}
                                        id={color + "-id"}
                                        label={color}
                                        value={color}
                                        checked={chosen === color}
                                    />
                                </Col>
                            </li>
                        ))}
                    </ul>
                </Row>
            </Form>
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: chosen }}
                >
                    {chosen}.
                </span>
            </div>
        </div>
    );
}
