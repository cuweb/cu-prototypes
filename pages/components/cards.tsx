import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { NewsData as newsData } from '../../data/NewsData'
import { EventData as eventData } from '../../data/EventData'
import { PeopleData as peopleData } from '../../data/PeopleData'
import { VideoData as videoData } from '../../data/VideoData'

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
import { CardPeopleMeta } from '@components/Cards_v1/CardPeopleMeta'

const Home: NextPage = () => {
  return (
    <>
      <TopNav title="Carleton University" />
      <Banner
        title="Card Views"
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
                    <Card.Figure>
                      <Image src={image} alt={alt} width={400} height={300} />
                    </Card.Figure>
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
                    <Card.Figure>
                      <Image src={image} alt={alt} width={400} height={175} />
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

          <Heading text="Video Cards" maxWidth="7xl" />
          <Column cols="3" maxWidth="7xl">
            {videoData.map(({ id, source, title, tags }) => (
              <Card key={id}>
                <Card.Video source={source} />
                <Card.Content>
                  <Card.VideoMeta duration="2m 38s" />
                  <Card.Header text={title} />
                </Card.Content>
                <Card.Badges tags={tags} />
              </Card>
            ))}
          </Column>

          <Heading text="People Cards" maxWidth="7xl" />
          <Column cols="3" maxWidth="7xl">
            {peopleData.map(
              ({
                id,
                link,
                firstName,
                lastName,
                jobTitle,
                email,
                phone,
                image,
                alt,
                tags,
              }) => (
                <Card key={id} isCenter>
                  <Link href={link}>
                    <Card.Figure isRound>
                      <Image src={image} alt={alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${firstName} ${lastName}`} />
                      <CardPeopleMeta
                        jobTitle={jobTitle}
                        email={email}
                        phone={phone}
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
