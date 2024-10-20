'use client'
import React from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { FaBook } from "react-icons/fa6";
import { motion } from 'framer-motion';

  
function Courses() {
    const coursedetails=[
        {
            name: "Bachelor of Arts (B.A.) with various projects",
            duration: "4 years",
            department: "Arts and Humanities",
            coursetype:'UnderGraduate'
          },
        {
            name: "Bachelor of Science (B.Sc.) in Economics",
            duration: "4 years",
            department: "Commerce",
            coursetype:'UnderGraduate'
          },
        {
            name: "Bachelor of Computer Application (BCA)",
            duration: "4 years",
            department: "Computer Science",
            coursetype:'UnderGraduate'
          },
        {
            name: "Bachelor of Commerce (B.Com)",
            duration: "4 years",
            department: "Commerce",
            coursetype:'UnderGraduate'
          },
        {
            name: "M.Sc (Computer Science)",
            duration: "2 years",
            department: "Computer Science",
            coursetype:'PostGraduate'
          },
        {
            name: "PGDCA",
            duration: "1 year",
            department: "Computer Science",
            coursetype:'PostGraduate'
          },
        {
            name: "PG Diploma in Cosmetology",
            duration: "1 year",
            department: "Cosmetology",
            coursetype:'PostGraduate'
          },
        {
            name: "Diploma in Cosmetology",
            duration: "2 year",
            department: "Cosmetology",
            coursetype:'Diploma'
          },
        
    ]
  return (
    <>
    <div className='py-24 '>

    <div className='text-4xl text-center text-blue-400 mb-4 flex flex-row-reverse justify-center items-center gap-2'>Our Courses <FaBook size={30}/></div>
    <motion.section className='w-full  flex justify-center text-lg'
    initial={{opacity:0,scale:0.8}}
    whileInView={{opacity:1,scale:1}}

    transition={{ease:'easeInOut',duration:1}}
    >
    <div className=' w-full md:w-[75%]  '>
    <Table >
  <TableHeader >
    <TableRow>
      <TableHead className="w-full">Name</TableHead>
      <TableHead>Duration</TableHead>
      <TableHead >Department</TableHead>
      <TableHead >Course type</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
   {
    coursedetails.map((i)=>{
        return(
            <TableRow key={i.name}>
            <TableCell className="font-medium w-full">{i.name}</TableCell>
            <TableCell>{i.duration}</TableCell>
            <TableCell >{i.department}</TableCell>
            <TableCell >{i.coursetype}</TableCell>
          </TableRow>
        )
    })
   }
  
  </TableBody>
</Table>
    </div>
    </motion.section>
    </div>

    </>
  )
}

export default Courses