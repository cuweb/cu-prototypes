import React from 'react'
import { StackedList, Listing, Column } from '@carletonuniversity/rds'
import Link from 'next/link'
import { ResourceData } from '../../data/ResourceData'

export const Resources = () => {
  return (
    <StackedList header="Key Resources" hasShadow>
      {ResourceData.slice(0, 10).map(({ id, title, link }) => (
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
