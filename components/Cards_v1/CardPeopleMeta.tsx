import React from 'react'
import { metaStyles } from './Card.Styles'

export interface CardPeopleMetaProps {
  jobTitle?: string
  email?: string
  phone?: string
}

export const CardPeopleMeta = ({
  email,
  phone,
  jobTitle,
}: CardPeopleMetaProps) => {
  return (
    <>
      <p className={metaStyles.singleLarge}>{jobTitle}</p>
      <ul className="pt-3 space-y-1">
        <li className="text-sm font-semibold text-cyan-700 hover:text-cu-red @lg:md:text-base">
          {email}
        </li>
        <li className="text-sm text-cu-black-600 hover:text-cu-red @lg:md:text-base">
          {phone}
        </li>
      </ul>
    </>
  )
}
