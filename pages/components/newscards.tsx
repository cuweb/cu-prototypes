import type { NextPage } from 'next'
import Link from 'next/link'

import { NewsData as newsData } from '../../data/NewsData'
import { EventData as eventData } from '../../data/EventData'

import {
  Main,
  TopNav,
  Section,
  FooterBasic,
  Column,
  Banner,
  Heading,
} from '@carletonuniversity/rds'

import { Card } from '@components/Cards_v1/Card'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <TopNav title="Carleton University" />
      <Banner
        title="News Cards"
        paragraph="Component Prototypes"
        align="left"
        maxWidth="7xl"
      />

      <Main>
        <Section hasProse>
          <Heading text="News Cards" maxWidth="7xl" />
          <Column cols="3" maxWidth="7xl">
            {newsData.map(
              ({ id, title, link, image, alt, date, excerpt, tags }) => (
                <Card key={id}>
                  <Link href={link}>
                    <Card.Image>
                      <Image src={image} alt={alt} width={400} height={300} />
                    </Card.Image>
                    <Card.Content>
                      <Card.PostMeta date={date} />
                      <Card.Header text={title} />
                      <Card.Excerpt text={excerpt} />
                    </Card.Content>
                    <Card.Badges tags={tags} />
                  </Link>
                </Card>
              ),
            )}
          </Column>

          <Heading text="Event Cards" maxWidth="7xl" />
          <Column cols="3" maxWidth="7xl">
            {eventData.map(
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
                    <Card.Image>
                      <Image src={image} alt={alt} width={400} height={175} />
                    </Card.Image>
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
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home
