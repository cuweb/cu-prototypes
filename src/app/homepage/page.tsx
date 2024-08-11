'use client'

// Sections & Blocks
import HomeStats from '@/blocks/Homepage/HomeStats'
import HomeNews from '@/blocks/Homepage/HomeNews'
import UpcomingEvents from '@/blocks/Homepage/UpcomingEvents'

// New Components for RDS
import CampusLife from '@/blocks/Homepage/CampusLife'
import Banner from '@/blocks/Homepage/Banner'
import OpenHouse from '@/blocks/Homepage/OpenHouse'
import RedWave from '@/blocks/Homepage/RedWave'
import BlackWave from '@/blocks/Homepage/BlackWave'
import AttendCarleton from '@/blocks/Homepage/AttendCarleton'
import Testimonials from '@/blocks/Homepage/Testimonials'
import { TextMedia } from '@/components/TextMedia/TextMedia'
import { PageHeader } from '@carletonuniversity/rds'

export default function Page() {
  return (
    <>
      <Banner />
      <OpenHouse />
      <HomeStats />
      <HomeNews />
      <RedWave />
      <AttendCarleton />
      <CampusLife />
      <BlackWave />
      <Testimonials />
      <UpcomingEvents />
    </>
  )
}
