import React from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

export default function RFALongButton(props){
    return (
        <a className = "hyperlink" target = {props.target} href = {props.link}>
            <Row className = "long-button p-2 justify-content-center align-items-center">
                <h3 className = "BeVietnam-ExtraBold text-center">{props.title}</h3>
            </Row>
        </a>
    );  
}