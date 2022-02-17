import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import diesel from "./Diesel.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Brielle Hina. Hello World
            </p>
            <h1>This is my header</h1>
            <Container>
                <Row>
                    <Col>
                        <img src={diesel} alt="Old Man Diesel" />
                        <div
                            style={{
                                width: "50%",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        pets
                        <ul>
                            <li>Diesel</li>
                            <li>Bryson</li>
                            <li>Roni</li>
                            <li>Tigger</li>
                        </ul>
                        <div
                            style={{
                                width: "50%",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
