/* eslint-disable @next/next/no-img-element */

import type { NextPage } from 'next'
import {
  Main,
  Section,
  Column,
  FooterBasic,
  Button,
  // HeroTextImage,
} from '@carletonuniversity/rds'

import { TopBar } from '@components/TopBar/TopBar'
import { cuthemeNavData } from 'data/TopNavData'
import { HeroTextImage } from '@components/HeroTextImage/HeroTextImage'

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
        // navLinks={cuthemeNavData}
        // isTwoTier
      ></TopBar>

      <Main>
        <Section hasProse>
          <HeroTextImage maxWidth="5xl" hasBorder>
            <HeroTextImage.Event
              title="Capital Hoops Classic"
              startDate="March 21st, 2023 at 6:00pm"
              location="Raven’s Nest, 1125 Colonel By Drive"
              cost="$20 per adult, $15 for youth/senior"
            >
              <div className="flex flex-wrap gap-4 md:gap-6 buttons">
                <Button title="Get Tickets" />
                <Button title="Request Info" color="grey" />
              </div>
            </HeroTextImage.Event>
            <HeroTextImage.Media
              image="https://picsum.photos/400/266"
              imageWidth="40"
            ></HeroTextImage.Media>
          </HeroTextImage>

          <DoublePara />

          <Column cols="2">
            <Column.Content>
              <SinglePara />
            </Column.Content>
            <Column.Content>
              <SinglePara />
            </Column.Content>
          </Column>

          <DoublePara />
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home
