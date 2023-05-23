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
      <TopBar title="Information and Technology Services" isTwoTier></TopBar>

      <Main>
        <Section hasProse>
          <HeroBanner title="Hero banner as a page heading" maxWidth="max" />
          <span className="block h-6"></span>

          <SinglePara />
          <h2>This is a header two</h2>
          <DoublePara />

          <HeroBanner title="Hero banner in the content" maxWidth="max" />

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
