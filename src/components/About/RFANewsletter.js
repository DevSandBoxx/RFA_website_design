import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import RFAHeader from '../RFAHeader';
import headerBlobYellow from '../../media/HeaderBlobs/HBLightYellow.png'; // add correct image here

export default function RFAAddWebpage(props){
    return (
      <div>
        <RFAHeader headerTextColor = {"#ffcc00"} image = {headerBlobYellow} title = {"Read more about our work!"} description = {"Read through our monthly newsletter to learn more about our work!"}/>
        <Container>
          <Row>
            <h3 className = "mt-4 BeVietnam-ExtraBold font-weight-bold">Read through our newsletters month by month down below.</h3>
          </Row>
          <Row>
            <Col>

            </Col>
          </Row>
        </Container>
      </div>
    );  
}
