import type { NextPage } from 'next'
import { VideoData as videoData } from '../../../data/VideoData'

import {
  Main,
  TopNav,
  Section,
  FooterBasic,
  Column,
  Banner,
  Container,
} from '@carletonuniversity/rds'

import { Card } from '@carletonuniversity/rds'

const NewsCards: NextPage = () => {
  return (
    <>
      <TopNav title="Carleton University" />
      <Banner
        title="Video Card Views"
        paragraph="Component Prototypes"
        align="left"
      />

      <Main>
        <Section hasProse>
          <Container>
            <Column cols="2" maxWidth="5xl">
              {videoData.slice(0, 2).map(({ id, source, title, tags }) => (
                <Card key={id}>
                  <Card.Video source={source} />
                  <Card.Content>
                    <Card.Header text={title} />
                  </Card.Content>
                  <Card.Badges tags={tags} />
                </Card>
              ))}
            </Column>
            <Column cols="3" maxWidth="5xl">
              {videoData.slice(0, 3).map(({ id, source, title, tags }) => (
                <Card key={id}>
                  <Card.Video source={source} />
                  <Card.Content>
                    <Card.Header text={title} />
                  </Card.Content>
                  <Card.Badges tags={tags} />
                </Card>
              ))}
            </Column>
            <Column cols="3" maxWidth="7xl">
              {videoData.slice(0, 3).map(({ id, source, title, tags }) => (
                <Card key={id}>
                  <Card.Video source={source} />
                  <Card.Content>
                    <Card.Header text={title} />
                  </Card.Content>
                  <Card.Badges tags={tags} />
                </Card>
              ))}
            </Column>
            <Column cols="4" maxWidth="7xl">
              {videoData.slice(0, 4).map(({ id, source, title, tags }) => (
                <Card key={id}>
                  <Card.Video source={source} />
                  <Card.Content>
                    <Card.Header text={title} />
                  </Card.Content>
                  <Card.Badges tags={tags} />
                </Card>
              ))}
            </Column>
          </Container>

          <Container bgColor="grey">
            <Column cols="2" maxWidth="5xl">
              {videoData.slice(0, 2).map(({ id, source, title, tags }) => (
                <Card key={id}>
                  <Card.Video source={source} />
                  <Card.Content>
                    <Card.Header text={title} />
                  </Card.Content>
                  <Card.Badges tags={tags} />
                </Card>
              ))}
            </Column>
            <Column cols="3" maxWidth="5xl">
              {videoData.slice(0, 3).map(({ id, source, title, tags }) => (
                <Card key={id}>
                  <Card.Video source={source} />
                  <Card.Content>
                    <Card.Header text={title} />
                  </Card.Content>
                  <Card.Badges tags={tags} />
                </Card>
              ))}
            </Column>
            <Column cols="3" maxWidth="7xl">
              {videoData.slice(0, 3).map(({ id, source, title, tags }) => (
                <Card key={id}>
                  <Card.Video source={source} />
                  <Card.Content>
                    <Card.Header text={title} />
                  </Card.Content>
                  <Card.Badges tags={tags} />
                </Card>
              ))}
            </Column>
            <Column cols="4" maxWidth="7xl">
              {videoData.slice(0, 4).map(({ id, source, title, tags }) => (
                <Card key={id}>
                  <Card.Video source={source} />
                  <Card.Content>
                    <Card.Header text={title} />
                  </Card.Content>
                  <Card.Badges tags={tags} />
                </Card>
              ))}
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default NewsCards
