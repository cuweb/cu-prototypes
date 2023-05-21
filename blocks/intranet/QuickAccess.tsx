import React from 'react'
import { Listing, StackedList } from '@carletonuniversity/rds'
import Link from 'next/link'
import { FileData } from '../../data/FileData'
import { ResourceData } from '../../data/ResourceData'

export const QuickAccess = () => {
  return (
    <>
      <StackedList header="Files & Docs" hasBorder>
        {FileData.map(({ id, title, link }) => (
          <Listing key={id}>
            <Link href={link}>
              <Listing.Content isSmall>
                <Listing.Header text={title} />
              </Listing.Content>
            </Link>
          </Listing>
        ))}
      </StackedList>

      <StackedList header="Links & Resources" hasBorder>
        {ResourceData.map(({ id, title, link }) => (
          <Listing key={id}>
            <Link href={link}>
              <Listing.Content isSmall>
                <Listing.Header text={title} />
              </Listing.Content>
            </Link>
          </Listing>
        ))}
      </StackedList>
    </>
  )
}
