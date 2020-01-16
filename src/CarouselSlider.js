import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="App-carousel"
          src="http://dev.genesesolution.com/wp-content/uploads/2018/11/monitoring-1.jpg"
          alt="Digital Transformation"
        />
        <Carousel.Caption className="App-carousel-caption">
          <h3>Digital Transformation</h3>
          <h5>Do your Digital Transformation with our Cloud Experts</h5>
          <p>
            Our certified Architects, Developers and DevOps experts make your
            transition to the cloud in a managed, cost-effective and secure way.
            We're experts in building efficient, highly scalable, reliable
            infrastructures and continuous delivery pipelines that maximise
            profits and allow you to deliver features faster.
          </p>
          <a href="./Services/DigitalTransformation">
            Learn more about how we can migrate your business.
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="App-carousel"
          src="http://dev.genesesolution.com/wp-content/uploads/2018/10/cloud-computing.jpg"
          alt="Cutting Edge Technologies"
        />

        <Carousel.Caption className="App-carousel-caption">
          <h3>Cutting Edge Technologies</h3>
          <h5>
            Integrate IoT, Big Data and Machine Learning into your business
          </h5>
          <p>
            Cherry pick in-house enterprise services and the latest technologies
            using APIs and a Serverless architecture to take advantage of the
            best Cloud has to offer. Optimise and automate business processes
            using established Artificial Intelligence cloud services such as
            text processing and image recognition. Connect your apps to the
            world of the Internet of Things and collect, analyse and visualise
            business Big Data on easy to read dashboards. &nbsp;
            <a href="./Offers/Welcome2020">
              Click here for a discounted offer!
            </a>
          </p>
          <a href="./Services/SoftwareDevelopment">
            Learn more about how to integrate these technologies into your
            business.
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="App-carousel"
          src="http://dev.genesesolution.com/wp-content/uploads/2018/11/aws-1.jpg"
          alt="Expert Advise and Support"
        />
        <Carousel.Caption className="App-carousel-caption App-carousel-caption-dark">
          <h3>Expert Advise and Support</h3>
          <h5>Certified Experienced Cloud Professionals from £250/day*</h5>
          <p>
            As an AWS Advanced Tier Partner, our team of cloud Architects,
            Developers and DevOps is certified to the highest level. Our
            certifications are globally recognised by our cloud partners
            including AWS, Microsoft Azure and Google. Let us pick up your
            infrastructure and applications form where you’ve left off. We’ll
            provide advise on what can be optmised to help you reduce costs.
            &nbsp;
            <a href="./Offers/Welcome2020">
              Click here for a discounted offer!
            </a>
            <div className="App-small-print">
              * Prices depend on project duration and are subjected to VAT.
            </div>
          </p>
          <a href="./Services/ExpertAdviseAndSupport">
            Learn more about Expert Advise &amp; Support.
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselSlider;
