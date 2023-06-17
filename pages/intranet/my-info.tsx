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
import { CommunityNews } from 'blocks/intranet/CommunityNews'
import { BulletinBoard } from 'blocks/intranet/BulletinBoard'
import { NumberStats } from 'blocks/intranet/NumberStats'
import { Profile } from 'blocks/intranet/Profile'
import { Resources } from 'blocks/intranet/Resources'
import { NewsEvents } from 'blocks/intranet/NewsEvents'
import { intranetNavData } from 'data/TopNavData'
import { styles } from '../../blocks/intranet/Intranet.Styles'

const IntranetMyInfo: NextPage = () => {
  return (
    <>
      <TopBar
        title="Intranet 111"
        homeLink="/intranet/resources"
        navLinks={intranetNavData}
      ></TopBar>

      <Main>
        <Section>
          <Container isGrey>
            <Column cols="2/3" maxWidth="7xl">
              <div className={styles.placeholder}>Profile Details</div>
              <div className={styles.placeholder}>Internal Sites</div>
            </Column>
          </Container>

          <Container>
            <Column maxWidth="7xl">
              <div className={styles.placeholder}>Annual Leave</div>
            </Column>
            <Column cols="3" maxWidth="7xl">
              <div className={styles.placeholder}>Pay Dates</div>
              <div className={styles.placeholder}>Pension Statements</div>
              <div className={styles.placeholder}>Tax Forms</div>
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default IntranetMyInfo
