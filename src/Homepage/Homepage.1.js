import React from "react";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import data from "./HomepageData";

import softwareDevelopment from "./images/software-development-banner.png";
import finance from "./images/finance.jpg";
import ecommerce from "./images/ecommerce.jpg";
import healthcare from "./images/healthcare.jpg";
import tvAndMedia from "./images/tvandmedia.jpg";

function Homepage1() {
  return (
    <div>
      {data.Content.map(item => {
        return (
          <div id="digital-transformation">
            <Jumbotron className="App-jumbotron">
              <h1>{item.title}</h1>
              <p>
                {item.paragraph} &nbsp;{" "}
                <a href={item.link.url}>{item.link.text}</a>{" "}
              </p>
              <div className="App-banner">
                <img src={softwareDevelopment} alt="software development" />
              </div>
            </Jumbotron>
          </div>
        );
      })}
      <div>
        <Jumbotron className="App-jumbotron">
          <b> Start a project with us </b>
          <ul>
            <li>We focus on the customer. </li>
            <li>
              Our loyal and experienced team can streamline and enhance the
              operational efficiency of your business through faster and more
              resilient development.
            </li>
            <li>
              We are test-oriented, utilising test automation to build and
              assure quality into every product.
            </li>
            <li>
              You can scale your IT resources on-demand, reliably and securely
              according to your project needs.
            </li>
            <li>
              We'll advise on, provision and manage your cloud infrastructure,
              reducing cost and improving security and compliance.
            </li>
            <li>
              As cloud and security specialists we'll help you migrate your
              services to the cloud and integrate enterprise services seamlessly
              and securely. Using cloud managed services you can reduce capital
              or operational expense, accelerate time-to-business-value and
              improve on ROI.
            </li>
          </ul>
          <b>
            [Add images to represent each of the benefits above and keep the
            text as per wireframe]
          </b>
          <br />
          <a href="./Contact/Sales">
            {" "}
            Start a project with us, arrange a free consultation here. [Link
            image to contact > sales ]{" "}
          </a>
        </Jumbotron>
      </div>
      <div id="industries">
        <Jumbotron className="App-jumbotron">
          <b>
            Having worked across a wide range of industries, we can help you:
          </b>
          <div className="App-cards">
            <Card style={{ width: "25rem" }}>
              <Card.Img
                style={{ height: "12rem" }}
                variant="top"
                src={finance}
              />
              <Card.Body>
                <Card.Title>Finance</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ width: "25rem" }}>
              <Card.Img
                style={{ height: "12rem" }}
                variant="top"
                src={ecommerce}
              />
              <Card.Body>
                <Card.Title>Retail &amp; eCommerce</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ width: "25rem" }}>
              <Card.Img
                style={{ height: "12rem" }}
                variant="top"
                src={healthcare}
              />
              <Card.Body>
                <Card.Title>Healthcare</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ width: "25rem" }}>
              <Card.Img
                style={{ height: "12rem" }}
                variant="top"
                src={tvAndMedia}
              />
              <Card.Body>
                <Card.Title>Tv &amp; Media</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ width: "25rem" }}>
              <Card.Img
                style={{ height: "12rem" }}
                variant="top"
                src="holder.js/100px180"
              />
              <Card.Body>
                <Card.Title>Food &amp; drink</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ width: "25rem" }}>
              <Card.Img
                style={{ height: "12rem" }}
                variant="top"
                src="holder.js/100px180"
              />
              <Card.Body>
                <Card.Title>Travel</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <b>[Add images for the industries above and keep the text]</b>
          <br />
          <a href="./Contact/Sales">
            {" "}
            Find out more on how we can help in your industry [Link to Contact >
            Sales]{" "}
          </a>
        </Jumbotron>
      </div>
      <div>
        <Jumbotron className="App-jumbotron">
          <b>
            We partner with the major cloud providers to offer you the best
            solution
          </b>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>AWS</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Microsoft Azure</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Google Cloud</Card.Title>
            </Card.Body>
          </Card>
          <b>[Add images represent each of the above partners]</b>
          <br />
          <a href="./About/Certifications">
            View all our internationally recognised certifications.
          </a>
        </Jumbotron>
      </div>
    </div>
  );
}

export default Homepage1;
