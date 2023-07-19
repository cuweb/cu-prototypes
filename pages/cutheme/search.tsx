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
  DropDown,
} from '@carletonuniversity/rds'

import { Listing } from '@components/Listing/Listing'
import { Checkbox } from '@components/Checkbox/Checkbox'
import { Select } from '@components/Select/Select'

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
                ({ id, title, link, date, image, alt, excerpt, tags, video }) => (
                  <Listing key={id}>
                    <a href="https://carleton.ca/webservices">
                    
                      <Listing.Content>
                        <Listing.PostMeta date={date} />
                        <Listing.Header text={title} />
                        <Listing.Excerpt text={excerpt} />
                        <Listing.Badges tags={tags} />
                      </Listing.Content>
                      <Listing.Video url={video}/>
                    </a>
                  </Listing>
                ),
              )}
            </StackedList>
            <Aside>
                            <DropDown
                buttonText="Sort Results"
                listItems={[
                  {
                    href: '',
                    title: 'By Name',
                  },
                  {
                    onClick: function Xa() {},
                    title: 'By Date',
                  },
                  {
                    href: '',
                    title: 'By Type',
                  },
                ]}
              <Select />
              <Checkbox/>
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
