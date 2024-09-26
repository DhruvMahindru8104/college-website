"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaUniversity } from "react-icons/fa";



export default function Activities() {
    const activity = [
        {
          name: "Dr Reena Talwar Join As Principal",
          pic:'/images/join.jpeg'
        },
        {
          name: "Pledge On Swachhta Hi Sewa",
          pic:'/images/sawa.jpeg'
        },
        {
          name: "Seminar On Mental Health",
          pic:'/images/seminar.jpeg'
        },
        {
          name: "Meri Mata Mera Desh",
          pic:'/images/mm.jpeg'
        },
        {
          name: "Legal Awareness On Drug Abuse",
          pic:'/images/la.jpeg'
        },
      ];
  return (
    <>
    <div className="text-blue-400 text-center text-2xl md:text-3xl py-20 flex flex-row-reverse justify-center items-center gap-1" >Our College Activities <FaUniversity/></div>
    <div className="w-full flex justify-center flex-wrap gap-4 ">
{
    activity.map((i)=>{
        return(
          <CardContainer key={i.name} className="inter-var" containerClassName={'!py-2'}>
      <CardBody
        className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
     
          {i.name}

        </CardItem>
      
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={i.pic}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
      
      </CardBody>
    </CardContainer>)
    })
}
    
</div>
    </>
  );
}
