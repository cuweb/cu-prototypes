import React from 'react'
import { StackedList, Listing, Column } from '@carletonuniversity/rds'
import Link from 'next/link'
import { NewsData } from '../../data/NewsData'
import { EventData as eventData } from '../../data/EventData'

export const NewsEvents = () => {
  return (
    <StackedList header="Top 5" hasShadow>
      {NewsData.slice(0, 5).map(({ id, title, link, excerpt }) => (
        <Listing key={id}>
          <Link href={link}>
            <Listing.Content>
              <Listing.Header text={title} />
            </Listing.Content>
          </Link>
        </Listing>
      ))}
    </StackedList>
  )
}
