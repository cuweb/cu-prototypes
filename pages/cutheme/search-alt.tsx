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
            {SearchData.slice(0, 12).map(
              ({
                id,
                type,
                title,
                link,
                excerpt,
                image,
                date,
                alt,
                tags,
                startDate,
                endDate,
                on_campus_building,
                on_campus_room_number,
                firstName,
                lastName,
                jobTitle,
                email,
                phone,
                phoneExt,
              }) => (
                <Listing key={id}>
                  {/* If type is news render as news listing */}
                  {type === 'news' && (
                    <a href={link}>
                      <Listing.Figure>
                        <Image alt={alt} height="266" src={image} width="400" />
                      </Listing.Figure>
                      <Listing.Content>
                        <Listing.PostMeta date={date} />
                        <Listing.Header text={title} />
                        <Listing.Excerpt text={excerpt} />
                        <Listing.Badges tags={tags} />
                      </Listing.Content>
                    </a>
                  )}

                  {/* If type is event render as event listing */}
                  {type === 'event' && (
                    <a href={link}>
                      <Listing.DateBox
                        startDate={startDate}
                        endDate={endDate}
                      />
                      <Listing.Content>
                        <Listing.Header text={title} />
                        <Listing.EventMeta
                          startDateTime={startDate}
                          endDateTime={endDate}
                          onCampus
                          onCampusBuilding={on_campus_building}
                          onCampusRoomNumber={on_campus_room_number}
                        />
                      </Listing.Content>
                    </a>
                  )}

                  {/* If type is people render as people listing */}
                  {type === 'people' && (
                    <a href={link}>
                      <Listing.Figure size="small">
                        <Image alt={alt} height="200" src={image} width="200" />
                      </Listing.Figure>
                      <Listing.Content>
                        <Listing.Header text={`${firstName} ${lastName}`} />
                        <Listing.PeopleMeta
                          email={email}
                          jobTitle={jobTitle}
                          phone={phone}
                        />
                      </Listing.Content>
                    </a>
                  )}

                  {/* If type is video render as video listing */}
                  {type === 'video' && (
                    <a href={link}>
                      <Listing.Figure>
                        <Image alt={alt} height="266" src={image} width="400" />
                      </Listing.Figure>
                      <Listing.Content>
                        <Listing.PostMeta date="2023-03-28 10:27:31" />
                        <Listing.Header text={title} />
                        <Listing.Excerpt text={excerpt} />
                        <Listing.Badges tags={tags} />
                      </Listing.Content>
                    </a>
                  )}
                </Listing>
              ),
            )}
          </StackedList>

          <PageSelect />
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home
