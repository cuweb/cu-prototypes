import React from 'react'
import { LinkItem, StackedList } from '@carletonuniversity/rds'
import { AppLinkData as appLinkData } from '../data/LinkData'

export const AppsListing = () => {
  return (
    <StackedList header="My Applications" hasShadow>
      {appLinkData.map(({ id, title, link }) => (
        <LinkItem key={id} as="li" link={link}>
          <LinkItem.Content>
            <LinkItem.Title title={title} link={link} />
          </LinkItem.Content>
        </LinkItem>
      ))}
    </StackedList>
  )
}
