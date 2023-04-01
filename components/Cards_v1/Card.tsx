import React from 'react'
import { styles } from './Card.Styles'
import { CardImage } from './CardImage'
import { CardContent } from './CardContent'
import { CardDateBox } from './CardDateBox'
import { CardHeader } from './CardHeader'
import { CardPostMeta } from './CardPostMeta'
import { CardEventMeta } from './CardEventMeta'
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
  PostMeta: CardPostMeta,
  EventMeta: CardEventMeta,
  Excerpt: CardExcerpt,
  Badges: CardBadges,
})
