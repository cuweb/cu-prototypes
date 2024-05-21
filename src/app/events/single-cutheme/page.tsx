'use client'
// import { useState, useCallback } from 'react'
import {
  Container,
  PageHeaders,
  Figure,
  Card,
  Column,
  ButtonGroup,
  Button,
} from '@carletonuniversity/rds'
import { EventData } from '@/data/EventData'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <PageHeaders header="Brain Health Research Day 2024">
        <Figure align="right" noMobile size="sm">
          <Image
            src="https://picsum.photos/1200/1200"
            alt="Required alt text"
            height="400"
            width="400"
          />
        </Figure>
        <PageHeaders.Event
          contactEmail="johndoe@test.com"
          contactName="John Doe"
          contactPhone="613-520-2600 x1234"
          cost="$20 per adult, $15 for youth/senior"
          eventType="Hybrid"
          location="Field House, 1125 Colonel By Drive"
          primaryButtonUrl="https://carleton.ca"
          secondaryButtonText="Secondary"
          secondaryButtonUrl="https://carleton.ca/webservices"
          startDate="Wednesday, March 21st, 2023 at 6:00pm"
          virtualType="Teams"
          virtualUrl="https://events.carleton.ca"
        />
      </PageHeaders>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed urna et
        sapien cursus dapibus. Nulla feugiat enim erat, quis sollicitudin libero
        viverra et. Proin consequat, nibh nec consectetur commodo, est ipsum
        ullamcorper elit, elementum vulputate ex est sed mauris. Duis id justo
        eu lectus eleifend condimentum sit amet nec dolor. Sed dui augue,
        pellentesque ut diam quis, congue tempor massa. Quisque mauris enim,
        ultricies vitae sapien at, faucibus tristique urna. Praesent consequat
        ante non neque ultrices faucibus. Curabitur ante augue, dictum vel
        volutpat vel, lacinia quis ante. Nulla dolor sem, commodo vel gravida
        sit amet, porttitor quis nulla.
      </p>
      <p>
        Quisque non urna vitae dolor auctor faucibus vel id tortor. Nam euismod
        tempor sapien id venenatis. Duis vel massa mollis, suscipit lectus
        vitae, pulvinar dui. Donec eu turpis tortor. Donec orci ante, volutpat
        eget ante vitae, malesuada semper nulla.
      </p>
      <p>
        Nulla tempor vitae ante et gravida. Nunc aliquet gravida nisi, sit amet
        imperdiet justo. Proin eu ex lectus. Fusce et porttitor nisl, eu
        faucibus erat. Vivamus tincidunt dapibus turpis non lobortis. Maecenas
        leo ex, dignissim eget tellus in, dapibus convallis libero. Duis
        fermentum nulla at lobortis facilisis. Nam leo sem, luctus eget rhoncus
        quis, imperdiet vitae sem.
      </p>
      <p>
        Quisque non urna vitae dolor auctor faucibus vel id tortor. Nam euismod
        tempor sapien id venenatis. Duis vel massa mollis, suscipit lectus
        vitae, pulvinar dui. Donec eu turpis tortor. Donec orci ante, volutpat
        eget ante vitae, malesuada semper nulla.
      </p>

      <Container maxWidth="7xl" isGrey>
        <PageHeaders header="Upcoming Events" as="h1" size="md" />
        <Column cols="4" maxWidth="7xl">
          {EventData.slice(0, 4).map(
            ({
              id,
              title,
              link,
              image,
              alt,
              startDate,
              endDate,
              on_campus,
              on_campus_building,
              on_campus_room_number,
              event_address,
            }) => (
              <Card key={id}>
                <Card.Figure>
                  <Image src={image} alt={alt} width={400} height={175} />
                </Card.Figure>
                <Card.DateThumb startDate={startDate} endDate={endDate} />
                <Card.Header title={title} />
                <Card.Body>
                  <Card.EventMeta
                    startDateTime={startDate}
                    endDateTime={endDate}
                    onCampus={on_campus}
                    onCampusBuilding={on_campus_building}
                    onCampusRoomNumber={on_campus_room_number}
                    eventAddress={event_address}
                  />
                </Card.Body>
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red">
                    More info
                  </a>
                </Card.Footer>
              </Card>
            ),
          )}
        </Column>
        <ButtonGroup>
          <Button title="View More Events" color="dark-grey" isCenter />
        </ButtonGroup>
      </Container>
    </>
  )
}
