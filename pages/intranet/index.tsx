import type { NextPage } from 'next'
import {
  Main,
  Section,
  FooterBasic,
  Container,
  Heading,
  Column,
} from '@carletonuniversity/rds'
import { TopBar } from '../../components/TopBar/TopBar'

const styles = {
  placeholder: `border border-dashed border-cu-black-600 rounded-lg min-h-[240px] flex items-center justify-center`,
}

const colStyles = {
  cols: `mx-auto grid gap-10`,
  cols2: `md:grid-cols-2`,
  cols3: `md:grid-cols-3`,
  cols4: `md:grid-cols-2 lg:grid-cols-4`,
  cols_1_3: `lg:grid-cols-3 lg:[&>*:last-child]:col-span-2`,
  cols_2_3: `lg:grid-cols-3 lg:[&>*:first-child]:col-span-2`,
  width1280: `max-w-7xl`,
  width1536: `max-w-screen-2xl`,
  colSpan2: `col-span-2`,
}

const Home: NextPage = () => {
  return (
    <>
      <TopBar title="Intranet"></TopBar>

      <Main>
        <Section>
          <Container bgColor="grey">
            {/* Welcome and profile */}
            <Column cols="2/3" maxWidth="7xl">
              <div className={styles.placeholder}>Profile</div>
              <div className={styles.placeholder}>TBD</div>
            </Column>

            {/* Curated news from DUC */}
            <Heading text="Important News" maxWidth="7xl" />
            <Column cols="3" maxWidth="7xl">
              <div className={styles.placeholder}>News</div>
              <div className={styles.placeholder}>News</div>
              <div className={styles.placeholder}>News</div>
            </Column>

            {/* Community Connection */}
            <Heading text="Community Connect" maxWidth="7xl" />
            <Column cols="1/3" maxWidth="7xl">
              <div className={styles.placeholder}>Quick Access</div>
              <div className="bg-cu-black-50 min-h-[240px]">
                <div
                  className={`cu-column not-contained ${colStyles.cols} ${colStyles.cols2} ${colStyles.width1280}`}
                >
                  <div
                    className={`${styles.placeholder} ${colStyles.colSpan2}`}
                  >
                    Bulletin Board
                  </div>
                  <div className={styles.placeholder}>Internal News</div>
                  <div className={styles.placeholder}>Internal Events</div>
                </div>
              </div>
            </Column>
            <Column cols="2" maxWidth="7xl">
              <div className={styles.placeholder}>Ideas @ Carleton</div>
              <div className={styles.placeholder}>Marketplace</div>
            </Column>

            {/* By the numbers */}
            <Heading text="Carleton by the Numbers" maxWidth="7xl" />
            <Column cols="4" maxWidth="7xl">
              <div className={styles.placeholder}>Stat</div>
              <div className={styles.placeholder}>Stat</div>
              <div className={styles.placeholder}>Stat</div>
              <div className={styles.placeholder}>Stat</div>
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home
