import type { NextPage } from 'next'
import {
  Main,
  Section,
  FooterBasic,
  Column,
  HeroTextImage,
  SearchForm,
  Pagination,
  StackedList,
  Listing,
  Aside,
  Container,
} from '@carletonuniversity/rds'

import { ListingVideo } from '@components/Listing/ListingVideo'
import { Checkbox } from '@components/Checkbox/Checkbox'
import { Select } from '@components/Select/Select'

import React, { useState, useCallback } from 'react'

import { TopBarOld } from '@components/TopBarOld/TopBarOld'
import { cuthemeNavData } from 'data/TopNavData'

import { NewsData } from 'data/NewsData'
import Image from 'next/image'

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

// const FilterData = {
//   filters: [
//     {
//       id: '',
//       name: '',
//       options: {
//         value: '',
//         label: '',
//         checked: false,
//       },
//     },
//   ],
//   sortOptions: [
//     {
//       name: '',
//       href: '',
//       current: false,
//     },
//   ],
// }

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
        <Section maxWidth="7xl" hasProse>
          <HeroTextImage maxWidth="7xl">
            <HeroTextImage.Content title="Site Search" headerType="h1" />
          </HeroTextImage>

          <Container maxWidth="7xl">
            <SearchBar />
          </Container>

          <Column cols="2/3" maxWidth="7xl">
            <StackedList>
              {NewsData.slice(0, 5).map(
                ({ id, title, date, excerpt, image, alt, tags, video }) => (
                  <Listing key={id}>
                    <a href="https://carleton.ca/webservices">
                      {(video || image) && (
                        <Listing.Figure>
                          {video && !image && <ListingVideo source={video} />}
                          {image && !video && (
                            <Image
                              src={image}
                              alt={alt}
                              width="400"
                              height="266"
                            />
                          )}
                        </Listing.Figure>
                      )}
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

            <Aside isSticky>
              <Select />
              <Checkbox />
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
