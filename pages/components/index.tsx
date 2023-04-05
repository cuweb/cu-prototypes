import type { NextPage } from 'next'

import {
  Main,
  TopNav,
  Section,
  FooterBasic,
  Banner,
  Card,
} from '@carletonuniversity/rds'
import Image from 'next/image'
import Link from 'next/link'

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

          <Card>
            <Link href="#">
              <Card.Figure>
                <Image
                  alt="Image alt text"
                  height="266"
                  src="https://source.unsplash.com/random/400x266"
                  width="400"
                />
              </Card.Figure>
              <Card.Content>
                <Card.PostMeta date="2023-03-28 10:27:31" />
                <Card.Header text="End-of-Year Reflections and Resolutions for Our Web Services Team" />
                <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
              </Card.Content>
              <Card.Badges
                tags={{
                  category: [
                    {
                      id: 3,
                      name: 'Category One',
                      slug: 'category-one',
                    },
                    {
                      id: 4,
                      name: 'Category Two',
                      slug: 'category-two',
                    },
                  ],
                }}
              />
            </Link>
          </Card>

          <Content />
          <Content />
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Components
