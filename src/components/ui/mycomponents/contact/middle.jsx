import React from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function Middle() {
  return (
        <>
        <div className="text-3xl  antialiased   py-24 text-blue-400 flex gap-2 justify-center"> <FaLocationDot/> College Location</div>
     <section className="text-gray-600 body-font relative  ">
  <div className="absolute inset-0 ">
  
    <iframe
     className="px-4"
      frameBorder="0"
      height="100%"
      marginHeight="0"
      marginWidth="0"
      scrolling="no"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24399.72332261911!2d74.84664357351843!3d31.64450519060832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964a405b5dc29%3A0x232231b09c1d0d46!2sShahzada%20Nand%20College!5e0!3m2!1sen!2sus!4v1727264541289!5m2!1sen!2sus"
      style={{
        filter: 'grayscale(1) contrast(1.2) opacity(0.4)'
      }}
      title="map"
      width="100%"
    />
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
        Shehzada Nand College
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
      JVW8+PW3, Maqbool Rd, Green Avenue, Amritsar, Punjab 143001, India
      </p>

   
      
    </div>
  </div>
</section>
      </>
  );
}
