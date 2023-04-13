import React from 'react'
import { Listing, StackedList } from '@carletonuniversity/rds'
import Link from 'next/link'
import { KeyLinksData as keyLinkData } from '../../data/LinkData'

export const LinksListing = () => {
  return (
    <StackedList header="Links & Resources" hasShadow>
      {keyLinkData.map(({ id, title, link }) => (
        <Listing key={id}>
          <Link href={link}>
            <Listing.Content isSmall>
              <Listing.Header text={title} />
            </Listing.Content>
          </Link>
        </Listing>
      ))}
    </StackedList>
  )
}
