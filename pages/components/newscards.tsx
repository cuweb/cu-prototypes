import type { NextPage } from 'next'
import Link from 'next/link'

import {
  Main,
  TopNav,
  Section,
  FooterBasic,
  Column,
  Banner,
} from '@carletonuniversity/rds'
import { NewsData as newsData } from '../../data/NewsData'

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
      />

      <Main>
        <Section hasProse>
          <Column cols="3">
            {newsData.map(
              ({ id, title, link, image, alt, date, excerpt, tags }) => (
                <Card key={id}>
                  <Link href={link}>
                    <Image
                      src={image}
                      alt={alt}
                      width={400}
                      height={300}
                      className="object-cover w-full"
                    />
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
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home
