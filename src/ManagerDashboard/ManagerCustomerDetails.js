import { useEffect, useState } from "react";
import FooterComponent from "../FooterComponent/FooterComponent";
import NavigationComponent from "../NavigationComponent/NavigationComponent";
import { Form, Button } from "react-bootstrap";
import "./ManagerCustomerDetails.css";

export default function ManagerCustomerDetails({ id }) {
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const url = `http://localhost:8080/api/customers/${id}`;

    setLoading(true);

    fetch(url)
      .then((res) => {
        if (!res) {
          throw new Error("Unable to find customer's details");
        }
        return res.json();
      })
      .then((result) => {
        if (result.hasOwnProperty("_id")) {
          setCustomer(result);
        } else {
          setCustomer(null);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (!customer) {
    return (
      <div className="ManagerDashboard">
        <NavigationComponent turnOn={false} />
        <div className="manager-content">
          <p>No customer's information found</p>
        </div>
        <FooterComponent />
      </div>
    );
  }

  if (!customer || loading) {
    return (
      <div className="ManagerDashboard">
        <NavigationComponent turnOn={false} />
        <div className="manager-content">
          <p>Loading Customer's information...</p>
        </div>
        <FooterComponent />
      </div>
    );
  }

  return (
    <div>
      <NavigationComponent turnOn={false} />
      <div className="manager-customer-container">
        <Form className="manager-customer-form">
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder={customer.first_name} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder={customer.last_name} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder={customer.email_address} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder={customer.cell_phone} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update
          </Button>
          <Button variant="primary" type="cancel">
            Cancel
          </Button>
          <Button variant="primary" type="delete">
            Delete
          </Button>
        </Form>
      </div>
      <FooterComponent />
    </div>
  );
}
