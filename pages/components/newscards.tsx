import type { NextPage } from 'next'
import Link from 'next/link'

import {
  Main,
  TopNav,
  Section,
  FooterBasic,
  Container,
  Column,
  Banner,
} from '@carletonuniversity/rds'
import { NewsData as newsData } from '../../data/NewsData'

import { CardWrapper } from '@components/Cards/CardWrapper'
import { NewsCard } from '@components/Cards/NewsCard'

const Content = () => {
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
      <TopNav title="Carleton University" />
      <Banner
        title="News Cards"
        paragraph="Component Prototypes"
        align="left"
      />

      <Main>
        <Section hasProse>
          <Content />

          <Column cols="3">
            {newsData.map(({ id, title, link, image, date, excerpt, tags }) => (
              <CardWrapper key={id}>
                <Link href={link}>
                  <NewsCard
                    key={id}
                    title={title}
                    image={image}
                    date={date}
                    excerpt={excerpt}
                    tags={tags}
                  />
                </Link>
              </CardWrapper>
            ))}
          </Column>

          <Content />

          <Container>
            <Column cols="3">
              {newsData.map(
                ({ id, title, link, image, date, excerpt, tags }) => (
                  <CardWrapper key={id}>
                    <Link href={link}>
                      <NewsCard
                        key={id}
                        title={title}
                        image={image}
                        date={date}
                        excerpt={excerpt}
                        tags={tags}
                      />
                    </Link>
                  </CardWrapper>
                ),
              )}
            </Column>
          </Container>

          <Content />

          <Container bgColor="grey">
            <Column cols="3">
              {newsData.map(
                ({ id, title, link, image, date, excerpt, tags }) => (
                  <CardWrapper key={id}>
                    <Link href={link}>
                      <NewsCard
                        key={id}
                        title={title}
                        image={image}
                        date={date}
                        excerpt={excerpt}
                        tags={tags}
                      />
                    </Link>
                  </CardWrapper>
                ),
              )}
            </Column>
          </Container>

          <Content />
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home
