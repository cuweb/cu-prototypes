import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'

import {
  Main,
  TopNav,
  //   Banner,
  Section,
  //   Container,
  FooterBasic,
  Column,
  Aside,
  Panel,
  StackedList,
  EventItem,
  Container,
} from '@carletonuniversity/rds'

import { EventData as eventData } from '../../data/EventData'
import { EventsListing } from 'blocks/EventsListing'

const SinglePara = () => {
  return (
    <>
      <p>
        <strong>Single Paragraph:</strong> Nobis voluptatem dolorum et eum
        doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem
        non. Molestiae quas dolores accusamus in. Praesent quis ligula quis
        nulla malesuada tempor.
      </p>
    </>
  )
}

const DoublePara = () => {
  return (
    <>
      <p>
        <strong>Double Paragraph:</strong> Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Aenean sit amet tortor pellentesque,
        posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit
        ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel
        orci vulputate, eget vulputate neque porttitor. Suspendisse euismod,
        urna et gravida volutpat, tortor risus vehicula nisl, in vulputate
        lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus.
        Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis,
        quis pulvinar metus sapien in urna.
      </p>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium
        architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi
        delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

const Home: NextPage = () => {
  return (
    <>
      <TopNav title="Carleton Intranet" />

      <Main>
        <Section>
          <Container bgColor="grey">
            <Column maxWidth="7xl" cols="1/3">
              <Aside>
                <Panel hasShadow>
                  <div className="p-4 h-96">UserInfo</div>
                </Panel>
                <Panel hasShadow>
                  <div className="h-48 p-4">Panel</div>
                </Panel>
              </Aside>
              <div>
                <EventsListing />
                <Column cols="2">
                  <div>
                    <Panel hasShadow>
                      <div className="h-32 p-4">Panel</div>
                    </Panel>
                    <Panel hasShadow>
                      <div className="p-4 h-96">Panel</div>
                    </Panel>
                  </div>
                  <div>
                    <Panel hasShadow>
                      <div className="h-48 p-4">Panel</div>
                    </Panel>
                    <Panel hasShadow>
                      <div className="p-4 h-60">Panel</div>
                    </Panel>
                  </div>
                </Column>
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
