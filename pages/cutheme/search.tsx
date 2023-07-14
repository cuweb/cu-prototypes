import type { NextPage } from 'next'
import {
  Main,
  Section,
  FooterBasic,
  Column,
  Heading,
  Card,
  HeroTextImage,
  Listing,
  SearchForm,
} from '@carletonuniversity/rds'

import React, { useState, useCallback } from 'react';

import { TopBarOld } from '@components/TopBarOld/TopBarOld'
import { cuthemeNavData } from 'data/TopNavData'
import Link from 'next/link'
import Image from 'next/image'

import { NewsData } from 'data/NewsData'

const SearchBar = () => {
  const [, setMessage] = useState('');
  const callback = useCallback((message: string) => {
    setMessage(message);
  }, [setMessage]);
  return <SearchForm callback={callback} />;
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

      <Column.Content>
      <SearchBar />
      {NewsData.slice(0, 3).map(
                    ({ id, title, link, date, image, alt, excerpt }) => (
                      <Listing key={id}>
                      <a href="https://carleton.ca/webservices">
                        <Listing.Content>
                          <Listing.PostMeta date={date} />
                          <Listing.Header text={title} />
                          <Listing.Excerpt text={excerpt} />
                        </Listing.Content>
                      </a>
                    </Listing>
                    ),
                  )}
      </Column.Content>
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home
