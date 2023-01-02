import React from "react";
import { Form } from "react-bootstrap";

const Busqueda = (props) => {
    const handleKeyUp = (e) => {
        console.log(e.keyCode )
        if (e.keyCode === 13) {
            alert('Enter is pressed!');
        }
        // console.log("tecla presionada:",e.target.value);
      };
  return (
    <div>
      <Form className="d-flex" >  
          <Form.Control onChange={props.handleSubmit}
            type="search"
            placeholder="Buscar"
            className="me-2"
            aria-label="Search"
            onKeyUp={handleKeyUp}

          />
       
      </Form>
    </div>
  );
};

export default Busqueda;
