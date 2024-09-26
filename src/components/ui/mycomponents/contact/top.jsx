import React from 'react'
import Image from 'next/image'
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AspectRatio } from '../../aspect-ratio'
import { AiTwotoneMail } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa6";

function Top() {
  return (
    <>
  <div className="flex flex-col md:flex-row justify-center  p-5 gap-5 py-24 ">
    <div className='  flex flex-col w-full md:w-1/2 drop-shadow-2xl dark:drop-shadow-[0_35px_35px_rgba(0,112,255,0.5)]  '> {/* remember images ka sath kaam krte wakt sirf width hi dena hai , height dene ki jrurat nhi( height aspect ratio apne aap adjust kr lega ) and remember width and height hogi vo aspect ratio k parent div mein deni hai*/}
  <AspectRatio ratio={16 / 9} > {/* aspect ratio ka ek parent hmesha hoga . and hmesha isi aspect mein rhegi image mtlb width 16 hogi and height 9 hogi chahe width jo mrzi hi kyu na ho  */}
  <Image // image component bhi hmesha aspect ratio k andr rhega 
    src='/images/gallery/gallery1.jpg'
    alt="Photo by Drew Beamer"
    fill // ise hmesha fill rkho kyuki apect ratio k hisab se image apne aap ko fill rkhegi 
    className="h-full w-full rounded-md object-cover"
  />
</AspectRatio>
</div>
    
    <div className=" flex  flex-col justify-start  w-full md:w-1/2 ">
      <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
         Shahzada Nand College Contact Page
      </h1>
      <div className="flex justify-start items-center gap-4 ">
              <a href="https://www.facebook.com/people/Shahzada-Nand-College/100063889274735/?ref=br_rs" target="_blank"><FaFacebook size={40} /></a>
              <a href="https://www.youtube.com/@shahzadanandcollege5980" target="_blank"><FaYoutube size={40} /></a>
              <a href="https://www.instagram.com/shahzadanandcollege/?utm_medium=copy_link" target="_blank"><IoLogoInstagram size={40} /></a>
     </div>
     {/* email and phone start */}
     <div className='flex-col justify-start items-center mt-3 gap-2 '>
        <div className='flex gap-2 items-center text-xl text-blue-400'><AiTwotoneMail/><a href="mailto:shahzadanand@yahoo.com">shahzadanand@yahoo.com</a></div>
        <div className='flex gap-2 items-center text-xl  text-blue-400'><FaPhoneVolume/>+91 183 2502423</div>
        <div className='flex gap-2 items-center text-xl text-blue-400'><FaPhoneVolume/>+91 183 2502690</div>
        
     </div>
     {/* email and phone end */}
    
      
    </div>
  </div>
    </>
  )
}

export default Top