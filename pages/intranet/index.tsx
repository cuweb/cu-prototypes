import type { NextPage } from 'next'
import {
  Main,
  Section,
  FooterBasic,
  Container,
  Heading,
} from '@carletonuniversity/rds'
import { TopBarOld } from '../../components/TopBarOld/TopBarOld'
import { CommunityNews } from 'blocks/intranet/CommunityNews'
import { BulletinBoard } from 'blocks/intranet/BulletinBoard'
import { TopFive } from 'blocks/intranet/TopFive'
import { NumberStats } from 'blocks/intranet/NumberStats'
import { Profile } from 'blocks/intranet/Profile'
import { Resources } from 'blocks/intranet/Resources'
import { NewsEvents } from 'blocks/intranet/NewsEvents'
import { intranetNavData } from 'data/TopNavData'

const IntranetHome: NextPage = () => {
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
            <Profile />
          </Container>

          <Container>
            <Heading text="Community News" maxWidth="7xl" />
            <CommunityNews />
            <TopFive />
            <BulletinBoard />
            <NewsEvents />
          </Container>

          <Container>
            <Heading text="Popular Resources" maxWidth="7xl" />
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
