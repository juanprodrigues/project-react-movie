import React from "react";
import { mockTest } from "../../mock/mockTest";

const Nosotros = () => {
  return (
    <div>
      {mockTest.results.map((item) => {

        <img
          src={
            "https://image.tmdb.org/t/p/w185_and_h278_bestv2/" +
            item.poster_path
          }
          height="45px"
          alt={item.original_title}
        />;
      })}
    </div>
  );
};

export default Nosotros;
