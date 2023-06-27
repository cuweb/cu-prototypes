/* eslint-disable @next/next/no-img-element */

import type { NextPage } from 'next'
import {
  Main,
  Section,
  Column,
  FooterBasic,
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
            <HeroTextImage.People
              designation="Dr."
              title="Employee Profile"
              jobTitle="Financial Analyst, Business Office"
              degrees="Master of Business Administration"
              pronoun="They/Them"
              building="Dunton Tower"
              room="148-A"
              email="employee.email@carleton.ca"
              phone="613-520-2600"
              phoneExt="2497"
            >
              <HeroTextImage.Social
                resume="#"
                linkedin="#"
                twitter="#"
                facebook="#"
              />
            </HeroTextImage.People>
            <HeroTextImage.Media imageWidth="40">
              <img src="https://picsum.photos/400/400" alt="Demo" />
            </HeroTextImage.Media>
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
