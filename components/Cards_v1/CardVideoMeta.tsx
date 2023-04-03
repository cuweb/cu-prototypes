import React from 'react'
import { metaStyles } from './Card.Styles'

export interface CardVideoMetaProps {
  duration?: string | Date
}

export const CardVideoMeta = ({ duration }: CardVideoMetaProps) => {
  return (
    <p className={`${metaStyles.item} ${metaStyles.italic}`}>
      {duration && 'Duration: ' + duration}
    </p>
  )
}
