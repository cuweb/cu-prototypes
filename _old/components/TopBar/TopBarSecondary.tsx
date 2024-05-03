import React from 'react'
import { navBaseStyles } from './TopBar.Styles'

export interface TopBarSecondaryProps {
  children: React.ReactNode
}

export const TopBarSecondary = ({ children }: TopBarSecondaryProps) => {
  return (
    <nav className={navBaseStyles.secondaryWrapper}>
      <div className={navBaseStyles.navInnerWrapper}>{children}</div>
    </nav>
  )
}

TopBarSecondary.displayName = 'TopBar.Secondary'
