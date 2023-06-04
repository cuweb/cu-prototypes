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

import { EventsListing } from '../../blocks/intranet-v1/EventsListing'
import { LinksListing } from '../../blocks/intranet-v1/LinksListing'
import { AppsListing } from '../../blocks/intranet-v1/AppsListing'
import { FilesListing } from '../../blocks/intranet-v1/FilesListing'
import { MarketplaceListing } from '../../blocks/intranet-v1/MarketplaceListing'
import { BulletinListing } from '../../blocks/intranet-v1/BulletinListing'

const Home: NextPage = () => {
  return (
    <>
      <TopNav title="Carleton Intranet" />

      <Main>
        <Section>
          <Container isGrey>
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
