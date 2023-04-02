import React from 'react'
import { metaStyles } from './Card.Styles'

export interface CardPeopleMetaProps {
  email?: string
  phone?: string
}

export const CardPeopleMeta = ({ email, phone }: CardPeopleMetaProps) => {
  return (
    <ul className={metaStyles.multiWrapper}>
      <li className={`${metaStyles.multiItem} ${metaStyles.itemBold}`}>
        {email}
      </li>
      <li className={metaStyles.multiItem}>{phone}</li>
    </ul>
  )
}
