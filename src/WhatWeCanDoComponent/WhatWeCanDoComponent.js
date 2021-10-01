import "./WhatWeCanDoComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Card, Col, Row } from "react-bootstrap";

function WhatWeCanDoComponent() {
  return (
    <div className="whatwecando">
      <h1>What we can do for you?</h1>
      <div class="vl"></div>
      <Row xs={1} md={2} className="g-4 whatwecando-cards">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default WhatWeCanDoComponent;
