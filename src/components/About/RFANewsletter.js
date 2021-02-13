import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import RFAHeader from '../RFAHeader';
import RFANewsCard from '../RFANewsCard';
import RFALongButton from '../RFALongButton';
import headerBlobYellow from '../../media/HeaderBlobs/HBLightYellow.png'; // add correct image here

export default function RFANewsletter(props){
    return (
      <div>
        <RFAHeader headerTextColor = {"#ffcc00"} image = {headerBlobYellow} title = {"Read more about our work!"} description = {"Read through our monthly newsletter to learn more about our work!"}/>
        <Container>
          <Row>
            <h3 className = "mt-4 BeVietnam-ExtraBold font-weight-bold">Read through our newsletters month by month down below.</h3>
          </Row>
          <br/>
          <Row>
            {[
              {
                date: "November 2020",
                pdfLink: "https://www.urbandictionary.com/define.php?term=dodo%20head",
              },
              {
                date: "December 2020",
                pdfLink: "https://www.urbandictionary.com/define.php?term=dodo%20head",
              },
              {
                date: "January 2021",
                pdfLink: "https://www.urbandictionary.com/define.php?term=dodo%20head",
              },
              {
                date: "February 2021",
                pdfLink: "https://www.urbandictionary.com/define.php?term=dodo%20head",
              }

            ].map(newsletter => (
              <Col key = {newsletter.date} md>
                <RFANewsCard key = {newsletter.pdfLink} title = {newsletter.date} link = {newsletter.pdfLink}
                  color = {"#ffcc00"} opacity = {"80"}/>
                <br/>
              </Col>
            ))}
          </Row>

          {/* Read Previous News Button */}
          <RFALongButton title = {"Read Previous Newsletters"} backgroundColor = {"#ffcc00"} link = "https://www.google.com/"/>
          <br>
          </br>
          
        </Container>
      </div>
    );  
}
