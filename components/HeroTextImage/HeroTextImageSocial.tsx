import React from 'react'
import { styles } from './HeroTextImage.Styles'

export interface HeroTextImageMediaProps {
  resume?: string
  linkedin?: string
  twitter?: string
  facebook?: string
}

export const HeroTextImageMedia = ({
  resume,
  linkedin,
  twitter,
  facebook,
}: HeroTextImageMediaProps) => {
  return (
    <ul>
      <li>Resume</li>
      <li>Facebook</li>
      <li>Facebook</li>
      <li>FB</li>
    </ul>
  )
}

HeroTextImageMedia.displayName = 'HeroTextImage.Media'
