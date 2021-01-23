import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
import Image, { Col } from "react-bootstrap/Image";
class About extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <PageHeader titleText="GOOD INFO HERE" />
        <div className="row">
          <div className="col-12">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="shadow-box-example shadow-lg p-3 mb-5 bg-info rounded">
              <h2 className="text-center mt-5 pt-5">
                HEY, MY NAME IS{" "}
                <span className="text-warning">AMAR SIKSEK</span>
              </h2>
              <h4 className="text-center font-italic">
                I'm a NEW Web Developer so here some information about ME!
              </h4>
              <div className="xs-6 md-4 m-auto mr-7">
                {" "}
                <Image
                  src="https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295431__480.jpg"
                  height="140px"
                  width="140px"
                  roundedCircle
                  className="make-it-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
