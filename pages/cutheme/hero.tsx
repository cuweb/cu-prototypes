/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import { Main, Section, FooterBasic, Column } from '@carletonuniversity/rds'

import { TopBar } from '@components/TopBar/TopBar'
import { HeroBanner } from '@components/HeroBanner/HeroBanner'

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
      {/* <TopBar></TopBar>
      <br />
      <TopBar title="Intranet"></TopBar>
      <br /> */}
      <TopBar title="Information and Technology Services" isTwoTier></TopBar>
      {/* <br /> */}

      <Main>
        <Section hasProse>
          <HeroBanner maxWidth="max">
            <HeroBanner.Content title="Website and Application Development (max)">
              <p>Test</p>
            </HeroBanner.Content>
            <HeroBanner.Figure>
              <img
                src="https://picsum.photos/400/266"
                alt="Text"
                className="w-full h-auto rounded-lg"
              />
            </HeroBanner.Figure>
          </HeroBanner>
        </Section>

        <Section hasProse>
          <SinglePara />
          <DoublePara />
        </Section>

        <br />
        <br />

        <Section hasProse>
          <HeroBanner maxWidth="7xl">
            <HeroBanner.Content title="Website and Application Development (7xl)">
              <p>Test</p>
            </HeroBanner.Content>
            <HeroBanner.Figure>
              <img
                src="https://picsum.photos/400/266"
                alt="Text"
                className="w-full h-auto rounded-lg"
              />
            </HeroBanner.Figure>
          </HeroBanner>
        </Section>

        <Section hasProse>
          <SinglePara />
          <DoublePara />
        </Section>

        <br />
        <br />

        <Section hasProse>
          <HeroBanner maxWidth="5xl">
            <HeroBanner.Content title="Website and Application Development (5xl)">
              <p>Test</p>
            </HeroBanner.Content>
            <HeroBanner.Figure>
              <img
                src="https://picsum.photos/400/266"
                alt="Text"
                className="w-full h-auto rounded-lg"
              />
            </HeroBanner.Figure>
          </HeroBanner>
        </Section>

        <Section hasProse>
          <SinglePara />
          <DoublePara />
        </Section>

        <br />
        <br />

        <Section hasProse>
          <HeroBanner maxWidth="7xl">
            <HeroBanner.Content title="Hero Inside content flow (7xl)">
              <p>Test</p>
            </HeroBanner.Content>
            <HeroBanner.Figure>
              <img
                src="https://picsum.photos/400/266"
                alt="Text"
                className="w-full h-auto rounded-lg"
              />
            </HeroBanner.Figure>
          </HeroBanner>

          <SinglePara />
          <DoublePara />
        </Section>

        <br />
        <br />

        <Section hasProse>
          <HeroBanner maxWidth="5xl">
            <HeroBanner.Content title="Hero Inside content flow (5xl)">
              <p>Test</p>
            </HeroBanner.Content>
            <HeroBanner.Figure>
              <img
                src="https://picsum.photos/400/266"
                alt="Text"
                className="w-full h-auto rounded-lg"
              />
            </HeroBanner.Figure>
          </HeroBanner>

          <SinglePara />
          <DoublePara />
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home
