import type { NextPage } from 'next'
import {
  Main,
  Section,
  FooterBasic,
  Column,
  Heading,
  Card,
  HeroTextImage,
  SearchForm,
  Pagination,
  StackedList,
  Aside,
  Container,
} from '@carletonuniversity/rds'

import { Listing } from '@components/Listing/Listing'

import React, { useState, useCallback } from 'react'

import { TopBarOld } from '@components/TopBarOld/TopBarOld'
import { cuthemeNavData } from 'data/TopNavData'

import { NewsData } from 'data/NewsData'

const SearchBar = () => {
  const [, setMessage] = useState('')
  const callback = useCallback(
    (message: string) => {
      setMessage(message)
    },
    [setMessage],
  )
  return <SearchForm callback={callback} />
}

const PageSelect = () => {
  return (
    <Pagination
      hasBorder
      totalCount={48}
      siblingCount={1}
      pageSize={5}
      callback={() => undefined}
    />
  )
}

const Home: NextPage = () => {
  return (
    <>
      <TopBarOld
        title="Information and Technology Services"
        homeLink="/cutheme"
        navLinks={cuthemeNavData}
        isTwoTier
      ></TopBarOld>

      <Main>
        <Section hasProse>
          <HeroTextImage maxWidth="5xl">
            <HeroTextImage.Content title="Site Search" />
          </HeroTextImage>
          <Container>
            <SearchBar />
          </Container>
          <Column cols="2/3">
            <StackedList>
              {NewsData.slice(0, 5).map(
                ({ id, title, link, date, image, alt, excerpt, tags }) => (
                  <Listing key={id}>
                    <a href="https://carleton.ca/webservices">
                      <Listing.Content>
                        <Listing.PostMeta date={date} />
                        <Listing.Header text={title} />
                        <Listing.Excerpt text={excerpt} />
                        <Listing.Badges tags={tags} />
                      </Listing.Content>
                    </a>
                  </Listing>
                ),
              )}
            </StackedList>
            <Aside>
              <StackedList hasBorder>
                <li className="text-sm px-6 py-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam augue turpis, feugiat vitae viverra in, egestas vitae
                  nulla.
                </li>
                <li className="text-sm px-6 py-5">
                  Quisque auctor ultrices mauris, et semper urna aliquam quis.
                </li>
                <li className="text-sm px-6 py-5">
                  Suspendisse vestibulum hendrerit.
                </li>
              </StackedList>
            </Aside>
          </Column>
          <PageSelect />
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home
