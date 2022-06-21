import React, {useState} from "react";
import { useGlobalContext } from "../context";
import { exceptionalDA } from "../data";
import Message1 from "../Message1";

const ExceptionalDataA = () => {
  const {showMsg, showHideMsg}= useGlobalContext()
  const [value, setValue] = useState(1);
  const [sum, setSum]= useState(70)

  return (
    <section className="exceptional-da">
      <h2 className={`da-center home-box ${showMsg && "opacity"}`}>
        Exceptional Data Analyst
      </h2>
      <div className={`da-top ${showMsg && "opacity"}`}>
        <input
          className="home-input"
          type="text"
          placeholder="Nominee's Name"
        />
        <button className="home-search da-search">Search</button>
        <p className="da-center">
          You have<span className="num">{sum}</span> votes left
        </p>
      </div>
      {showMsg && <Message1 />}
      <div className={`da-all ${showMsg && "opacity"}`}>
        {exceptionalDA.map((da) => {
          const { Name, votes, plus, id } = da;
          return (
            <article key={id} className="da-article da-center">
              <div className="da-img"></div>
              <h3>{Name}</h3>
              <h4>{votes} votes</h4>
              <div className="da-vote">
                <div className="da-vote-first">
                  <img className="minus" src="../Minus.png" alt="minusSign" />{" "}
                  <span className="da-one">{value}</span> {plus}
                </div>
                <button className="da-btn-vote" onClick={showHideMsg}>
                  Vote
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ExceptionalDataA;
