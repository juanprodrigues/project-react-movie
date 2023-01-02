import { useEffect } from "react";
import { NavDropdown } from "react-bootstrap/";
import { Link } from "react-router-dom";

import "./misEstilos.css";
export const Dropdown = (props) => {
  // let aux = items[0]
  // console.log(Object.values(items));

  // console.log(props.items.genres[0].name)
  // let aux = [];
  // for (let i = 0; i < 19; i++) {
  //   let auxInt = [];
  //   console.log(items[i].name);
  //   // auxInt.push(items[i].name);
  //   // auxInt.push(items[i].id);
  //   // aux.push(auxInt);
  // }
  // let mostrar= aux.map((item) => (
  //   <NavDropdown.Item >
  //     {item[1]}
  //   </NavDropdown.Item>
  // ))
  // console.log(items)
  // let aux=JSON.stringify(items.genres)
  // console.log(typeof(aux))

  // const [first, setfirst] = useState(items)
  // useEffect(() => {

  //   console.log("-->", items);
  // let tamArray = items.genres.length;

  // },[]);
  // let aux2 =  JSON.parse(aux);

  //   console.log(aux2)

  // items.genres[0].map((item) => (
  //   console.log(item)

  // ))

  // let claves = Object.keys(items.genres); // claves = ["nombre", "color", "macho", "edad"]
  //   console.log(claves);
  // for(let i=0; i< claves.length; i++){
  //   let clave = claves[i];
  //   console.log(items.genres[clave]);
  // }
  // items.map((item) => (console.log(item)))

  // {items.map((item) => (

  //   console.log(item)

  // ))}



  // <Link to={`/detalles/${props.id}`} style={{ textDecoration: 'none' ,color: "black"}}>
  // <Card className='border-0' style={{ width: '100%' }}>
  //   <Card.Img variant="top" src={props.dirImage}  />
  //   <Card.Body style={{backgroundColor: "rgb(8,15,40)",color: "white"}}>
  //     <Card.Title>{props.titulo}</Card.Title>

  //   </Card.Body>
  // </Card>
  // </Link>

  return (
    <>
      

      <NavDropdown title={props.title} id="basic-nav-dropdown">
        {props.items.genres.map((item) => (
          <Link to={`/genero/${item.id}`} style={{ textDecoration: 'none' ,color: "black"}}>
          <NavDropdown.Item key={item.id} href={`/genero/${item.id}`}>
            {item.name}
          </NavDropdown.Item>
          </Link>
        ))}
      </NavDropdown>

    </>
  );
};
