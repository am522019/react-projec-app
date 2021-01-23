import React, { Component } from "react";

import Carousel from "react-bootstrap/Carousel";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row ">
          <div className="col-12 p-0 ">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-200"
                  src="https://cdn.pixabay.com/photo/2017/07/12/05/52/equal-2495946_1280.jpg"
                  height="600px"
                  width="100%"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 className="fade w3-animate-zoom">First slide label</h3>
                  <p className="fade w3-animate-zoom">
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-200"
                  src="https://cdn.pixabay.com/photo/2014/09/26/09/33/girls-462072_1280.jpg"
                  height="600px"
                  width="100%"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block h-200"
                  src="https://cdn.pixabay.com/photo/2016/12/19/10/16/hand-1917895_1280.png"
                  height="600x"
                  width="100%"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="row pb-3 mt-5 pt-2">
          <div className="col-12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quae
              nesciunt perferendis odio reiciendis ad!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">MUSIC</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6  mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">FASHION</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6  mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">FOOD</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6  mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">AROUND THE WORLD</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6  mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">SPORT</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6  mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">GAMES</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
