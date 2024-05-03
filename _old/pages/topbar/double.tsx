import type { NextPage } from 'next'
import {
  Main,
  Section,
  FooterBasic,
  Column,
  Heading,
  Card,
  HeroTextImage,
  Button,
} from '@carletonuniversity/rds'

import Link from 'next/link'
import Image from 'next/image'

import { NewsData } from '../../../src/data/NewsData'
import { TopBarNavData as navData } from 'data/TopNavData'
// import { cuthemeNavData as navData } from 'data/TopNavData'

import { TopBar } from '@components/TopBar/TopBar'

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
      <TopBar>
        <TopBar.Primary>
          <TopBar.Logo
            title="Information and Technology Services"
            link="https://carleton.ca/its"
          />
          <TopBar.Aside />
        </TopBar.Primary>
        <TopBar.Secondary>
          <TopBar.Menu navLinks={navData} />
        </TopBar.Secondary>
      </TopBar>

      <Main>
        <Section hasProse>
          <HeroTextImage hasBorder>
            <HeroTextImage.Content
              title="Website and Application Development"
              paragraph="Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium
              architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi
              delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
              Praesent quis ligula quis nulla malesuada tempor."
              headerType="h1"
              hasMediaCol
            >
              <div className="flex flex-wrap gap-4 buttons md:gap-6">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
            <HeroTextImage.Media image="https://picsum.photos/400/266" />
          </HeroTextImage>

          <DoublePara />

          <h2>How can we help you?</h2>
          <DoublePara />

          <Column cols="2">
            <Column.Content>
              <DoublePara />
            </Column.Content>
            <Column.Content>
              <DoublePara />
            </Column.Content>
          </Column>

          <Heading text="Recent News" />
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
                    </Card.Content>
                  </Link>
                </Card>
              ),
            )}
          </Column>

          <h3>This is a header three</h3>
          <DoublePara />
          <DoublePara />
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home
