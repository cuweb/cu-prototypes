'use client'
// Import from RDS
import { ButtonGroup, Button, Section } from '@carletonuniversity/rds'

// Internal Components
import PlaceHolder from '@/components-homepage/_existing/PlaceHolder'
import HomeStats from '@/components-homepage/_existing/HomeStats'
import HomeNews from '@/components-homepage/_existing/HomeNews'

// New Components for RDS
import FullBanner from '@/components-homepage/FullBanner/FullBanner'
import CallOut from '@/components-homepage/CallOut/CallOut'
import UpcomingEvents from '@/components-homepage/_existing/UpcomingEvents'
import RedWave from '@/components-homepage/RedWave/RedWave'

export default function Page() {
  return (
    <>
      <FullBanner
        title="The nostalgia is real, remember how amazing those first iPods were?"
        image="https://picsum.photos/id/20/1600/700"
        opacity={80}
      >
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

      <RedWave />
      {/* <Section maxWidth="full"></Section> */}

      <Section maxWidth="7xl">
        <PlaceHolder name="Attend Carleton" />
      </Section>

      <Section maxWidth="7xl">
        <PlaceHolder name="Campus Life" maxWidth="full" />
      </Section>

      <Section maxWidth="full">
        <PlaceHolder name="Black Wave" maxWidth="full" />
      </Section>

      <Section maxWidth="7xl">
        <PlaceHolder name="Testimonials" />
      </Section>

      <Section maxWidth="7xl" isGrey>
        <UpcomingEvents />
      </Section>
    </>
  )
}