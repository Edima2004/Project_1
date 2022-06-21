import React from "react";
import { futureEditions } from "../data";

const FutureEditions = () => {
  return (
    <section className="exceptional-da fedit">
      <h2 className="da-center">Future Editions</h2>
      <p className="da-center">Nominate candidates for future editions</p>
      <div className="vc-section">
        {futureEditions.map((future) => {
          const { edition, id } = future;
          return (
            <article key={id} className="da-article da-center vc-article fearticle">
              <div>
                <img src="../africa.png" alt="name" />
              </div>
              <h3>{edition}</h3>
               <button className=" da-search fedit-btn">Nominate</button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FutureEditions;
