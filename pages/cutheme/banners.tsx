import type { NextPage } from 'next'
import {
  Main,
  Section,
  Column,
  FooterBasic,
  // HeroTextImage,
  Button,
} from '@carletonuniversity/rds'

// import { HeroTextImage } from '@components/HeroTextImage/HeroTextImage'

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

const heroPara =
  'Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non.'

const Home: NextPage = () => {
  return (
    <>
      <TopBar
        title="Information and Technology Services"
        homeLink="/cutheme"
        navLinks={cuthemeNavData}
        isTwoTier
      ></TopBar>

      <Main>
        <Section hasProse>
          <HeroTextImage hasBorder>
            <HeroTextImage.Content
              title="Website and Application Development"
              paragraph={heroPara}
              headerType="h1"
              hasMediaCol
            >
              <div className="flex flex-wrap gap-4 md:gap-6 buttons">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
            <HeroTextImage.Media image="https://picsum.photos/400/266" />
          </HeroTextImage>
        </Section>

        <Section hasProse>
          <HeroTextImage reverse hasBorder>
            <HeroTextImage.Content
              title="Website and Application Development"
              paragraph={heroPara}
              headerType="h1"
              hasMediaCol
            >
              <div className="flex flex-wrap gap-4 md:gap-6 buttons">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
            <HeroTextImage.Media image="https://picsum.photos/400/266" />
          </HeroTextImage>
        </Section>

        <Section hasProse>
          <HeroTextImage hasBorder>
            <HeroTextImage.Content
              title="Website and Application Development"
              paragraph={heroPara}
              headerType="h1"
              hasMediaCol
            >
              <div className="flex flex-wrap gap-4 md:gap-6 buttons">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
            <HeroTextImage.Media
              image="https://picsum.photos/400/266"
              angle="left"
            />
          </HeroTextImage>
        </Section>

        <Section hasProse>
          <HeroTextImage reverse hasBorder>
            <HeroTextImage.Content
              title="Website and Application Development"
              paragraph={heroPara}
              headerType="h1"
              hasMediaCol
            >
              <div className="flex flex-wrap gap-4 md:gap-6 buttons">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
            <HeroTextImage.Media
              image="https://picsum.photos/400/266"
              angle="left"
            />
          </HeroTextImage>
        </Section>

        <Section hasProse>
          <HeroTextImage hasBorder>
            <HeroTextImage.Content
              title="Website and Application Development"
              paragraph={heroPara}
              headerType="h1"
              hasMediaCol
            >
              <div className="flex flex-wrap gap-4 md:gap-6 buttons">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
            <HeroTextImage.Media
              image="https://picsum.photos/400/266"
              angle="full"
            />
          </HeroTextImage>
        </Section>

        <Section hasProse>
          <HeroTextImage reverse hasBorder>
            <HeroTextImage.Content
              title="Website and Application Development"
              paragraph={heroPara}
              headerType="h1"
              hasMediaCol
            >
              <div className="flex flex-wrap gap-4 md:gap-6 buttons">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
            <HeroTextImage.Media
              image="https://picsum.photos/400/266"
              angle="full"
            />
          </HeroTextImage>
        </Section>

        <Section hasProse>
          <HeroTextImage maxWidth="5xl" hasBorder>
            <HeroTextImage.Content
              title="Website and Application Development"
              paragraph={heroPara}
              headerType="h1"
            >
              <div className="flex flex-wrap gap-4 md:gap-6 buttons">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
          </HeroTextImage>
        </Section>

        {/* <Section hasProse>
          <HeroTextImage reverse hasBorder>
            <HeroTextImage.Content
              title="Website and Application Development"
              paragraph={heroPara}
              headerType='h1'
              hasMediaCol
            >
              <div className="flex flex-wrap gap-4 md:gap-6 buttons">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
            <HeroTextImage.Media
              image="https://picsum.photos/400/266"
              angle="right"
            />
          </HeroTextImage>
        </Section>

        <Section hasProse>
          <HeroTextImage hasBorder>
            <HeroTextImage.Content
              title="Website and Application Development"
              paragraph={heroPara}
              headerType='h1'
              hasMediaCol
            >
              <div className="flex flex-wrap gap-4 md:gap-6 buttons">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
            <HeroTextImage.Media
              image="https://picsum.photos/400/266"
              angle="right"
            />
          </HeroTextImage>
        </Section> */}

        <Section hasProse>
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
