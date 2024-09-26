import React from 'react'
import { AspectRatio } from '../../aspect-ratio'
import Image from 'next/image'

function Presidentmessage() {
  return (
    <>
    
<section className="text-gray-600 dark:text-gray-300 body-font">
  <div className="flex px-5 py-2 md:py-24 md:flex-row flex-col items-start gap-3 justify-center ">
  <div className='  md:w-1/4 w-full drop-shadow-2xl dark:drop-shadow-[0_35px_35px_rgba(0,112,255,0.5)]'> {/* remember images ka sath kaam krte wakt sirf width hi dena hai , height dene ki jrurat nhi( height aspect ratio apne aap adjust kr lega ) and remember width and height hogi vo aspect ratio k parent div mein deni hai*/}
  <AspectRatio ratio={10 / 10} > {/* aspect ratio ka ek parent hmesha hoga . and hmesha isi aspect mein rhegi image mtlb width 16 hogi and height 9 hogi chahe width jo mrzi hi kyu na ho  */}
  <Image // image component bhi hmesha aspect ratio k andr rhega 
    src='/images/president.png'
    alt="Photo by Drew Beamer"
    fill // ise hmesha fill rkho kyuki apect ratio k hisab se image apne aap ko fill rkhegi 
    className="h-full w-full rounded-md object-cover"
  />
</AspectRatio>
</div>
    <div className="md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
      <h1 className="title-font sm:text-4xl text-3xl  mb-4 font-medium text-blue-400 ">
        President Message
      </h1>
      <p className="mb-8 leading-relaxed  ">
      The seed sown by our forefathers has blossomed into a beautiful fruit tree. Keep nourishing it with hard work and sincerity. I took the initiative to introduce co-education as being the need of present day social and professional setup. Both boys and girls must learn to coexist and shoulder their responsibilities as responsible citizens.


      </p>
    
      <div className="flex w-full md:justify-start justify-center items-end">
       
      </div>
      <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
      (Mrs. Sushma Mehra)
      </p>

    </div>
  </div>
</section>
    </>
  )
}

export default Presidentmessage