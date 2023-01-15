import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <Link to={`/detalles/${props.id}`} style={{ textDecoration: 'none' ,color: "black"}}>
    <Card className='border-0' style={{ width: '100%' }}>
      <Card.Img variant="top" src={props.dirImage}  />
      <Card.Body style={{backgroundColor: "rgb(8,15,40)",color: "white"}}>
        <Card.Title>{props.titulo}</Card.Title>

      </Card.Body>
    </Card>
    </Link>
  );
}

export default Cards;
