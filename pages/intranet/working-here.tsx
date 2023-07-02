import type { NextPage } from 'next'
import {
  Main,
  Section,
  FooterBasic,
  Container,
  Heading,
  Column,
  HeroTextImage,
  Button,
} from '@carletonuniversity/rds'
import { TopBar } from '../../components/TopBar/TopBar'
import { CommunityNews } from 'blocks/intranet/CommunityNews'
import { BulletinBoard } from 'blocks/intranet/BulletinBoard'
import { NumberStats } from 'blocks/intranet/NumberStats'
import { Profile } from 'blocks/intranet/Profile'
import { Resources } from 'blocks/intranet/Resources'
import { NewsEvents } from 'blocks/intranet/NewsEvents'
import { intranetNavData } from 'data/TopNavData'
import { styles } from '../../blocks/intranet/Intranet.Styles'

const IntranetWorkingCarleton: NextPage = () => {
  return (
    <>
      <TopBar
        title="Intranet"
        homeLink="/intranet"
        navLinks={intranetNavData}
      ></TopBar>

      <Main>
        <Section>
          <Container isGrey>
            <HeroTextImage>
              <HeroTextImage.Content
                title="Working at Carleton"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                facilisis id neque sit amet convallis. Proin rutrum leo
                turpis, quis fringilla nisi facilisis eget. Nunc nec
                sollicitudin orci. Aenean a nibh ex."
                headerType="h1"
              >
                <div className="flex flex-wrap gap-6 buttons md:flex-1">
                  <Button
                    title="Strategic Integrated Plan"
                    onClick={() => {
                      location.href =
                        'https://carleton.ca/president/strategic-integrated-plan-sip/'
                    }}
                  />
                </div>
              </HeroTextImage.Content>
              <HeroTextImage.Media image="https://picsum.photos/800/266" />
            </HeroTextImage>
          </Container>

          <Container>
            <Column cols="2" maxWidth="7xl">
              <div className={styles.placeholder}>Other Strategies</div>
              <div className={styles.placeholder}>Other Strategies</div>
            </Column>
            <Column cols="3" maxWidth="7xl">
              <div className={styles.placeholder}>Key Policies</div>
              <div className={styles.placeholder}>HR Links</div>
              <div className={styles.placeholder}>Learning</div>
            </Column>
          </Container>

          <Container>
            <Heading text="Job Opportunities" maxWidth="7xl" />
            <Column cols="2" maxWidth="7xl">
              <div className={styles.placeholder}>Job Listings</div>
              <div className={styles.placeholder}>On-boarding Details</div>
            </Column>
          </Container>

          <Container>
            <Heading text="Manager Resources" maxWidth="7xl" />
            <Column cols="2" maxWidth="7xl">
              <div className={styles.placeholder}>Resources</div>
              <div className={styles.placeholder}>Unknown Element</div>
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default IntranetWorkingCarleton
