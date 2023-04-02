import React from 'react'
import { metaStyles } from './Card.Styles'

export interface CardVideoMetaProps {
  duration?: string | Date
}

export const CardVideoMeta = ({ duration }: CardVideoMetaProps) => {
  return (
    <div>
      <p className={metaStyles.singleItem}>
        {/* Duration: {`${duration.minutes}m : ${duration.seconds}s`} */}
        {duration && 'Duration: ' + duration}
      </p>
    </div>
  )
}
