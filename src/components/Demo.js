import React from "react";
import { Jumbotron, Button, Carousel } from "react-bootstrap";

function Demo() {
  return (
    <div className="Demo">
      <div className="container">
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
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
      </div>
    </div>
  );
}

export default Demo;
