import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import {AiOutlineMail} from'react-icons/ai'
export default class Contact extends Component {
  render() {
    return (
      <div className="my-5 p-5 about-container container">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-start">
              <h1> Contact me!</h1>
            </div>
            <div className="container-fluid">
              <div className="d-flex flex-column bd-highlight mb-3">
                <Row>
                    <h4>Email: </h4><h4 className ="minorText"> kashmelgo@gmail.com</h4>
                </Row>
                <Row>
                  <h4>Phone Number: </h4><h4 className ="minorText">+639054852101 </h4>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
