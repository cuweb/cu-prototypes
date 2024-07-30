'use client'
// Import from RDS
import { ButtonGroup, Button } from '@carletonuniversity/rds'

// Internal Components
import PlaceHolder from '@/app/homepage/includes/PlaceHolder'
import HomeStats from '@/app/homepage/includes/HomeStats'
import HomeNews from '@/app/homepage/includes/HomeNews'

// Import Data Arrays
import FullBanner from '@/components-homepage/FullBanner'

export default function Page() {
  return (
    <>
      <FullBanner title="This is a demo for new components and layouts">
        <ButtonGroup>
          <Button title="Apply Now" />
          <Button color="grey" title="Request Information" />
        </ButtonGroup>
      </FullBanner>
      <PlaceHolder name="Announcement / Boxed Ad" />
      <HomeStats />
      <HomeNews />
      <PlaceHolder name="Red Wave" maxWidth="full" />
    </>
  )
}
