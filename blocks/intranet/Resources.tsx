import React from 'react'
import { StackedList, Listing, Column } from '@carletonuniversity/rds'
import Link from 'next/link'
import { ResourceData } from '../../data/ResourceData'

export const Resources = () => {
  return (
    <Column cols="2" maxWidth="7xl">
      <Column.Content>
        <StackedList header="Your Resources" cols="2" hasBorder>
          {ResourceData.slice(0, 5).map(({ id, title, link }) => (
            <Listing key={id}>
              <Link href={link}>
                <Listing.Content>
                  <Listing.Header text={title} />
                </Listing.Content>
              </Link>
            </Listing>
          ))}
        </StackedList>
      </Column.Content>

      <Column.Content>
        <StackedList header="Popular Resources" cols="2" hasBorder>
          {ResourceData.slice(0, 6).map(({ id, title, link }) => (
            <Listing key={id}>
              <Link href={link}>
                <Listing.Content>
                  <Listing.Header text={title} />
                </Listing.Content>
              </Link>
            </Listing>
          ))}
        </StackedList>
      </Column.Content>
    </Column>
  )
}
