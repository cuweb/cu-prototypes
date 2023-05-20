import type { NextPage } from 'next'
import {
  Main,
  Section,
  FooterBasic,
  Container,
  Heading,
} from '@carletonuniversity/rds'
import { TopNav } from '../../components/TopNav/TopNav'

const styles = {
  cols: `mx-auto grid gap-10`,
  cols2: `md:grid-cols-2`,
  cols3: `md:grid-cols-3`,
  cols4: `md:grid-cols-2 lg:grid-cols-4`,
  cols_1_3: `lg:grid-cols-3 lg:[&>*:last-child]:col-span-2`,
  cols_2_3: `lg:grid-cols-3 lg:[&>*:first-child]:col-span-2`,
  width1536: `max-w-screen-2xl`,
}

const Home: NextPage = () => {
  return (
    <>
      <TopNav></TopNav>

      <Main>
        <Section>
          <Container bgColor="grey">
            <div
              className={`cu-column not-contained ${styles.cols} ${styles.cols_2_3} ${styles.width1536}`}
            >
              <div className="bg-white rounded-lg min-h-[240px]">Profile</div>
              <div className="bg-white rounded-lg min-h-[240px]">TBD</div>
            </div>

            <header className="mx-auto mt-6 mb-6 cu-heading not-contained not-prose max-w-screen-2xl md:mt-14 md:mb-10">
              <h2 className="relative max-w-4xl pb-4 text-2xl font-semibold md:text-3xl lg:text-4xl text-cu-black-800 after:absolute after:w-10 after:h-px after:bottom-0 after:bg-cu-red after:left-px">
                Important News
              </h2>
            </header>

            <div
              className={`cu-column not-contained ${styles.cols} ${styles.cols3} ${styles.width1536}`}
            >
              <div className="bg-white rounded-lg min-h-[240px]">News</div>
              <div className="bg-white rounded-lg min-h-[240px]">News</div>
              <div className="bg-white rounded-lg min-h-[240px]">News</div>
            </div>

            <header className="mx-auto mt-6 mb-6 cu-heading not-contained not-prose max-w-screen-2xl md:mt-14 md:mb-10">
              <h2 className="relative max-w-4xl pb-4 text-2xl font-semibold md:text-3xl lg:text-4xl text-cu-black-800 after:absolute after:w-10 after:h-px after:bottom-0 after:bg-cu-red after:left-px">
                Around Carleton
              </h2>
            </header>

            <div
              className={`cu-column not-contained ${styles.cols} ${styles.cols_1_3} ${styles.width1536}`}
            >
              <div className="bg-white rounded-lg min-h-[240px]">
                Quick Access
              </div>
              <div className="bg-cu-black-50 min-h-[240px]">
                <div
                  className={`cu-column not-contained ${styles.cols} ${styles.cols2} ${styles.width1536}`}
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
              className={`cu-column not-contained ${styles.cols} ${styles.cols2} ${styles.width1536}`}
            >
              <div className="bg-white rounded-lg min-h-[240px]">
                Ideas @ Carleton
              </div>
              <div className="bg-white rounded-lg min-h-[240px]">
                Marketplace
              </div>
            </div>

            <header className="mx-auto mt-6 mb-6 cu-heading not-contained not-prose max-w-screen-2xl md:mt-14 md:mb-10">
              <h2 className="relative max-w-4xl pb-4 text-2xl font-semibold md:text-3xl lg:text-4xl text-cu-black-800 after:absolute after:w-10 after:h-px after:bottom-0 after:bg-cu-red after:left-px">
                Whatcha talkin bout Willis?
              </h2>
            </header>

            <div
              className={`cu-column not-contained ${styles.cols} ${styles.cols4} ${styles.width1536}`}
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
