import React from "react";
import { useState } from "react";
import CopyText from '../components/Popups/CopyText'
import BlackFancyPaper from "../components/BlackFancyPaper";
function Faq() {
  const [isModal, setIsModal] = useState(false);
  const closePOp =(e) =>{
    e.preventDefault();
    setIsModal(true)
   
}
  return (
    <>
    <section className=" mt-12">
      <div className="container-wrapper">
        <BlackFancyPaper>
        <div className="rounded-[20px] mx-auto max-w-3xl px-8 py-5">
          <h1 className="text-center text-2xl sm:text-4xl font-[600] mb-4 text-[#ffffff] uppercase">Faq</h1>

          <div className="content">
            <h1 className=" text-base font-semibold text-white">How does faucet work?</h1>
            <p className="text-[13px] py-2 text-white">
            To prevent malicious actors from exhausting all available $Dlance, requests are tied to Twitter accounts. Anyone having a Twitter account may request funds within the permitted limits.
            </p>

            <div>
                <h1 className=" text-base font-semibold text-white">Faucet instructions:</h1>

                <p className="text-white text-[13px] sm:text-[15px] py-1">1. Click this link: <button type='submit' onClick={closePOp}className="text-[#499bff] font-semibold"  >Tweet Now</button></p>
                <p className=" text-white text-[13px] sm:text-[15px] py-1">2. Twitter will automatically open with a pre-populated tweet. Replace the blank address: 0x0000000000000000000000000000000000000000, with your account address and post the tweet.</p>
                <p className=" text-white text-[13px] sm:text-[15px] py-1">3. Click on the tweet to visit its particular tweet URL.</p>
                <p className=" text-white text-[13px] sm:text-[15px] py-1">4. Copy the tweet URL.</p>
                <p className=" text-white text-[13px] sm:text-[15px] py-1">5. Paste the copied URL into the Deelance 1.0 faucet page and request $Dlance.</p>
                <p className=" text-white text-[13px] sm:text-[15px] py-1">6. A pop-up message will appear if the request is successful and 5 Dlance will arrive in your wallet shortly.</p>

            </div>
          </div>
        </div>
        </BlackFancyPaper>
      </div>
    </section>
       {isModal && <CopyText setIsModal={setIsModal }/>}
       </>
  );
}

export default Faq;
