import type { NextPage } from 'next'
import Link from 'next/link'

import {
  Main,
  TopNav,
  Section,
  FooterBasic,
  Container,
  Banner,
  StackedList,
} from '@carletonuniversity/rds'
import { NewsData as newsData } from '../../data/NewsData'

import { ListWrapper } from '@components/Listings/ListWrapper'
import { NewsItem } from '@components/Listings/NewsItem'

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

          <StackedList hasShadow>
            {newsData.map(({ id, title, link, image, alt, date, excerpt }) => (
              <ListWrapper key={id}>
                <Link href={link}>
                  <NewsItem
                    image={image}
                    alt={alt}
                    title={title}
                    date={date}
                    excerpt={excerpt}
                  />
                </Link>
              </ListWrapper>
            ))}
          </StackedList>

          <Container bgColor="grey">
            <StackedList cols="2" hasShadow>
              {newsData.map(
                ({ id, title, link, image, alt, date, excerpt }) => (
                  <ListWrapper key={id}>
                    <Link href={link}>
                      <NewsItem
                        image={image}
                        alt={alt}
                        title={title}
                        date={date}
                        excerpt={excerpt}
                      />
                    </Link>
                  </ListWrapper>
                ),
              )}
            </StackedList>
          </Container>

          <Content />
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home
