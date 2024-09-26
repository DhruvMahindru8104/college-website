'use client'
import React from 'react'
import { FaBuildingCircleCheck } from "react-icons/fa6";
import Image from 'next/image';
import { BackgroundGradient } from '../../background-gradient';
import { AspectRatio } from '../../aspect-ratio';


function Placed() {
    const students=[
        {name:'Rahul',placed_at:'Tcs',pic:'/images/gallery/gallery1.jpg'},
        {name:'Ashu',placed_at:'infosys',pic:'/images/gallery/gallery2.jpg'},
        {name:'Samarth',placed_at:'Bajaj Finance',pic:'/images/gallery/gallery3.jpeg'},
        {name:'Rinku',placed_at:'Gndu',pic:'/images/heroimage.jpg'},
        {name:'Ishan',placed_at:'Reliance',pic:'/images/mm.jpeg'},
        {name:'Kartik',placed_at:'Amazon',pic:'/images/sawa.jpeg'},
        {name:'Harpreet',placed_at:'Infosys',pic:'/images/la.jpeg'},
    ]
  return (
    <>
    <div className='flex justify-center text-5xl items-center font-semibold text-blue-400 mt-5 mb-16 gap-2'><FaBuildingCircleCheck/> Our Placed Students</div>
    
    <div className='flex justify-center flex-wrap gap-10'>
  {
    students.map((i)=>{
        return(
    <div className='w-full md:w-1/3 '>
    <BackgroundGradient className="rounded-[22px]   p-5 sm:p-10 bg-white dark:bg-zinc-900">
    <div className=' bg-blue-600flex flex-col w-full '> {/* remember images ka sath kaam krte wakt sirf width hi dena hai , height dene ki jrurat nhi( height aspect ratio apne aap adjust kr lega ) and remember width and height hogi vo aspect ratio k parent div mein deni hai*/}
<AspectRatio ratio={10 / 10} > {/* aspect ratio ka ek parent hmesha hoga . and hmesha isi aspect mein rhegi image mtlb width 16 hogi and height 9 hogi chahe width jo mrzi hi kyu na ho  */}
<Image // image component bhi hmesha aspect ratio k andr rhega 
  src={i.pic}
  fill // ise hmesha fill rkho kyuki apect ratio k hisab se image apne aap ko fill rkhegi 
  className="h-full w-full rounded-md object-cover"
  />
</AspectRatio>
</div>
      <p className="text-2xl font-bold text-black mt-4 mb-2 dark:text-neutral-200 ">
        {i.name}
      </p>

      <p className="text-xl text-gray-300">
      Our College Student {i.name} Is Placed At <span className='font-extrabold'>{i.placed_at}</span>
      </p>
     
    </BackgroundGradient>
  </div>
        )
    })
  }
    </div>
    </>
  )
}

export default Placed