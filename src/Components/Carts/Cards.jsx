import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { ContextoBackground } from '../../Contexto/ContextoBackground';

function Cards(props) {
  // console.log("dentro de la card"+props.id)
  // console.log("dentro de la card"+props.key)

  //llamamos el contexto y le pasamis el nuevo fondo
  // const ctx = useContext(AppContextO);
  const ctx = useContext(ContextoBackground);
  // console.log(ctx.appTheme);
 
  return (
    <Link to={`/detalles/${props.id}`} style={{ textDecoration: 'none' ,color: "black"}}>
    <Card className='border-0' style={{ width: '100%' }}>
      <Card.Img variant="top" src={props.dirImage}  />
      <Card.Body style={{backgroundColor: "rgb(8,15,40)",color: "white"}}>
        <Card.Title>{props.titulo}</Card.Title>
        {/* <Card.Text>
         titulo={titulo} dirImage={}
       Titulo
        </Card.Text>
        <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </Link>
  );
}

export default Cards;