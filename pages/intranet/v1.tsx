import type { NextPage } from 'next'

import {
  Main,
  TopNav,
  Section,
  FooterBasic,
  Column,
  Container,
  Heading,
} from '@carletonuniversity/rds'

import { EventsListing } from '../../blocks/intranet/EventsListing'
import { LinksListing } from '../../blocks/intranet/LinksListing'
import { AppsListing } from '../../blocks/intranet/AppsListing'
import { FilesListing } from '../../blocks/intranet/FilesListing'
import { MarketplaceListing } from '../../blocks/intranet/MarketplaceListing'
import { BulletinListing } from '../../blocks/intranet/BulletinListing'

const Home: NextPage = () => {
  return (
    <>
      <TopNav title="Carleton Intranet" />

      <Main>
        <Section>
          <Container bgColor="grey">
            <Heading text="Dashboard" maxWidth="7xl" />
            <Column maxWidth="7xl" cols="1/3">
              <div>
                {/* <Panel hasShadow>
                  <div className="p-4 h-96">UserInfo</div>
                </Panel> */}
                <BulletinListing />
                <FilesListing />
                <AppsListing />
                <LinksListing />
              </div>

              <div>
                <EventsListing />
                <MarketplaceListing />
                {/* <Column cols="2">
                  <div>
                    <Panel hasShadow>
                      <div className="p-4 h-96">Panel Area</div>
                    </Panel>
                  </div>
                  <div>
                    <Panel hasShadow>
                      <div className="p-4 h-96">Panel Area</div>
                    </Panel>
                  </div>
                </Column> */}
              </div>
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home
