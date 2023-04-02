import React from 'react'
import { styles } from './Card.Styles'

export interface CardSubheaderProps {
  text?: string
}

export const CardSubheader = ({ text }: CardSubheaderProps) => {
  return <p className={styles.subheader}>{text}</p>
}
