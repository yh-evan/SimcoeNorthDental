import { useState } from "react";
import { Form, Container, Button, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

import './Registration.css';

import NavigationComponent from "../NavigationComponent/NavigationComponent";

export default function Registration() {
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState(null);

    //const [passwordCh, setPasCh] = useState("");


    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            email_address: "",
            cell_phone: "",
            password: "",
            passwordConfirm: "",
        },
        validationSchema: Yup.object({
            first_name: Yup.string().required("First name is required"),
            last_name: Yup.string().required("Last name is required"),
            email_address: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            cell_phone: Yup.string()
                .min(10, "Phone number must be at least 10 characters")
                .max(11, "Phone number must be at most 11 characters, with area code")
                .required("Phone number is required"),
            password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .required("Password is required"),
            passwordConfirm: Yup.string()
                .required("Second input is required")
                .oneOf([Yup.ref('password')], "Two input is not match"),
        }),
        onSubmit: (values) => {
            console.log(values);
    
            fetch("/api/customers", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
            .then((res) => {
                console.log(res.status);
                if (res.status === 201) {
                    setCompleted(true);
                } else {
                    throw new Error("form not valid");
                } 
            })
            .catch((err) => {
                console.log("Error submitting form", err);
                setError(err);
            });
        },
      });
      if (completed) {
        return <h1>Success!</h1>;
      }
    
      if (error) {
        console.log("error", error);
      }

    return (
        <Container>
            <header>
                <NavigationComponent />
            </header>
            <main className="register-main">
                <Container fluid className="signup-form">
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                id="first_name"
                                name="first_name"
                                type="text"
                                placeholder="Enter your first name"
                                value={formik.values.first_name}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.first_name && formik.errors.first_name ? (
                                <Form.Text className="text-muted">{formik.errors.first_name}</Form.Text>
                            ) : null}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                id="last_name"
                                name="last_name"
                                type="text"
                                placeholder="Enter your last name"
                                value={formik.values.last_name}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.last_name && formik.errors.last_name ? (
                                <Form.Text className="text-muted">{formik.errors.last_name}</Form.Text>
                            ) : null}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                id="email_address"
                                name="email_address"
                                type="email"
                                placeholder="Enter your email address (abc@abc.com)"
                                value={formik.values.email_address}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.email_address && formik.errors.email_address ? (
                                <Form.Text className="text-muted">{formik.errors.email_address}</Form.Text>
                            ) : null}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Row>
                                <Col>     
                                    <Form.Control
                                id="password"
                                name="password"
                                type="password"
                                placeholder=""
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                    />
                                </Col>
                                <Col>
                                   
                            <Form.Control
                                id="passwordConfirm"
                                name="passwordConfirm"
                                type="password"
                                placeholder="Enter password again"
                                value={formik.values.passwordConfirm}
                                onChange={formik.handleChange}
                            />
                                </Col>
                            </Row> 
                            {formik.touched.password && formik.errors.password ? (
                                <Form.Text className="text-muted">{formik.errors.password}</Form.Text>
                            ) : null}
                            {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
                                <Form.Text className="text-muted">{formik.errors.passwordConfirm}</Form.Text>
                            ) : null}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                id="cell_phone"
                                name="cell_phone"
                                type="tel"
                                placeholder="Enter your phone number"
                                value={formik.values.cell_phone}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.cell_phone && formik.errors.cell_phone ? (
                                <Form.Text className="text-muted">{formik.errors.cell_phone}</Form.Text>
                            ) : null}
                        </Form.Group>

                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                    </Form>
                </Container>
            </main>
        </Container>
    );
}