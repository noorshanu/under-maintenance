import React from 'react'

function Error({ setIsModal }) {
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
          Error!
        </h2>
        <h1>Text area for error msg</h1>
        <button   onClick={() => {
            setIsModal(false);
          }} className="bg-[#3f51b8] rounded-xl border-0 mx-auto px-11 py-2 mt-5 text-white capitalize font-medium  ">Okay</button>
        
      </div>
    </div>
  </div>
  )
}

export default Error