import React from 'react';
import {Card, Button} from "react-bootstrap";

export default function RFANewsCard(props){
    return (
        <a className = "card" style = {{textDecoration: "none", color: "black"}} target = "_blank" href = {props.link}>
            <Card style = {{transition: 200, backgroundColor: (props.color + props.opacity)}}>
                {/* <Card.Img variant="top" src /> */}
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Card.Body>
                    <Card.Title className = "text-center">{props.title}</Card.Title>
                </Card.Body>
            </Card>
        </a>
    );
}