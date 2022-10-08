import React from 'react';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  console.log("dentro de la card"+props.titulo)
  return (
    <Card className='border-0' style={{ width: '100%' }}>
      <Card.Img variant="top" src={props.dirImage} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        {/* <Card.Text>
         titulo={titulo} dirImage={}
       Titulo
        </Card.Text>
        <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Cards;