import type { NextPage } from 'next'
import {
  Main,
  Section,
  Column,
  Heading,
  Card,
  Container,
  HeroBanner,
} from '@carletonuniversity/rds'

import { TopBar } from '@components/TopBar/TopBar'
import { FooterSimple } from '@components/FooterSimple/FooterSimple'

import Link from 'next/link'
import Image from 'next/image'

import { NewsData } from '../../data/NewsData'
import { cuthemeNavData } from 'data/TopNavData'

const SinglePara = () => {
  return (
    <>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium
        architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi
        delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

const DoublePara = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet
        tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus
        imperdiet turpis nec elit ultricies, sed tempus diam dignissim.
        Suspendisse condimentum magna vel orci vulputate, eget vulputate neque
        porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus
        vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis
        interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit
        tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
      </p>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium
        architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi
        delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

const Home: NextPage = () => {
  return (
    <>
      <TopBar
        title="Information and Technology Services"
        homeLink="/cutheme"
        navLinks={cuthemeNavData}
        isTwoTier
      ></TopBar>

      <Main>
        <Section hasProse>
          <HeroBanner>
            <HeroBanner.Content title="Hero banner @ 1536" />
          </HeroBanner>

          <SinglePara />
          <DoublePara />

          <Container isGrey>
            <Heading text="Three col cards @ 1024" />
            <Column cols="3">
              {NewsData.slice(0, 3).map(
                ({ id, title, link, date, image, alt }) => (
                  <Card key={id}>
                    <Link href={link}>
                      <Card.Figure>
                        <Image src={image} alt={alt} width="400" height="266" />
                      </Card.Figure>
                      <Card.Content>
                        <Card.PostMeta date={date} />
                        <Card.Header text={title} />
                        {/* <Card.Excerpt text={excerpt} /> */}
                      </Card.Content>
                    </Link>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <h3>This is a header three</h3>
          <SinglePara />
          <DoublePara />

          <Container isGrey>
            <Heading text="Four col cards @ 1280" maxWidth="7xl" />
            <Column cols="4" maxWidth="7xl">
              {NewsData.slice(0, 4).map(
                ({ id, title, link, date, image, alt }) => (
                  <Card key={id}>
                    <Link href={link}>
                      <Card.Figure>
                        <Image src={image} alt={alt} width="400" height="266" />
                      </Card.Figure>
                      <Card.Content>
                        <Card.PostMeta date={date} />
                        <Card.Header text={title} />
                        {/* <Card.Excerpt text={excerpt} /> */}
                      </Card.Content>
                    </Link>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <h3>This is a header three</h3>
          <SinglePara />
          <DoublePara />

          <Container isGrey>
            <Heading text="Four col cards @ 1536" maxWidth="7xl" />
            <Column cols="4" maxWidth="7xl">
              {NewsData.slice(0, 4).map(
                ({ id, title, link, date, image, alt }) => (
                  <Card key={id}>
                    <Link href={link}>
                      <Card.Figure>
                        <Image src={image} alt={alt} width="400" height="266" />
                      </Card.Figure>
                      <Card.Content>
                        <Card.PostMeta date={date} />
                        <Card.Header text={title} />
                        {/* <Card.Excerpt text={excerpt} /> */}
                      </Card.Content>
                    </Link>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <h3>This is a header three</h3>
          <SinglePara />
          <DoublePara />

          <Container isGrey>
            <Heading text="Grey BG @ full width" maxWidth="7xl" />
            <Column cols="4" maxWidth="7xl">
              {NewsData.slice(0, 4).map(
                ({ id, title, link, date, image, alt }) => (
                  <Card key={id}>
                    <Link href={link}>
                      <Card.Figure>
                        <Image src={image} alt={alt} width="400" height="266" />
                      </Card.Figure>
                      <Card.Content>
                        <Card.PostMeta date={date} />
                        <Card.Header text={title} />
                        {/* <Card.Excerpt text={excerpt} /> */}
                      </Card.Content>
                    </Link>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <h3>This is a header three</h3>
          <SinglePara />
          <DoublePara />

          <Column cols="2">
            <Column.Content>
              <SinglePara />
            </Column.Content>
            <Column.Content>
              <SinglePara />
            </Column.Content>
          </Column>
          <SinglePara />
        </Section>
      </Main>

      <FooterSimple />
    </>
  )
}
export default Home
