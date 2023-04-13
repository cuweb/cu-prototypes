import React from 'react'
import { Listing, StackedList } from '@carletonuniversity/rds'
import { NewsData as newsData } from '../../data/NewsData'

export const BulletinListing = () => {
  return (
    <StackedList header="Bulletin Board" hasShadow>
      {newsData.slice(0, 4).map(({ id, title, date }) => (
        <Listing key={id} noLink>
          <Listing.Content isSmall>
            <Listing.PostMeta date={date} />
            <Listing.Header text={title} />
          </Listing.Content>
        </Listing>
      ))}
    </StackedList>
  )
}
