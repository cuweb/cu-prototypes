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
                      <Image
                        src={image}
                        alt={alt}
                        width={400}
                        height={300}
                        className="object-cover w-full"
                      />
                    </Card.Image>
                    <Card.Content>
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
              ({ id, title, link, featured_image, startDateTime, tags }) => (
                <Card key={id}>
                  <Link href={link}>
                    <Card.Image>
                      <Image
                        src={featured_image}
                        alt="Need to add alt prop"
                        width={400}
                        height={175}
                        className="object-cover w-full"
                      />
                    </Card.Image>
                    <Card.Content>
                      <Card.DateBox startDate={startDateTime} />
                      <Card.Header text={title} />
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
