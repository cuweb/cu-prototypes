import type { NextPage } from 'next'

import {
  Main,
  TopNav,
  Section,
  FooterBasic,
  Container,
  Banner,
  Heading,
  Column,
} from '@carletonuniversity/rds'

import { Description } from '@components/Description/Description'
import { DescriptionData as descriptionData } from '../../data/DescriptionData'

const SinglePara = () => {
  return (
    <>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium
        architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi
        delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

const DoublePara = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet
        tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus
        imperdiet turpis nec elit ultricies, sed tempus diam dignissim.
        Suspendisse condimentum magna vel orci vulputate, eget vulputate neque
        porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus
        vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis
        interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit
        tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
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
      <TopNav title="Carleton University" />
      <Banner title="Web Services Prototypes" isType="dark-wave" align="left" />

      <Main>
        <Section>
          <Container hasProse>
            <SinglePara />

            <Heading text="Description List in Rows" />
            <Description>
              {descriptionData.map(({ id, term, details }) => (
                <Description.Meta key={id} term={term}>
                  {details}
                </Description.Meta>
              ))}
            </Description>

            <Heading text="Description List in Columns" />
            <Description>
              {descriptionData.map(({ id, term, details }) => (
                <Description.Meta key={id} term={term} useColumns>
                  {details}
                </Description.Meta>
              ))}
            </Description>

            <Heading text="Description List as Accordions" />
            <Description>
              {descriptionData.map(({ id, term, details }) => (
                <Description.Accordion key={id} term={term}>
                  {details}
                </Description.Accordion>
              ))}
            </Description>

            <SinglePara />
            <h2>This is a header two</h2>
            <DoublePara />
            <h3>This is a header three</h3>
            <SinglePara />
            <Column cols="2">
              <div>
                <SinglePara />
              </div>
              <div>
                <SinglePara />
              </div>
            </Column>
            <SinglePara />
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home
