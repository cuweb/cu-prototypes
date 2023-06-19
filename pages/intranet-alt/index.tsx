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
import { Profile } from 'blocks/intranet-alt/Profile'
import { Resources } from 'blocks/intranet-alt/Resources'

import { CommunityNews } from 'blocks/intranet/CommunityNews'
import { BulletinBoard } from 'blocks/intranet/BulletinBoard'
import { NumberStats } from 'blocks/intranet/NumberStats'
import { NewsEvents } from 'blocks/intranet/NewsEvents'

import { intranetAltNavData } from 'data/TopNavData'
import { LeaveDays } from 'blocks/intranet-alt/LeaveDays'

const IntranetAltHome: NextPage = () => {
  return (
    <>
      <TopBar
        title="Intranet"
        homeLink="/intranet"
        navLinks={intranetAltNavData}
      ></TopBar>

      <Main>
        <Section>
          <Container isGrey>
            <Profile />
            {/* <Heading text="Leave Information" maxWidth="7xl" />
            <LeaveDays /> */}
          </Container>

          <Container>
            <Heading text="Community News" maxWidth="7xl" />
            <Column cols="2/3" maxWidth="7xl">
              <Resources />
              <Resources />
            </Column>
          </Container>

          {/* <Container>
            <Heading text="Community News" maxWidth="7xl" />
            <CommunityNews />
            <BulletinBoard />
            <NewsEvents />
          </Container> */}

          {/* <Container isGrey>
            <NumberStats />
          </Container> */}
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default IntranetAltHome
