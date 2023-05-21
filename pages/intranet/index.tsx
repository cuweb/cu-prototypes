import type { NextPage } from 'next'
import { Main, Section, FooterBasic, Container } from '@carletonuniversity/rds'
import { TopBar } from '../../components/TopBar/TopBar'
import { ImportantNews } from 'blocks/intranet/ImportantNews'
import { CommunityConnect } from 'blocks/intranet/Community'
import { NumberStats } from 'blocks/intranet/NumberStats'
import { Profile } from 'blocks/intranet/Profile'

const Home: NextPage = () => {
  return (
    <>
      <TopBar title="Intranet"></TopBar>

      <Main>
        <Section>
          <Container bgColor="grey">
            <Profile />
            <ImportantNews />
          </Container>

          <Container bgColor="white">
            <CommunityConnect />
          </Container>

          <Container bgColor="grey">
            <NumberStats />
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home
