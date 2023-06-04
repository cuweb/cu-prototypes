/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import { Main, Section, FooterBasic, Button } from '@carletonuniversity/rds'

import { TopBar } from '@components/TopBar/TopBar'
import { ImageText } from '@components/Hero/ImageText/ImageText'

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
          <ImageText
            maxWidth="max"
            title="Website and Application Development (max)"
          >
            <SinglePara />
            <div className="flex flex-wrap gap-6 buttons md:flex-1">
              <Button title="Primary" />
              <Button title="Secondary" color="grey" />
            </div>
          </ImageText>
        </Section>

        <Section hasProse>
          <DoublePara />
        </Section>

        {/* <br />
        <br /> */}

        <Section hasProse>
          <ImageText
            maxWidth="7xl"
            title="Website and Application Development (7xl)"
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
          </ImageText>
        </Section>

        <Section hasProse>
          <DoublePara />
        </Section>

        {/* <br />
        <br /> */}

        <Section hasProse>
          <ImageText
            maxWidth="5xl"
            title="Website and Application Development (5xl)"
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
          </ImageText>
        </Section>

        <Section hasProse>
          <DoublePara />
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home
