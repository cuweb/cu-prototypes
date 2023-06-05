import type { NextPage } from 'next'
import {
  Main,
  Section,
  FooterBasic,
  Column,
  Heading,
  Card,
  Container,
} from '@carletonuniversity/rds'

import { TopBar } from '@components/TopBar/TopBar'
import { HeroTextImage } from '@components/Hero/TextImage/TextImage'
import Link from 'next/link'
import { NewsData } from '../../data/NewsData'
import Image from 'next/image'

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
      <TopBar title="Information and Technology Services" isTwoTier></TopBar>

      <Main>
        <Section hasProse>
          <HeroTextImage title="Hero banner @ 1536" />

          <DoublePara />

          <Heading text="Column without container component" />
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

          <Container>
            <Heading text="Column inside a container component" />
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

          <Container isGrey>
            <Heading text="Column inside a container component" />
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
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home