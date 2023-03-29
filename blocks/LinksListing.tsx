import React from 'react'
import { LinkItem, StackedList } from '@carletonuniversity/rds'
import { KeyLinksData as keyLinkData } from '../data/LinkData'

export const LinksListing = () => {
  return (
    <StackedList header="Links & Resources" hasShadow>
      {keyLinkData.map(({ id, title, link }) => (
        <LinkItem key={id} as="li" link={link}>
          <LinkItem.Content>
            <LinkItem.Title title={title} link={link} />
          </LinkItem.Content>
        </LinkItem>
      ))}
    </StackedList>
  )
}
