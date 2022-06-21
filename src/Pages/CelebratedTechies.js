import React from "react";
import { celebratedTechies } from "../data";

const CelebratedTechies = () => {
  return (
    <div className="exceptional-da da-center ">
      <h2 className="da-center ">Celebrated Techies</h2>
      <p className="light cel-p-up">A look into some of our past winners</p>
      <article className="cel">
        {celebratedTechies.map((ctech) => {
          const { id, Name, role } = ctech;
          return (
            <div className="cel-each" key={id}>
              <div className="container"></div>
              <h3>{Name}</h3>
              <p className="cel-p-down">{role}</p>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default CelebratedTechies;
