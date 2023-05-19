import React from 'react'
import { styles } from './TopNav.Styles'

export interface TopNavProps {
  children: React.ReactNode
}

export const TopNavWrapper = ({ children }: TopNavProps) => {
  // const noLinkStyles = noLink ? 'cu-card--nolink' : styles.link
  // const centerText = isCenter ? 'text-center' : ''
  // const addBorder = border ? `${rdsBorderColor[border]} ${styles.border}` : ''

  return (
    <header className={`cu-topnav`}>
      <h1>CU</h1>
      {children}
    </header>
  )
}

export const TopNav = Object.assign(TopNavWrapper, {
  // Figure: TopNavFigure,
})
