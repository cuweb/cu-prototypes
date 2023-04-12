import React from 'react'
import { Listing, StackedList } from '@carletonuniversity/rds'
import Link from 'next/link'
import { AppLinkData as appLinkData } from '../../../data/LinkData'

export const AppsListing = () => {
  return (
    <StackedList header="My Applications" hasShadow>
      {appLinkData.map(({ id, title, link }) => (
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
