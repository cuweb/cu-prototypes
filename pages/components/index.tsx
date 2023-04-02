import type { NextPage } from 'next'

import {
  Main,
  TopNav,
  Section,
  FooterBasic,
  Banner,
} from '@carletonuniversity/rds'

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

const Components: NextPage = () => {
  return (
    <>
      <TopNav title="Carleton University" />
      <Banner title="Component Prototypes" align="left" />

      <Main>
        <Section hasProse>
          <Content />
          <Content />
          <Content />
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Components
