import React from "react";
import { votingCategory } from "../data";

const VotingCategories = () => {
  return (
    <section className="exceptional-da">
      <h2 className="da-center">Voting Categories</h2>
      <div className="da-top home-box">
        <input
          className="home-input"
          type="text"
          placeholder="Nominee's Name"
        />
        <button className="home-search da-search">Search</button>
      </div>
      <div className="vc-section">
         
         {votingCategory.map((votingCategory) => {
           const { Name, id } = votingCategory;
           return (
             <article key={id} className="da-article da-articlenew da-center vc-article">
               <div>
                 <img src='../icon.png' alt="name" />
               </div>
               <h3>{Name}</h3>
               <aside className="vc-arrow"><img src="../next-arrow.png" alt="" /></aside>
            
          </article>
        );
      })}
      </div>
    </section>
  );
};

export default VotingCategories;
