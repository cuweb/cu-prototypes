import React from 'react'
import { metaStyles } from './Card.Styles'

export interface CardVideoMetaProps {
  duration?: string | Date
}

export const CardVideoMeta = ({ duration }: CardVideoMetaProps) => {
  return (
    <div>
      <p className={metaStyles.singleItem}>
        {duration && 'Duration: ' + duration}
      </p>
    </div>
  )
}
