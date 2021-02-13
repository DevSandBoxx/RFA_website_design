import React from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

export default function RFALongButton(props){
    return (
        <a className = "long-button" style = {{textDecoration: "none", color: "black"}} target = {props.target} href = {props.link}>
            <Row style = {{transition: 200, backgroundColor: props.backgroundColor}} className = "long-button p-2 justify-content-center align-items-center">
                <h3 className = "BeVietnam-ExtraBold text-center">{props.title}</h3>
            </Row>
        </a>
    );  
}