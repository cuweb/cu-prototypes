import type { NextPage } from 'next'
import {
  Main,
  Section,
  FooterBasic,
  Column,
  HeroTextImage,
  Listing,
  SearchForm,
  Pagination,
  StackedList,
  Aside,
  Container,
  Heading,
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
            <HeroTextImage.Content title="Site Search" />
          </HeroTextImage>

          <Container>
            <SearchBar />
          </Container>

          <Container>
          <Filter filters={dataFilter.filters} callback={() => undefined} sortOptions={dataFilter.sortOptions} sortDirection={dataFilter.sortDirection}/>
          </Container>

          <Column cols="">
            <StackedList>
              {NewsData.slice(0, 5).map(
                ({ id, title, link, date, image, alt, excerpt }) => (
                  <Listing key={id}>
                    <a href="https://carleton.ca/webservices">
                      <Listing.Figure>
                          <img src={image} alt={title} width="400" height="266" />
                      </Listing.Figure>
                      <Listing.Content>
                        <Listing.PostMeta date={date} />
                        <Listing.Header text={title} />
                        <Listing.Excerpt text={excerpt} />
                      </Listing.Content>
                    </a>
                  </Listing>
                ),
              )}
            </StackedList>
          </Column>

          <PageSelect />
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home
