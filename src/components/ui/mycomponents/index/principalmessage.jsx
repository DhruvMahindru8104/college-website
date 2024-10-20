'use client'
import React from 'react'
import { AspectRatio } from '../../aspect-ratio'
import Image from 'next/image'
import { motion } from 'framer-motion'
function Principalmessage() {
  return (
    <>
<section className="text-gray-600 dark:text-gray-300 body-font overflow-hidden">
  <div className=" flex px-5 py-2 md:py-24 md:flex-row-reverse flex-col items-start gap-3 justify-center">
  <motion.div className='  md:w-1/3 w-full drop-shadow-2xl dark:drop-shadow-[0_35px_35px_rgba(0,112,255,0.5)] shadow-blue-400 ' 
            initial={{opacity:0,x:40}}
            whileInView={{opacity:1,x:0}}
            transition={{ease:'easeInOut',duration:0.6}}> {/* remember images ka sath kaam krte wakt sirf width hi dena hai , height dene ki jrurat nhi( height aspect ratio apne aap adjust kr lega ) and remember width and height hogi vo aspect ratio k parent div mein deni hai*/}
  <AspectRatio ratio={10 / 10} > {/* aspect ratio ka ek parent hmesha hoga . and hmesha isi aspect mein rhegi image mtlb width 16 hogi and height 9 hogi chahe width jo mrzi hi kyu na ho  */}
  <Image // image component bhi hmesha aspect ratio k andr rhega 
    src='/images/principal.png'
    alt="Photo by Drew Beamer"
    fill // ise hmesha fill rkho kyuki apect ratio k hisab se image apne aap ko fill rkhegi 
    className="h-full w-full rounded-md object-cover"
  />
</AspectRatio>
</motion.div>
    <motion.div className=" md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center" 
            initial={{opacity:0,x:-40}}
            whileInView={{opacity:1,x:0}}
            transition={{ease:'easeInOut',duration:0.6}}>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-400 ">
        Principal Message
      </h1>
      <p className="mb-8 leading-relaxed">
      Shahzada Nand College Amritsar, affiliated with Guru Nanak Dev University, is a NAAC-accredited co-educational institute providing quality higher education. Under the dynamic leadership of Mrs. Sushma Mehra, the college excels in infrastructure, student support, and a well-rounded learning environment. We offer diverse courses, from traditional to skill-based programs, along with co-curricular activities like NCC, NSS, music, and sports, ensuring students are equipped with the skills to succeed in a competitive world. Our committed faculty continually adapt the teaching-learning process to prepare outstanding future professionals.     
        
      </p>
    
      <div className="flex w-full md:justify-start justify-center items-end">
       
      </div>
      <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
      (Dr. Reena Talwar)
      </p>

    </motion.div>
  </div>
</section>
    </>
  )
}

export default Principalmessage