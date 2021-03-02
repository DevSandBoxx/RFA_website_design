import React from 'react';
import {Container, Row} from "react-bootstrap";
import RFAHeader from '../RFAHeader';
import headerBlobYellow from '../../media/HeaderBlobs/HBLightYellow.png'; // add correct image here

export default function RFAAddWebpage(props){
    return (
      <div>
        <RFAHeader headerTextColor = {"#ffcc00"} image = {headerBlobYellow} title = {"Get to Know our Team!"} description = {"Get to know the faces behind Robotics for All!"}/>
      </div>
    );
}
