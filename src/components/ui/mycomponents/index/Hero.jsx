import React from "react";
import Image from "next/image";
import { IoLogoInstagram } from "react-icons/io";
import { AspectRatio } from "../../aspect-ratio";
import { BackgroundBeams } from "../../background-beams";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Hero() {

  return (
    <>
      <div className="w-full rounded-md bg-transparent relative flex flex-col items-center justify-center antialiased">
      <section className="text-gray-600 dark:text-gray-300 body-font  ">
        <div className="container mx-auto flex px-2 md:px-5 py-2 md:py-24  md:flex-row flex-col-reverse gap-4 items-start justify-center ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-200">
              <span className=" text-blue-400 ">Shehzada Nand College</span>
              <br className="inline-block" />
              affiliated with Gndu
            </h1>
            <p className="mb-8 leading-relaxed">
            Shahzada Nand College, established in Amritsar in 1967, honors philanthropist Sh. Shahzada Nand Mehra. Affiliated with Guru Nanak Dev University and accredited by NAAC, it offers quality education with modern infrastructure, Wi-Fi, and air-conditioned labs. The college supports underprivileged students, focusing on empowerment and inclusivity.
            </p>
            {/* flex logo start */}
            <div className="flex justify-center items-center gap-4 z-10">
              <a href="https://www.facebook.com/people/Shahzada-Nand-College/100063889274735/?ref=br_rs" target="_blank"><FaFacebook size={40} /></a>
              <a href="https://www.youtube.com/@shahzadanandcollege5980" target="_blank"><FaYoutube size={40} /></a>
              <a href="https://www.instagram.com/shahzadanandcollege/?utm_medium=copy_link" target="_blank"><IoLogoInstagram size={40} /></a>
            </div>
            {/* flex logo end */}
          </div>

          <div className=" bg-blue-600   w-full md:w-1/2 rounded-2xl ">
            <AspectRatio ratio={2 / 1}>
              <Image // image component bhi hmesha aspect ratio k andr rhega
                src="/images/college.jpeg"
                alt="Photo by Drew Beamer"
                fill // ise hmesha fill rkho kyuki apect ratio k hisab se image apne aap ko fill rkhegi
                className="h-full w-full rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </section>
      <BackgroundBeams />
      </div>
    </>
  );
}
