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
import { TopBarOld } from '../../components/TopBarOld/TopBarOld'
import { intranetNavData } from 'data/TopNavData'
import { styles } from '../../blocks/intranet/Intranet.Styles'

const IntranetWorkingCarleton: NextPage = () => {
  return (
    <>
      <TopBarOld
        title="Intranet"
        homeLink="/intranet"
        navLinks={intranetNavData}
      ></TopBarOld>

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
