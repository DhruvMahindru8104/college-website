import React from 'react'
import { FaYoutube } from "react-icons/fa";

function AboutMiddle() {
    const youtubevideos=[
        {linkname:"https://www.youtube.com/embed/K4XsrrLEKf8?si=J2ZG6q5NtPvVhH4n"},
        {linkname:"https://www.youtube.com/embed/BxqgkyzOzE4?si=VdapK-beaGIA9PWv"},
        {linkname:"https://www.youtube.com/embed/57edm8WrCWA?si=W0egPa3uG3Z8rFqt"},
        {linkname:"https://www.youtube.com/embed/lPXkaKAKn9Y?si=JkD6yAqF8GiiNrfe"},
        {linkname:"https://www.youtube.com/embed/j8DgY4TKLq8?si=T8_kQ8uvOOA4XAGm"},
        {linkname:"https://www.youtube.com/embed/OLFhc3oAaxc?si=9_XtRz5kaNbwb9Uc"},
    ]
  return (
    <>
    <div className='text-4xl flex justify-center items-center gap-2 text-blue-400 mt-24'><FaYoutube/> Youtube Videos</div>
<div className='flex flex-wrap justify-center items-center gap-5 py-10'>
    {
        youtubevideos.map((i)=>{
           return (

               <iframe key={i.linkname} width="560" height="315" 
               src={i.linkname}
               title="YouTube video player" 
               frameborder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               allowfullscreen></iframe>
               
            )
         })
    } 

</div>
    </>
  )
}

export default AboutMiddle