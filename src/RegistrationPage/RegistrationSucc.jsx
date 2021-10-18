import Button from "@restart/ui/esm/Button";
import { Container, Toast } from "react-bootstrap";

import './Registration.css'

export default function RegistrationSucc({ name }) {
    return (
        <div className="register-succ-main">
            <Container>
                <Button className="mb-2 register-succ-button">
                    Back to <strong>Home</strong> page
                </Button>
                <Toast>
                    <Toast.Header>
                        <img src="./logo.png" className="rounded me-2" alt="" />
                        <strong className="me-auto">Simcoe North Dental</strong>
                    </Toast.Header>
                <Toast.Body>Hello, <strong>{name}</strong>!
                            We are so happy to have you as part of our big family.</Toast.Body>
                </Toast>
            </Container>
        </div>
    );
}