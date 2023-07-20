import type { NextPage } from 'next'
import {
  Main,
  Section,
  FooterBasic,
  HeroTextImage,
  Listing,
  SearchForm,
  Pagination,
  StackedList,
  Container,
} from '@carletonuniversity/rds'

import { Filter } from '@components/Filter/Filter'
import { FilterData as dataFilter } from 'data/FilterData'

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
            <HeroTextImage.Content
              title="Search Results"
              paragraph="You search for Academic Dates and got 1, 376 results."
              headerType="h1"
            />
          </HeroTextImage>

          <Container>
            <SearchBar />
            <br />
            <Filter
              filters={dataFilter.filters}
              callback={() => undefined}
              sortOptions={dataFilter.sortOptions}
              sortDirection={dataFilter.sortDirection}
            />
          </Container>

          <StackedList hasBorder cols="2">
            {NewsData.slice(0, 8).map(({ id, title, date, excerpt, tags }) => (
              <Listing key={id}>
                <a href="https://carleton.ca/webservices">
                  <Listing.Content>
                    <Listing.Header text={title} />
                    <Listing.Excerpt text={excerpt} />
                    <Listing.Badges tags={tags} />
                  </Listing.Content>
                </a>
              </Listing>
            ))}
          </StackedList>

          <PageSelect />
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home
