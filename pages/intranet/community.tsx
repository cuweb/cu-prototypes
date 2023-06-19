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

const IntranetCommunity: NextPage = () => {
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
            <BulletinBoard />
          </Container>

          <Container>
            <Column cols="2" maxWidth="7xl">
              <div className={styles.placeholder}>Ideas @ Carleton</div>
              <div className={styles.placeholder}>Marketplace</div>
            </Column>
            <Column cols="3" maxWidth="7xl">
              <div className={styles.placeholder}>Healthy Workplace</div>
              <div className={styles.placeholder}>Community News</div>
              <div className={styles.placeholder}>Community Events</div>
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default IntranetCommunity
