import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Main,
  Section,
  Column,
  Heading,
  Card,
  TopBar,
  Container,
  StackedList,
  Listing,
  Button,
  FooterStandard,
  HeroTextImage,
  ButtonGroup,
} from '@carletonuniversity/rds'
import { NewsData } from 'data/NewsData'
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
      <TopBar>
        <TopBar.Primary>
          <TopBar.Logo>
            <a href="https://carleton.ca" className="cu-topbar--logo">
              <Image
                className="culogo"
                src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg"
                width="130"
                height="35"
                alt="Logo"
              />
              <Image
                className="cushield"
                src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg"
                width="28"
                height="35"
                alt="Logo"
              />
            </a>
          </TopBar.Logo>
          <TopBar.Aside />
        </TopBar.Primary>
      </TopBar>

      <Main>
        <Section hasProse>
          <HeroBanner
            title="Hero Image Banner"
            image="https://picsum.photos/1600/700"
          >
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button
                title="Request Information"
                isType="outline"
                color="white"
              />
            </ButtonGroup>
          </HeroBanner>

          <HeroBanner title="Hero Image Banner">
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button title="Request Information" color="dark-grey" />
            </ButtonGroup>
          </HeroBanner>

          <HeroBanner title="Hero Image Banner" />

          <DoublePara />

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

          <h3>This is a header three</h3>
          <SinglePara />

          <h3>This is a header three</h3>
          <SinglePara />

          <HeroTextImage maxWidth="5xl">
            <HeroTextImage.Content title="Hero banner @ 1536" />
          </HeroTextImage>

          <h3>This is a header three</h3>
          <SinglePara />

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

      <FooterStandard />
    </>
  )
}

export default Home
