'use client'
// Import from RDS
import { ButtonGroup, Button, Section } from '@carletonuniversity/rds'

// Internal Components
import PlaceHolder from '@/app/homepage/includes/PlaceHolder'
import HomeStats from '@/app/homepage/includes/HomeStats'
import HomeNews from '@/app/homepage/includes/HomeNews'

// New Components for RDS
import FullBanner from '@/app/homepage/components/FullBanner'
import Announcement from '@/app/homepage/components/Announcement'

export default function Page() {
  return (
    <>
      <FullBanner title="You've found the prototype for the new Carleton University homepage!">
        <ButtonGroup>
          <Button title="Apply Now" />
          <Button color="grey" title="Request Information" />
        </ButtonGroup>
      </FullBanner>

      <Section>
        <Announcement title="Fall Open House" />
      </Section>

      <HomeStats />
      <HomeNews />

      <Section>
        <PlaceHolder name="Red Wave" maxWidth="full" />
      </Section>
    </>
  )
}
