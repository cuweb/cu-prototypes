import type { NextPage } from 'next'

import {
  Main,
  TopNav,
  Section,
  FooterBasic,
  Column,
  Panel,
  Container,
  Heading,
} from '@carletonuniversity/rds'

import { EventsListing } from 'blocks/EventsListing'
import { LinksListing } from 'blocks/LinksListing'
import { AppsListing } from 'blocks/AppsListing'
import { MarketplaceListing } from 'blocks/MarketplaceListing'

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
                <Panel hasShadow>
                  <div className="p-4 h-96">UserInfo</div>
                </Panel>
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
