import React from 'react'
import { Listing, StackedList } from '@carletonuniversity/rds'
import Link from 'next/link'
import { NewsData } from '../../data/NewsData'
// import Image from 'next/image'

export const InternalNews = () => {
  return (
    <StackedList header="Internal News" hasBorder>
      {NewsData.slice(0, 5).map(({ id, title, link, date }) => (
        <Listing key={id}>
          <Link href={link}>
            {/* <Listing.Figure>
              <Image src={image} alt={alt} width="400" height="266" />
            </Listing.Figure> */}
            <Listing.Content>
              <Listing.PostMeta date={date} />
              <Listing.Header text={title} />
              {/* <Listing.Excerpt text={excerpt} /> */}
            </Listing.Content>
          </Link>
        </Listing>
      ))}
    </StackedList>
  )
}
