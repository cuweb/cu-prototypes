import type { NextPage } from 'next'
import {
  Main,
  Section,
  FooterBasic,
  Column,
  Heading,
  Card,
} from '@carletonuniversity/rds'

import { TopBar } from '@components/TopBar/TopBar'
import { HeroBanner } from '@components/HeroBanner/HeroBanner'
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
          <HeroBanner title="Hero banner @ 1536" maxWidth="max" />

          <DoublePara />

          <div className="cu-container not-contained rounded-lg mx-auto px-6 md:px-10 max-w-screen-2xl cu-container-5xl bg-cu-black-50 py-6 md:pt-10 md:pb-14 last:[&>*]:mb-0 [&>*:first-child]:-mt-0">
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
          </div>

          <h3>This is a header three</h3>
          <SinglePara />

          <div className="cu-container not-contained rounded-lg mx-auto px-6 md:px-10 max-w-screen-2xl cu-container-5xl bg-cu-black-50 py-6 md:pt-10 md:pb-14 last:[&>*]:mb-0 [&>*:first-child]:-mt-0">
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
          </div>

          <h3>This is a header three</h3>
          <SinglePara />

          <div className="cu-testing cu-container not-contained rounded-lg mx-auto px-6 lg:px-10 xl:px-14 max-w-screen-2xl cu-container-5xl bg-cu-black-50 py-6 md:pt-10 md:pb-14 last:[&>*]:mb-0 [&>*:first-child]:-mt-0">
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
          </div>

          <h3>This is a header three</h3>
          <SinglePara />

          <div className="cu-container not-contained rounded-lg mx-auto px-6 md:px-10 cu-container-5xl bg-cu-black-50 py-6 md:pt-10 md:pb-14 last:[&>*]:mb-0 [&>*:first-child]:-mt-0">
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
          </div>

          <h3>This is a header three</h3>
          <SinglePara />

          <Column cols="2">
            <div>
              <SinglePara />
            </div>
            <div>
              <SinglePara />
            </div>
          </Column>
          <SinglePara />
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home
