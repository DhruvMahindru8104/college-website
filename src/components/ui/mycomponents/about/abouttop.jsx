'use client'
import React from 'react'
import { AspectRatio } from '../../aspect-ratio'
import Image from 'next/image'
import { AiOutlineProfile } from "react-icons/ai";
import { motion } from 'framer-motion';

function AboutTop() {
  return (
    <>
<div className='flex flex-col justify-center items-center  '>
  <div className='flex justify-center items-center gap-2 text-3xl my-5 text-blue-400'><AiOutlineProfile/> Our College Profile</div>
<motion.div className=' bg-blue-500 flex flex-col w-full md:w-[75%]  '
  initial={{opacity:0,x:40}}
  whileInView={{opacity:1,x:0}}
  transition={{ease:'easeInOut',duration:0.6}}
> 
  <AspectRatio ratio={16 / 9} >
  <Image // image component bhi hmesha aspect ratio k andr rhega 
    src='/images/gallery/gallery2.jpg'
    alt="Photo by Drew Beamer"
    fill // ise hmesha fill rkho kyuki apect ratio k hisab se image apne aap ko fill rkhegi 
    className="h-full w-full rounded-md object-cover"
  />
</AspectRatio>
</motion.div>


<motion.div className='px-2 leading-8 text-xl md:text-3xl mt-4 w-full md:w-[75%]'
  initial={{opacity:0,x:-40}}
  whileInView={{opacity:1,x:0}}
  transition={{ease:'easeInOut',duration:0.6}}
>
  Shahzada Nand College was established at Amritsar in 1967. Since then it has been providing quality education to all sections of society. The college is affiliated to Guru Nanak Dev University and it is accredited by National Assessment and Accreditation Council (NAAC).

College has spacious and green campus. It is well equipped to cater all academic needs. Keeping pace with the changing scenario of education, it keeps updating its courses, infrastructure, physical as well as digital. The college has Wi-Fi and air-conditioned computer labs. The college faculty is highly qualified and experienced.

Besides academics, college also provides opportunities for young talents and extra-curricular activities. College has consistently scored top positions in Youth Festivals conducted by Guru Nanak Dev University.
</motion.div>
</div>
    </>
  )
}

export default AboutTop