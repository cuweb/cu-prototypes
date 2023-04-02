import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { NewsData as newsData } from '../../data/NewsData'

import {
  Main,
  TopNav,
  Section,
  FooterBasic,
  Column,
  Banner,
  Container,
} from '@carletonuniversity/rds'

import { Card } from '@components/Cards_v1/Card'

const NewsCards: NextPage = () => {
  return (
    <>
      <TopNav title="Carleton University" />
      <Banner
        title="News Card Views"
        paragraph="Component Prototypes"
        align="left"
      />

      <Main>
        <Section hasProse>
          <Container>
            <Column cols="2" maxWidth="5xl">
              {newsData
                .slice(0, 2)
                .map(({ id, title, link, image, alt, date, excerpt, tags }) => (
                  <Card key={id}>
                    <Link href={link}>
                      <Card.Figure>
                        <Image src={image} alt={alt} width={400} height={300} />
                      </Card.Figure>
                      <Card.Content>
                        <Card.PostMeta date={date} />
                        <Card.Header text={title} />
                        <Card.Excerpt text={excerpt} />
                      </Card.Content>
                      <Card.Badges tags={tags} />
                    </Link>
                  </Card>
                ))}
            </Column>
            <Column cols="3" maxWidth="5xl">
              {newsData
                .slice(0, 3)
                .map(({ id, title, link, image, alt, date, excerpt, tags }) => (
                  <Card key={id}>
                    <Link href={link}>
                      <Card.Figure>
                        <Image src={image} alt={alt} width={400} height={300} />
                      </Card.Figure>
                      <Card.Content>
                        <Card.PostMeta date={date} />
                        <Card.Header text={title} />
                        <Card.Excerpt text={excerpt} />
                      </Card.Content>
                      <Card.Badges tags={tags} />
                    </Link>
                  </Card>
                ))}
            </Column>
            <Column cols="3" maxWidth="7xl">
              {newsData
                .slice(0, 3)
                .map(({ id, title, link, image, alt, date, excerpt, tags }) => (
                  <Card key={id}>
                    <Link href={link}>
                      <Card.Figure>
                        <Image src={image} alt={alt} width={400} height={300} />
                      </Card.Figure>
                      <Card.Content>
                        <Card.PostMeta date={date} />
                        <Card.Header text={title} />
                        <Card.Excerpt text={excerpt} />
                      </Card.Content>
                      <Card.Badges tags={tags} />
                    </Link>
                  </Card>
                ))}
            </Column>
            <Column cols="4" maxWidth="7xl">
              {newsData
                .slice(0, 4)
                .map(({ id, title, link, image, alt, date, excerpt, tags }) => (
                  <Card key={id}>
                    <Link href={link}>
                      <Card.Figure>
                        <Image src={image} alt={alt} width={400} height={300} />
                      </Card.Figure>
                      <Card.Content>
                        <Card.PostMeta date={date} />
                        <Card.Header text={title} />
                        <Card.Excerpt text={excerpt} />
                      </Card.Content>
                      <Card.Badges tags={tags} />
                    </Link>
                  </Card>
                ))}
            </Column>
          </Container>

          <Container bgColor="grey">
            <Column cols="2" maxWidth="5xl">
              {newsData
                .slice(0, 2)
                .map(({ id, title, link, image, alt, date, excerpt, tags }) => (
                  <Card key={id}>
                    <Link href={link}>
                      <Card.Figure>
                        <Image src={image} alt={alt} width={400} height={300} />
                      </Card.Figure>
                      <Card.Content>
                        <Card.PostMeta date={date} />
                        <Card.Header text={title} />
                        <Card.Excerpt text={excerpt} />
                      </Card.Content>
                      <Card.Badges tags={tags} />
                    </Link>
                  </Card>
                ))}
            </Column>
            <Column cols="3" maxWidth="5xl">
              {newsData
                .slice(0, 3)
                .map(({ id, title, link, image, alt, date, excerpt, tags }) => (
                  <Card key={id}>
                    <Link href={link}>
                      <Card.Figure>
                        <Image src={image} alt={alt} width={400} height={300} />
                      </Card.Figure>
                      <Card.Content>
                        <Card.PostMeta date={date} />
                        <Card.Header text={title} />
                        <Card.Excerpt text={excerpt} />
                      </Card.Content>
                      <Card.Badges tags={tags} />
                    </Link>
                  </Card>
                ))}
            </Column>
            <Column cols="3" maxWidth="7xl">
              {newsData
                .slice(0, 3)
                .map(({ id, title, link, image, alt, date, excerpt, tags }) => (
                  <Card key={id}>
                    <Link href={link}>
                      <Card.Figure>
                        <Image src={image} alt={alt} width={400} height={300} />
                      </Card.Figure>
                      <Card.Content>
                        <Card.PostMeta date={date} />
                        <Card.Header text={title} />
                        <Card.Excerpt text={excerpt} />
                      </Card.Content>
                      <Card.Badges tags={tags} />
                    </Link>
                  </Card>
                ))}
            </Column>
            <Column cols="4" maxWidth="7xl">
              {newsData
                .slice(0, 4)
                .map(({ id, title, link, image, alt, date, excerpt, tags }) => (
                  <Card key={id}>
                    <Link href={link}>
                      <Card.Figure>
                        <Image src={image} alt={alt} width={400} height={300} />
                      </Card.Figure>
                      <Card.Content>
                        <Card.PostMeta date={date} />
                        <Card.Header text={title} />
                        <Card.Excerpt text={excerpt} />
                      </Card.Content>
                      <Card.Badges tags={tags} />
                    </Link>
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
