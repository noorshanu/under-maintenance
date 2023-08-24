import SocialLinks from "./SocialLinks";
// import { BiImport } from "react-icons/bi";



function Footer() {

  

  return (
    <footer className="bg-main-bg relative z-20 pt-20">
      <div className="container-wrapper">
        <div className="mb-10 relative">
          <div className="static xl:absolute left-0 top-1/2 xl:-translate-y-1/2 flex flex-col xl:flex-row space-y-6 xl:space-y-0 items-center justify-between w-full mb-10 xl:mb-0">
            <img
              src="/images/logo.svg"
              className="w-[150px]"
              alt="deelance-logo"
            />

            <div className="flex items-center space-x-3 justify-end ">
              <SocialLinks />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex items-center justify-center relative -my-2 sm:-my-5 -mx-3 sm:-mx-5 flex-wrap">
                 <div className="text-[90%]">
              
              </div>
          

             
            </div>
          </div>
        </div>

    

        <div className="h-[1px] w-full bg-white opacity-20 mt-6 mb-10"></div>

        <p className="text-center text-grey2 text-sm lh-1_6">
          {"2023© DeeLance labs LTD | All Rights Reserved"} <br />
          {
            "Ajeltake Road , Reg no: 119495 , Marshall Islands, info@deelance.com"
          }
        </p>
      </div>
    </footer>
  );
}

export default Footer;
