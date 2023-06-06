/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import { Main, Section, FooterBasic, Button } from '@carletonuniversity/rds'

import { TopBar } from '@components/TopBar/TopBar'
import { HeroTextImage } from '@components/Hero/TextImage/TextImage'

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
          <HeroTextImage
            title="Website and Application Development"
            image="https://picsum.photos/400/266"
          >
            <SinglePara />
            <div className="flex flex-wrap gap-6 buttons md:flex-1">
              <Button title="Primary" />
              <Button title="Secondary" color="grey" />
            </div>
          </HeroTextImage>
        </Section>

        <Section hasProse>
          <SinglePara />
          <DoublePara />

          <HeroTextImage
            title="Website and Application Development"
            image="https://picsum.photos/400/266"
            imageAngle
            imageTall
          >
            <SinglePara />
            <div className="flex flex-wrap gap-6 buttons md:flex-1">
              <Button title="Primary" />
              <Button title="Secondary" color="grey" />
            </div>
          </HeroTextImage>

          <SinglePara />
          <DoublePara />

          <HeroTextImage title="Website and Application Development">
            <SinglePara />
            <div className="flex flex-wrap gap-6 buttons md:flex-1">
              <Button title="Primary" />
              <Button title="Secondary" color="grey" />
            </div>
          </HeroTextImage>

          <SinglePara />
          <DoublePara />
          <SinglePara />

          <HeroTextImage
            title="Website and Application Development"
            image="https://picsum.photos/400/266"
            headerSmall
          >
            <SinglePara />
            <div className="flex flex-wrap gap-6 buttons md:flex-1">
              <Button title="Primary" />
              <Button title="Secondary" color="grey" />
            </div>
          </HeroTextImage>

          <SinglePara />
          <DoublePara />
          <SinglePara />

          <HeroTextImage
            title="Website and Application Development"
            image="https://picsum.photos/400/266"
            headerSmall
            imageAngle
            imageTall
          >
            <SinglePara />
            <div className="flex flex-wrap gap-6 buttons md:flex-1">
              <Button title="Primary" />
              <Button title="Secondary" color="grey" />
            </div>
          </HeroTextImage>

          <SinglePara />
          <DoublePara />
          <SinglePara />

          <HeroTextImage
            title="Website and Application Development"
            headerSmall
          >
            <SinglePara />
            <div className="flex flex-wrap gap-6 buttons md:flex-1">
              <button
                type="button"
                aria-label="Primary Button"
                className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md cu-button not-prose hover:text-white focus:outline-none bg-cu-red hover:bg-cu-black-600"
              >
                Primary Button
              </button>
              <button
                type="button"
                aria-label="Light Grey Button"
                className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium rounded-md cu-button not-prose hover:text-white focus:outline-none text-cu-black-800 bg-cu-black-50 hover:bg-cu-black-600"
              >
                Secondary Button
              </button>
            </div>
          </HeroTextImage>

          <SinglePara />
          <DoublePara />
          <SinglePara />
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home
