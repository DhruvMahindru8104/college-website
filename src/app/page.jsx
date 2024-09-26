import React from 'react'
import Hero from '@/components/ui/mycomponents/index/Hero'
import Principalmessage from '@/components/ui/mycomponents/index/principalmessage'
import Presidentmessage from '@/components/ui/mycomponents/index/Presidentmessage'
import { Separator } from '@/components/ui/separator'
import Courses from '@/components/ui/mycomponents/index/Courses'
import Activity from '@/components/ui/mycomponents/index/Activities'
function page() {
  return (
    <>
    <Hero/>
    {/* <Separator/> */}
    <Presidentmessage/>
    {/* <Separator/> */}
    <Principalmessage/>
    {/* <Separator/> */}
    <Courses/>
    <Activity/>
    </>
  )
}

export default page

