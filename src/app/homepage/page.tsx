'use client'
// Import from RDS
import {
  ButtonGroup,
  Button,
  Section,
  PageHeader,
} from '@carletonuniversity/rds'

// Internal Components
import PlaceHolder from '@/components-homepage/_existing/PlaceHolder'
import HomeStats from '@/components-homepage/_existing/HomeStats'
import HomeNews from '@/components-homepage/_existing/HomeNews'
import UpcomingEvents from '@/components-homepage/_existing/UpcomingEvents'

// New Components for RDS
import FullBanner from '@/components-homepage/components/FullBanner/FullBanner'
import CallOut from '@/components-homepage/components/CallOut/CallOut'
import WideWave from '@/components-homepage/components/WideWave/WideWave'
import { TextMedia } from '@/components-homepage/components/TextMedia/TextMedia'
import Link from 'next/link'

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

      <WideWave title="Wave Component in Red">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
          ligula felis. Maecenas gravida venenatis condimentum. Nulla ex massa,
          ultrices iaculis ante sit amet, faucibus commodo justo. Donec
          lobortis, ex vel elementum facilisis, justo lorem molestie erat,
          mollis imperdiet neque arcu sit amet lacus. Cras non lorem
          pellentesque, facilisis risus nec, dictum augue. Duis tortor velit,
          egestas quis erat at, iaculis aliquam ipsum.
        </p>
        <p>
          Curabitur id nisi dapibus, dignissim metus id, vehicula erat. Donec
          accumsan finibus nisl, sed maximus justo imperdiet non. Aenean sed
          tellus feugiat, pharetra est vel, venenatis sapien.
        </p>
        <ButtonGroup>
          <Link href="#" className="cu-button cu-button--white">
            Apply Now
          </Link>
          <Link href="#" className="cu-button cu-button--black">
            More Information
          </Link>
        </ButtonGroup>
      </WideWave>

      <Section maxWidth="7xl">
        <PlaceHolder name="Attend Carleton" />
      </Section>

      <Section maxWidth="7xl">
        {/* <PlaceHolder name="Campus Life" maxWidth="full" /> */}
        <PageHeader
          as="h1"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
          header="Page Header"
          size="lg"
        />
      </Section>

      <WideWave
        title="Wave Component in Black"
        wave="black"
        contentWidth={40}
        reverse
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
          ligula felis. Maecenas gravida venenatis condimentum. Nulla ex massa,
          ultrices iaculis ante sit amet, faucibus commodo justo. Donec
          lobortis, ex vel elementum facilisis, justo lorem molestie erat,
          mollis imperdiet neque arcu sit amet lacus. Cras non lorem
          pellentesque, facilisis risus nec, dictum augue. Duis tortor velit,
          egestas quis erat at, iaculis aliquam ipsum.
        </p>
        <p>
          Curabitur id nisi dapibus, dignissim metus id, vehicula erat. Donec
          accumsan finibus nisl, sed maximus justo imperdiet non. Aenean sed
          tellus feugiat, pharetra est vel, venenatis sapien.
        </p>
        <ButtonGroup>
          <Link href="#" className="cu-button cu-button--white">
            Apply Now
          </Link>
          <Link href="#" className="cu-button cu-button--black">
            More Information
          </Link>
        </ButtonGroup>
      </WideWave>

      <Section maxWidth="7xl">
        <PlaceHolder name="Testimonials" />
      </Section>

      <Section maxWidth="7xl" isGrey>
        <UpcomingEvents />
      </Section>
    </>
  )
}
