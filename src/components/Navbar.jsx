import React from 'react'
import SocialLinks from './SocialLinks'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='container-wrapper text-center'>
          <div className='flex justify-between'>
            <img src="images/logo.svg" alt="" className='h-[30px] mx-0 sm:mx-0 mt-4' />
            <div className="flex items-center  gap-2 sm:gap-0  justify-between lg:justify-normal lg:space-x-2 xl:space-x-3  mt-5 lg:mt-0">
                <SocialLinks />
              </div>

          </div>
        </div>
    </div>
  )
}

export default Navbar