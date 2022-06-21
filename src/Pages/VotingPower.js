import React from 'react'
import { votingPower } from '../data';
import {BsCurrencyDollar} from 'react-icons/bs'
import { useGlobalContext } from '../context';
import Message2 from '../Message2';

const VotingPower = () => {
   const {showMsg, showHideMsg} = useGlobalContext()
  return (
    <div className='da-center vtpw'>
      <h2 className="da-center ">Increase Your Voting Power</h2>
      <p className="light cel-p-up vtpw-p">Cheer Your Favorite Nominee To Success</p>
      {showMsg && <Message2/>}
      <article className="votepow">
         {votingPower.map((vtp)=>{
            const {id, votes, amount}= vtp;
            return(
               <section key={id} className='vtpw-single'>
                  <div className="vtpw-head">
                     <h2>{votes} <br/><span className="votes">votes</span></h2> 
                     
                  </div>
                  <h2 className='vtpw-amount'><BsCurrencyDollar/>{amount}</h2>
                  <button className='vtpw-btn' onClick={showHideMsg}>Buy</button>
               </section>
            )
         })}
      </article>
    </div>
  );
}

export default VotingPower