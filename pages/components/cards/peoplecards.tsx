import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { PeopleData as peopleData } from '../../../data/PeopleData'

import {
  Main,
  TopNav,
  Section,
  FooterBasic,
  Column,
  Banner,
  Container,
} from '@carletonuniversity/rds'

import { Card } from '@components/Card/Card'

const PeopleCards: NextPage = () => {
  return (
    <>
      <TopNav title="Carleton University" />
      <Banner
        title="Card Views"
        paragraph="Component Prototypes"
        align="left"
      />

      <Main>
        <Section hasProse>
          <Container>
            <Column cols="2" maxWidth="5xl">
              {peopleData
                .slice(0, 2)
                .map(
                  ({
                    id,
                    link,
                    firstName,
                    lastName,
                    jobTitle,
                    email,
                    phone,
                    image,
                    alt,
                    tags,
                  }) => (
                    <Card key={id} isCenter>
                      <Link href={link}>
                        <Card.Figure isRound>
                          <Image
                            src={image}
                            alt={alt}
                            width={280}
                            height={280}
                          />
                        </Card.Figure>
                        <Card.Content>
                          <Card.Header text={`${firstName} ${lastName}`} />
                          <Card.PeopleMeta
                            jobTitle={jobTitle}
                            email={email}
                            phone={phone}
                          />
                        </Card.Content>
                        <Card.Badges tags={tags} />
                      </Link>
                    </Card>
                  ),
                )}
            </Column>
            <Column cols="3" maxWidth="5xl">
              {peopleData
                .slice(0, 3)
                .map(
                  ({
                    id,
                    link,
                    firstName,
                    lastName,
                    jobTitle,
                    email,
                    phone,
                    image,
                    alt,
                    tags,
                  }) => (
                    <Card key={id} isCenter>
                      <Link href={link}>
                        <Card.Figure isRound>
                          <Image
                            src={image}
                            alt={alt}
                            width={280}
                            height={280}
                          />
                        </Card.Figure>
                        <Card.Content>
                          <Card.Header text={`${firstName} ${lastName}`} />
                          <Card.PeopleMeta
                            jobTitle={jobTitle}
                            email={email}
                            phone={phone}
                          />
                        </Card.Content>
                        <Card.Badges tags={tags} />
                      </Link>
                    </Card>
                  ),
                )}
            </Column>
            <Column cols="3" maxWidth="7xl">
              {peopleData
                .slice(0, 3)
                .map(
                  ({
                    id,
                    link,
                    firstName,
                    lastName,
                    jobTitle,
                    email,
                    phone,
                    image,
                    alt,
                    tags,
                  }) => (
                    <Card key={id} isCenter>
                      <Link href={link}>
                        <Card.Figure isRound>
                          <Image
                            src={image}
                            alt={alt}
                            width={280}
                            height={280}
                          />
                        </Card.Figure>
                        <Card.Content>
                          <Card.Header text={`${firstName} ${lastName}`} />
                          <Card.PeopleMeta
                            jobTitle={jobTitle}
                            email={email}
                            phone={phone}
                          />
                        </Card.Content>
                        <Card.Badges tags={tags} />
                      </Link>
                    </Card>
                  ),
                )}
            </Column>
            <Column cols="4" maxWidth="7xl">
              {peopleData
                .slice(0, 4)
                .map(
                  ({
                    id,
                    link,
                    firstName,
                    lastName,
                    jobTitle,
                    email,
                    phone,
                    image,
                    alt,
                    tags,
                  }) => (
                    <Card key={id} isCenter>
                      <Link href={link}>
                        <Card.Figure isRound>
                          <Image
                            src={image}
                            alt={alt}
                            width={280}
                            height={280}
                          />
                        </Card.Figure>
                        <Card.Content>
                          <Card.Header text={`${firstName} ${lastName}`} />
                          <Card.PeopleMeta
                            jobTitle={jobTitle}
                            email={email}
                            phone={phone}
                          />
                        </Card.Content>
                        <Card.Badges tags={tags} />
                      </Link>
                    </Card>
                  ),
                )}
            </Column>
          </Container>

          <Container bgColor="grey">
            <Column cols="2" maxWidth="5xl">
              {peopleData
                .slice(0, 2)
                .map(
                  ({
                    id,
                    link,
                    firstName,
                    lastName,
                    jobTitle,
                    email,
                    phone,
                    image,
                    alt,
                    tags,
                  }) => (
                    <Card key={id} isCenter>
                      <Link href={link}>
                        <Card.Figure isRound>
                          <Image
                            src={image}
                            alt={alt}
                            width={280}
                            height={280}
                          />
                        </Card.Figure>
                        <Card.Content>
                          <Card.Header text={`${firstName} ${lastName}`} />
                          <Card.PeopleMeta
                            jobTitle={jobTitle}
                            email={email}
                            phone={phone}
                          />
                        </Card.Content>
                        <Card.Badges tags={tags} />
                      </Link>
                    </Card>
                  ),
                )}
            </Column>
            <Column cols="3" maxWidth="5xl">
              {peopleData
                .slice(0, 3)
                .map(
                  ({
                    id,
                    link,
                    firstName,
                    lastName,
                    jobTitle,
                    email,
                    phone,
                    image,
                    alt,
                    tags,
                  }) => (
                    <Card key={id} isCenter>
                      <Link href={link}>
                        <Card.Figure isRound>
                          <Image
                            src={image}
                            alt={alt}
                            width={280}
                            height={280}
                          />
                        </Card.Figure>
                        <Card.Content>
                          <Card.Header text={`${firstName} ${lastName}`} />
                          <Card.PeopleMeta
                            jobTitle={jobTitle}
                            email={email}
                            phone={phone}
                          />
                        </Card.Content>
                        <Card.Badges tags={tags} />
                      </Link>
                    </Card>
                  ),
                )}
            </Column>
            <Column cols="3" maxWidth="7xl">
              {peopleData
                .slice(0, 3)
                .map(
                  ({
                    id,
                    link,
                    firstName,
                    lastName,
                    jobTitle,
                    email,
                    phone,
                    image,
                    alt,
                    tags,
                  }) => (
                    <Card key={id} isCenter>
                      <Link href={link}>
                        <Card.Figure isRound>
                          <Image
                            src={image}
                            alt={alt}
                            width={280}
                            height={280}
                          />
                        </Card.Figure>
                        <Card.Content>
                          <Card.Header text={`${firstName} ${lastName}`} />
                          <Card.PeopleMeta
                            jobTitle={jobTitle}
                            email={email}
                            phone={phone}
                          />
                        </Card.Content>
                        <Card.Badges tags={tags} />
                      </Link>
                    </Card>
                  ),
                )}
            </Column>
            <Column cols="4" maxWidth="7xl">
              {peopleData
                .slice(0, 4)
                .map(
                  ({
                    id,
                    link,
                    firstName,
                    lastName,
                    jobTitle,
                    email,
                    phone,
                    image,
                    alt,
                    tags,
                  }) => (
                    <Card key={id} isCenter>
                      <Link href={link}>
                        <Card.Figure isRound>
                          <Image
                            src={image}
                            alt={alt}
                            width={280}
                            height={280}
                          />
                        </Card.Figure>
                        <Card.Content>
                          <Card.Header text={`${firstName} ${lastName}`} />
                          <Card.PeopleMeta
                            jobTitle={jobTitle}
                            email={email}
                            phone={phone}
                          />
                        </Card.Content>
                        <Card.Badges tags={tags} />
                      </Link>
                    </Card>
                  ),
                )}
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default PeopleCards
