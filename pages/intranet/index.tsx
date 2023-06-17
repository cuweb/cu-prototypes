import type { NextPage } from 'next'
import {
  Main,
  Section,
  FooterBasic,
  Container,
  Heading,
} from '@carletonuniversity/rds'
import { TopBar } from '../../components/TopBar/TopBar'
import { CommunityNews } from 'blocks/intranet/CommunityNews'
import { BulletinBoard } from 'blocks/intranet/BulletinBoard'
import { NumberStats } from 'blocks/intranet/NumberStats'
import { Profile } from 'blocks/intranet/Profile'
import { Resources } from 'blocks/intranet/Resources'
import { NewsEvents } from 'blocks/intranet/NewsEvents'
import { intranetNavData } from 'data/TopNavData'

const IntranetHome: NextPage = () => {
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
            <Profile />
          </Container>

          <Container>
            <Heading text="Community News" maxWidth="7xl" />
            <CommunityNews />
            <BulletinBoard />
            <NewsEvents />
          </Container>

          <Container>
            <Heading text="Resources" maxWidth="7xl" />
            <Resources />
          </Container>

          <Container isGrey>
            <NumberStats />
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default IntranetHome
