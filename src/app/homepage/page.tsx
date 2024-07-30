'use client'
// Import from RDS
import { ButtonGroup, Button } from '@carletonuniversity/rds'

// Internal Components
import PlaceHolder from '@/app/homepage/includes/PlaceHolder'
import HomeStats from '@/app/homepage/includes/HomeStats'
import HomeNews from '@/app/homepage/includes/HomeNews'

// New Components for RDS
import FullBanner from '@/app/homepage/components/FullBanner'

export default function Page() {
  return (
    <>
      <FullBanner title="You've found the prototype for the new Carleton University homepage!">
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
