import type { NextPage } from 'next'
import {
  Main,
  Section,
  FooterBasic,
  Container,
  Heading,
  Column,
} from '@carletonuniversity/rds'
import { TopBarOld } from '../../components/TopBarOld/TopBarOld'
import { intranetNavData } from 'data/TopNavData'

const IntranetResources: NextPage = () => {
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
            <Heading text="Resources" maxWidth="7xl" />
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

export default IntranetResources
