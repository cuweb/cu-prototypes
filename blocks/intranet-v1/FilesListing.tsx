import React from 'react'
import { Listing, StackedList } from '@carletonuniversity/rds'
import Link from 'next/link'
import { FileData as fileData } from '../../data/FileData'

export const FilesListing = () => {
  return (
    <StackedList header="Files & Docs" hasShadow>
      {fileData.map(({ id, title, link }) => (
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
