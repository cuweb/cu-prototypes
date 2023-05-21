import type { NextPage } from 'next'
import {
  Main,
  Section,
  FooterBasic,
  Container,
  Heading,
} from '@carletonuniversity/rds'
import { TopBar } from '../../components/TopBar/TopBar'

const styles = {
  cols: `mx-auto grid gap-10`,
  cols2: `md:grid-cols-2`,
  cols3: `md:grid-cols-3`,
  cols4: `md:grid-cols-2 lg:grid-cols-4`,
  cols_1_3: `lg:grid-cols-3 lg:[&>*:last-child]:col-span-2`,
  cols_2_3: `lg:grid-cols-3 lg:[&>*:first-child]:col-span-2`,
  width1280: `max-w-7xl`,
  width1536: `max-w-screen-2xl`,
}

const Home: NextPage = () => {
  return (
    <>
      <br />
      <TopBar></TopBar>
      <br />
      <TopBar title="Intranet"></TopBar>
      <br />
      <TopBar title="Information and Technology Services" isTwoTier></TopBar>

      <Main>
        <Section>
          <Container bgColor="grey">
            <div
              className={`cu-column not-contained ${styles.cols} ${styles.cols_2_3} ${styles.width1280}`}
            >
              <div className="bg-white rounded-lg min-h-[240px]">Profile</div>
              <div className="bg-white rounded-lg min-h-[240px]">TBD</div>
            </div>

            <Heading text="Important News" maxWidth="7xl" />

            <div
              className={`cu-column not-contained ${styles.cols} ${styles.cols3} ${styles.width1280}`}
            >
              <div className="bg-white rounded-lg min-h-[240px]">News</div>
              <div className="bg-white rounded-lg min-h-[240px]">News</div>
              <div className="bg-white rounded-lg min-h-[240px]">News</div>
            </div>

            <Heading text="Around Carleton" maxWidth="7xl" />

            <div
              className={`cu-column not-contained ${styles.cols} ${styles.cols_1_3} ${styles.width1280}`}
            >
              <div className="bg-white rounded-lg min-h-[240px]">
                Quick Access
              </div>
              <div className="bg-cu-black-50 min-h-[240px]">
                <div
                  className={`cu-column not-contained ${styles.cols} ${styles.cols2} ${styles.width1280}`}
                >
                  <div className="bg-white rounded-lg min-h-[240px] col-span-2">
                    Bulletin Board
                  </div>
                  <div className="bg-white rounded-lg min-h-[240px]">
                    Internal News
                  </div>
                  <div className="bg-white rounded-lg min-h-[240px]">
                    Internal Events
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`cu-column not-contained ${styles.cols} ${styles.cols2} ${styles.width1280}`}
            >
              <div className="bg-white rounded-lg min-h-[240px]">
                Ideas @ Carleton
              </div>
              <div className="bg-white rounded-lg min-h-[240px]">
                Marketplace
              </div>
            </div>

            <Heading text="Carleton by the Numbers" maxWidth="7xl" />

            <div
              className={`cu-column not-contained ${styles.cols} ${styles.cols4} ${styles.width1280}`}
            >
              <div className="bg-white rounded-lg min-h-[240px]">Stat</div>
              <div className="bg-white rounded-lg min-h-[240px]">Stat</div>
              <div className="bg-white rounded-lg min-h-[240px]">Stat</div>
              <div className="bg-white rounded-lg min-h-[240px]">Stat</div>
            </div>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home
