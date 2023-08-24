import React from 'react'
import './Popup.css'
function CopyText({ setIsModal }) {
  return (
    <div className="modalBackground">
    <div className="modalContainer">
      <div className=" flex justify-end items-center mt-3 ">
        
        <button
          onClick={() => {
            setIsModal(false);
          }}
          className="text-black text-[24px] font-[400]"
        >
          X
        </button>
      </div>
      <div className="text-center  ">
      <h2 className="mb-10px lh-1 text-[28px] text-black font-[700]">
          Success!
        </h2>
        <h1 className=' mb-4'>Tweet content is copied to your clipboard! You can log into your twitter account, paste the text and tweet to receive #Dlance.</h1>
        <a href="https://twitter.com/intent/tweet?text=Join%20me%20in%20experiencing%20the%20power%20of%20decentralization%20on%20the%20%40Deelance_com%20%20betanet!%20%20%20%20%20%0A%0AGet%205%20%23Dlance%20now%3A%20https%3A%2F%2Ffaucet.Deelance.com%2F%20%20%20%20%20%0A%0AMy%20address%20is%3A%200x0000000000000000000000000000000000000000%20%0A%0A%23Deelance%20%23crypto%20%23Dlance%20%23Blockchain" target="_blank" rel="noreferrer"   onClick={() => {
            setIsModal(false);
          }} className="bg-[#3f51b8] rounded-xl border-0 mx-auto px-11 py-2 mt-5 text-white capitalize font-medium  ">Okay</a>
        
      </div>
    </div>
  </div>
  )
}

export default CopyText