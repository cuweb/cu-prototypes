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
            <Heading text="Community" maxWidth="7xl" />
            <Column cols="2" maxWidth="7xl">
              <Column.Content>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  facilisis id neque sit amet convallis. Proin rutrum leo
                  turpis, quis fringilla nisi facilisis eget. Nunc nec
                  sollicitudin orci. Aenean a nibh ex. Etiam rhoncus vestibulum
                  magna, id gravida sem commodo at. Nullam vestibulum ante id
                  turpis pharetra porttitor.
                </p>
              </Column.Content>
              <Column.Content>
                <p>
                  Sed pulvinar elit ut lectus aliquet, id sodales tellus
                  laoreet. Nunc mollis quam quis finibus tristique. Curabitur id
                  hendrerit ipsum, placerat mattis nulla. Suspendisse vitae orci
                  eget quam eleifend hendrerit. Donec porta orci sem, a tempus
                  justo pretium et. Donec sit amet metus eu ante dictum accumsan
                  lectus.
                </p>
              </Column.Content>
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default IntranetCommunity
