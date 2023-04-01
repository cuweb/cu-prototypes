import React from 'react'
import { styles } from './Card.Styles'
import { CardImage } from './CardImage'
import { CardContent } from './CardContent'
import { CardDateBox } from './CardDateBox'
import { CardHeader } from './CardHeader'
import { CardExcerpt } from './CardExcerpt'
import { CardBadges } from './CardBadges'

export interface CardProps {
  children: React.ReactNode
}

export const CardWrapper = ({ children }: CardProps) => {
  return <div className={`${styles.card}`}>{children}</div>
}

export const Card = Object.assign(CardWrapper, {
  Image: CardImage,
  Content: CardContent,
  DateBox: CardDateBox,
  Header: CardHeader,
  Excerpt: CardExcerpt,
  Badges: CardBadges,
})
