import "./WhatWeCanDoComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Parallax } from "react-parallax";

function WhatWeCanDoComponent() {
  return (
    <Parallax bgImage="/img/background.png" strength={-200}>
      <div className="whatwecando">
        <Card className="whatwecando-cards">
          <Card.Body>
            <Card.Title>Family Dentistry</Card.Title>
            <Card.Text>
              Keep your entire family smiling with family dentistry care.{" "}
            </Card.Text>
            <button className="learnmore">Learn More</button>
          </Card.Body>
        </Card>
      </div>
    </Parallax>
  );
}

export default WhatWeCanDoComponent;
