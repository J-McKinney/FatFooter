import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Style from "./FatFooter.module.css";

function FatFooter(props) {
  return (
    <>
      <div className={Style.wrapper}>
        <Container className={Style.footerContainer}>
          <Row>
            <Col>
              <Row className={Style.firstRow}>
                <Col className={Style.firstColumn}>
                  <h5>SHOP</h5>
                  <br />
                  <div>SEARCH</div>
                  <div>Contact Us</div>
                  <div>Wish-List</div>
                </Col>
                <Col className={Style.secondColumn}>
                  <h5>INFORMATION</h5>
                  <br />
                  <div>Privacy Policy</div>
                  <div>Refund Policy</div>
                  <div>Terms of Service</div>
                </Col>
              </Row>
            </Col>
            <Col className={Style.thirdColumn}>
              <h5>STAY CONNECTED</h5>
              <Row>
                <Button variant="light" className={Style.facebookIcon}>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Button>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FatFooter;
