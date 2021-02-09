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

export default function RFAIndividuals(props){
    return (
      <Row className = "header-blobs">
          <Container className = "d-flex align-self-end">
            <Row className = "m-4 w-100 justify-content-center">
              <h1 className = "page-header">Take a Class with us Today!</h1>
              <p className = "page-header-description">Learn from any of our 12 levels of curriculum and join the community of 1027 students we've taught!</p>
              <h1 className = "page-header">COURSE OVERVIEWS</h1>
              <p className = "page-header-description">Course Enrollments for Spring courses starting March 15th are open until March 2nd, 2020!</p>
              <p className = "page-header-description">Since July 2020, Robotics for All has provided online courses for students from Kindergarten to 8th grade. All classes run for eight weeks and have virtual hour-long meetings with teachers twice a week!</p>
              <p className = "page-header-description">Spring courses will run from the week of March 15th to the week of May 3rd. All courses have pre-class orientations on the week of March 8th. Current class time offerings for each course are:</p>
              <p className = "page-header-description">Mondays/Thursdays 2 pm Pacific/5 pm Eastern Time
Mondays/Thursdays 4 pm Pacific/7 pm Eastern Time
Tuesdays/Fridays 4 pm Pacific/7 pm Eastern Time
Tuesdays/Fridays 6 pm Pacific/9 pm Eastern Time</p>
              <p className = "page-header-description">Class times may vary for different courses due to enrollments and some class times may not run if there are not enough enrollments. ​</p>
              <p className = "page-header-description">View our detailed syllabi below:​</p>
            </Row>
          </Container>
          <Container className = "d-flex align-self-end">
            <Row className = "m-4 w-100 justify-content-center">
              <Col>
                <Card className = "card-modif">
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
              <Col md={{ span: 10, offset: 5 }}><Button variant="primary">Enroll in a Course Today!</Button></Col>
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
