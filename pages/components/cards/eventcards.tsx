import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { EventData as eventData } from '../../../data/EventData'

import {
  Main,
  TopNav,
  Section,
  FooterBasic,
  Column,
  Banner,
  Container,
} from '@carletonuniversity/rds'

import { Card } from '@components/Card/Card'

const EventCards: NextPage = () => {
  return (
    <>
      <TopNav title="Carleton University" />
      <Banner
        title="Event Card Views"
        paragraph="Component Prototypes"
        align="left"
      />

      <Main>
        <Section hasProse>
          <Container>
            <Column cols="2" maxWidth="5xl">
              {eventData
                .slice(0, 2)
                .map(
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
                    tags,
                  }) => (
                    <Card key={id}>
                      <Link href={link}>
                        <Card.Figure>
                          <Image
                            src={image}
                            alt={alt}
                            width={400}
                            height={175}
                          />
                        </Card.Figure>
                        <Card.Content>
                          <Card.DateBox startDate={startDate} />
                          <Card.Header text={title} />
                          <Card.EventMeta
                            startDateTime={startDate}
                            endDateTime={endDate}
                            onCampus={on_campus}
                            onCampusBuilding={on_campus_building}
                            onCampusRoomNumber={on_campus_room_number}
                            eventAddress={event_address}
                          />
                        </Card.Content>
                        <Card.Badges tags={tags} />
                      </Link>
                    </Card>
                  ),
                )}
            </Column>
            <Column cols="3" maxWidth="5xl">
              {eventData
                .slice(0, 3)
                .map(
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
                    tags,
                  }) => (
                    <Card key={id}>
                      <Link href={link}>
                        <Card.Figure>
                          <Image
                            src={image}
                            alt={alt}
                            width={400}
                            height={175}
                          />
                        </Card.Figure>
                        <Card.Content>
                          <Card.DateBox startDate={startDate} />
                          <Card.Header text={title} />
                          <Card.EventMeta
                            startDateTime={startDate}
                            endDateTime={endDate}
                            onCampus={on_campus}
                            onCampusBuilding={on_campus_building}
                            onCampusRoomNumber={on_campus_room_number}
                            eventAddress={event_address}
                          />
                        </Card.Content>
                        <Card.Badges tags={tags} />
                      </Link>
                    </Card>
                  ),
                )}
            </Column>
            <Column cols="3" maxWidth="7xl">
              {eventData
                .slice(0, 3)
                .map(
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
                    tags,
                  }) => (
                    <Card key={id}>
                      <Link href={link}>
                        <Card.Figure>
                          <Image
                            src={image}
                            alt={alt}
                            width={400}
                            height={175}
                          />
                        </Card.Figure>
                        <Card.Content>
                          <Card.DateBox startDate={startDate} />
                          <Card.Header text={title} />
                          <Card.EventMeta
                            startDateTime={startDate}
                            endDateTime={endDate}
                            onCampus={on_campus}
                            onCampusBuilding={on_campus_building}
                            onCampusRoomNumber={on_campus_room_number}
                            eventAddress={event_address}
                          />
                        </Card.Content>
                        <Card.Badges tags={tags} />
                      </Link>
                    </Card>
                  ),
                )}
            </Column>
            <Column cols="4" maxWidth="7xl">
              {eventData
                .slice(0, 4)
                .map(
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
                    tags,
                  }) => (
                    <Card key={id}>
                      <Link href={link}>
                        <Card.Figure>
                          <Image
                            src={image}
                            alt={alt}
                            width={400}
                            height={175}
                          />
                        </Card.Figure>
                        <Card.Content>
                          <Card.DateBox startDate={startDate} />
                          <Card.Header text={title} />
                          <Card.EventMeta
                            startDateTime={startDate}
                            endDateTime={endDate}
                            onCampus={on_campus}
                            onCampusBuilding={on_campus_building}
                            onCampusRoomNumber={on_campus_room_number}
                            eventAddress={event_address}
                          />
                        </Card.Content>
                        <Card.Badges tags={tags} />
                      </Link>
                    </Card>
                  ),
                )}
            </Column>
          </Container>

          <Container bgColor="grey">
            <Column cols="2" maxWidth="5xl">
              {eventData
                .slice(0, 2)
                .map(
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
                    tags,
                  }) => (
                    <Card key={id}>
                      <Link href={link}>
                        <Card.Figure>
                          <Image
                            src={image}
                            alt={alt}
                            width={400}
                            height={175}
                          />
                        </Card.Figure>
                        <Card.Content>
                          <Card.DateBox startDate={startDate} />
                          <Card.Header text={title} />
                          <Card.EventMeta
                            startDateTime={startDate}
                            endDateTime={endDate}
                            onCampus={on_campus}
                            onCampusBuilding={on_campus_building}
                            onCampusRoomNumber={on_campus_room_number}
                            eventAddress={event_address}
                          />
                        </Card.Content>
                        <Card.Badges tags={tags} />
                      </Link>
                    </Card>
                  ),
                )}
            </Column>
            <Column cols="3" maxWidth="5xl">
              {eventData
                .slice(0, 3)
                .map(
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
                    tags,
                  }) => (
                    <Card key={id}>
                      <Link href={link}>
                        <Card.Figure>
                          <Image
                            src={image}
                            alt={alt}
                            width={400}
                            height={175}
                          />
                        </Card.Figure>
                        <Card.Content>
                          <Card.DateBox startDate={startDate} />
                          <Card.Header text={title} />
                          <Card.EventMeta
                            startDateTime={startDate}
                            endDateTime={endDate}
                            onCampus={on_campus}
                            onCampusBuilding={on_campus_building}
                            onCampusRoomNumber={on_campus_room_number}
                            eventAddress={event_address}
                          />
                        </Card.Content>
                        <Card.Badges tags={tags} />
                      </Link>
                    </Card>
                  ),
                )}
            </Column>
            <Column cols="3" maxWidth="7xl">
              {eventData
                .slice(0, 3)
                .map(
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
                    tags,
                  }) => (
                    <Card key={id}>
                      <Link href={link}>
                        <Card.Figure>
                          <Image
                            src={image}
                            alt={alt}
                            width={400}
                            height={175}
                          />
                        </Card.Figure>
                        <Card.Content>
                          <Card.DateBox startDate={startDate} />
                          <Card.Header text={title} />
                          <Card.EventMeta
                            startDateTime={startDate}
                            endDateTime={endDate}
                            onCampus={on_campus}
                            onCampusBuilding={on_campus_building}
                            onCampusRoomNumber={on_campus_room_number}
                            eventAddress={event_address}
                          />
                        </Card.Content>
                        <Card.Badges tags={tags} />
                      </Link>
                    </Card>
                  ),
                )}
            </Column>
            <Column cols="4" maxWidth="7xl">
              {eventData
                .slice(0, 4)
                .map(
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
                    tags,
                  }) => (
                    <Card key={id}>
                      <Link href={link}>
                        <Card.Figure>
                          <Image
                            src={image}
                            alt={alt}
                            width={400}
                            height={175}
                          />
                        </Card.Figure>
                        <Card.Content>
                          <Card.DateBox startDate={startDate} />
                          <Card.Header text={title} />
                          <Card.EventMeta
                            startDateTime={startDate}
                            endDateTime={endDate}
                            onCampus={on_campus}
                            onCampusBuilding={on_campus_building}
                            onCampusRoomNumber={on_campus_room_number}
                            eventAddress={event_address}
                          />
                        </Card.Content>
                        <Card.Badges tags={tags} />
                      </Link>
                    </Card>
                  ),
                )}
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default EventCards
