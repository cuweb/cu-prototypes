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
import { SearchData } from 'data/SearchData'

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
            {SearchData.slice(0, 12).map(({ id, type }) => (
              <Listing key={id}>
                <a href="https://carleton.ca/webservices">
                  {type === 'news' && <p>This is a news item</p>}
                  {type === 'event' && <p>This is an event item</p>}
                  {type === 'people' && <p>This is a people item</p>}
                  {type === 'video' && <p>This is a video item</p>}
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
