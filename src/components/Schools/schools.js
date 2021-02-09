import React from 'react';
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import French from "../../media/Flag/french.png";
import Spanish from "../../media/Flag/spain.png";
import English from "../../media/Flag/america.png";
import Chinese from "../../media/Flag/chinese.png";
import Blue from "../../media/Icon/bleu.png";
import Prem from "../../media/Icon/premiere.png";
import Sec from "../../media/Icon/seconde.png";
import Cad from "../../media/Icon/cad.png";
import Group from "../../media/Icon/group.png";

export default function RFASchools(props){
    return (
      <Row className = "header-blobs">
          <Container>
            <Row className = "m-4 w-100 justify-content-center">
              <h1 className = "page-header">Partner with us Today for After-School STEM Programs!</h1>
              <p className = "page-header-description">Choose from any of our 5 levels of curriculum offered to schools and join the community of schools we partner with to offer classes!</p>
              <h1 className = "page-header">COURSE OVERVIEWS</h1>
              <p className = "page-header-description">Partner with us at any time to offer our wide selection of courses to your students!</p>
              <p className = "page-header-description">Since July 2020, Robotics for All has provided online courses for students from Kindergarten to 8th grade. All classes run for eight weeks and have virtual hour-long meetings with teachers once or twice a week!</p>
              <p className = "page-header-description">View our detailed syllabi below:</p>
            </Row>
          </Container>
          <Container>
            <Row className = "m-4 w-100 justify-content-center">
              <Col>
                <Card className ="card-modif">
                  <Card.Img variant="top" src={English} />
                  <Card.Body>
                    <Card.Title>ENGLISH</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className = "card-modif">
                  <Card.Img variant="top" src={Spanish} />
                  <Card.Body>
                    <Card.Title>SPANISH</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className = "card-modif">
                  <Card.Img variant="top" src={French} />
                  <Card.Body>
                    <Card.Title>FRENCH</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className = "card-modif">
                  <Card.Img variant="top" src={Chinese} />
                  <Card.Body>
                    <Card.Title>CHINESE</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className = "m-4 w-100 justify-content-center">
              <Col md={{ span: 6, offset: 3 }}><Button variant="primary">Enroll in a Course Today!</Button></Col>
            </Row>
          </Container>
          <Container className = "container-vert">
            <Row className = "m-4 w-100 justify-content-center">
              <h1 className = "page-header">COURSE OFFERINGS</h1>
              <p className = "page-header-description">We offer basic and advanced computer programming and computer-aided design courses for students in K-8th grade!</p>
              <p className = "page-header-description">View our selection of courses below:</p>
            </Row>
            <Row className = "m-4 w-100 justify-content-center">
              <Col>
                <Card className = "card-modif">
                  <Card.Img variant="top" src={Prem} />
                  <Card.Body>
                    <Card.Title>Code.org (K-3rd)</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className = "card-modif">
                  <Card.Img variant="top" src={Sec} />
                  <Card.Body>
                    <Card.Title>Basic Scratch (K-3rd) Part 1</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className = "card-modif">
                  <Card.Img variant="top" src={Sec} />
                  <Card.Body>
                    <Card.Title>Basic Scratch (4-6th)</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className = "card-modif">
                  <Card.Img variant="top" src={Cad} />
                  <Card.Body>
                    <Card.Title>Beginner CAD(5-8th)</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className = "m-4 w-100 justify-content-center">
              <Col>
                <Card className = "card-modif">
                  <Card.Img variant="top" src={Blue} />
                  <Card.Body>
                    <Card.Title>Python (6-8th)</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className = "card-modif">
                  <Card.Img variant="top" src={Group} />
                  <Card.Body>
                    <Card.Title>Beginner CAD(5-8th)</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Row>
    );
}
