'use client'
// Import from RDS
import { ButtonGroup, Button, Section } from '@carletonuniversity/rds'

// Internal Components
import PlaceHolder from '@/app/homepage/includes/PlaceHolder'
import HomeStats from '@/app/homepage/includes/HomeStats'
import HomeNews from '@/app/homepage/includes/HomeNews'

// New Components for RDS
import FullBanner from '@/components-homepage/FullBanner/FullBanner'
import CallOut from '@/components-homepage/CallOut/CallOut'

export default function Page() {
  return (
    <>
      <FullBanner title="Welcome to Carleton. Disclaimer: this photo is not Carleton, nor is it Ottawa.">
        <ButtonGroup>
          <Button title="Apply Now" />
          <Button color="grey" title="Request Information" />
        </ButtonGroup>
      </FullBanner>

      <Section>
        <CallOut title="Fall Open House">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            porta magna. Fusce id viverra mi. Etiam mollis feugiat nisl, sit
            amet tempor ante scelerisque vitae. Proin non bibendum dolor.
          </p>
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button color="grey" title="Request Information" />
          </ButtonGroup>
        </CallOut>
      </Section>

      <HomeStats />
      <HomeNews />

      <Section maxWidth="none">
        <PlaceHolder name="Red Wave" maxWidth="full" />
      </Section>
    </>
  )
}
