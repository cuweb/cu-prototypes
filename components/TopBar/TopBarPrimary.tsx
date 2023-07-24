import React from 'react'
import { navBaseStyles } from './TopBar.Styles'

export interface TopBarPrimaryProps {
  children: React.ReactNode
}

export const TopBarPrimary = ({ children }: TopBarPrimaryProps) => {
  return <div className={navBaseStyles.primaryWrapper}>{children}</div>
}

TopBarPrimary.displayName = 'TopBar.Primary'
