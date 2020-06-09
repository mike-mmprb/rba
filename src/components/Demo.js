import React from "react";
import { Jumbotron, Button, Carousel, Card } from "react-bootstrap";

function Demo() {
  return (
    <div className="Demo">
      <div className="container">
        <Jumbotron>
          <h1>Headline Text</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/nick1280x720.jpg"
              alt="Nick"
            />
            <Carousel.Caption>
              <h3>Meet Nick</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/army1280x720.jpg"
              alt="Army"
            />

            <Carousel.Caption>
              <h3>Meet Army</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/libby1280x720.jpg"
              alt="Libby"
            />
            <Carousel.Caption>
              <h3>Meet Libby</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div class="row">
          <div class="col-lg-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src="/images/pritzi-nick.jpg" />
              <Card.Body>
                <Card.Title>Card1 Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor .
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col-lg-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src="/images/pritzi-nick.jpg" />
              <Card.Body>
                <Card.Title>Card2 Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col-lg-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src="/images/pritzi-nick.jpg" />
              <Card.Body>
                <Card.Title>Card3 Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
