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
  const inlineContentStyles = {
    flex: `0 0 60%`,
  }

  const inlineImageStyles = {
    backgroundImage: `url("https://picsum.photos/id/431/600/400")`,
    backgroundPosition: `50% 50%`,
    transform: `scale(1.0)`,
  }

  const textMediaClasses = 'gap-5 max-w-7xl'

  return (
    <>
      <Banner />
      <OpenHouse />
      <HomeStats />
      <HomeNews />

      <div
        className={`cu-textmedia cu-component flex flex-col md:flex-row mx-auto ${textMediaClasses}`}
      >
        <div className="cu-textmedia-content" style={inlineContentStyles}>
          <PageHeader as="h2" header="This is the content column" size="md" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            cursus euismod luctus. Duis congue massa nec quam pellentesque
            pellentesque. Donec mattis ipsum eget nisi malesuada pulvinar.
            Integer ut nisi vitae nibh maximus imperdiet. Cras fermentum nulla
            elementum odio aliquam interdum. Vestibulum vitae ornare massa, at
            lacinia velit. Morbi vel libero justo. Nam vitae ante a sapien
            euismod rhoncus.
          </p>
        </div>
        <div
          className="cu-textmedia-aside flex-1 rounded-lg border-8 border-cu-black-100"
          style={inlineImageStyles}
        />
      </div>

      <RedWave />
      <AttendCarleton />
      <CampusLife />
      <BlackWave />
      <Testimonials />
      <UpcomingEvents />
    </>
  )
}
