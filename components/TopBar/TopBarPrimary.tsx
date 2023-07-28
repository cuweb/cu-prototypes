import React from 'react'
import { navBaseStyles } from './TopBar.Styles'

export interface TopBarPrimaryProps {
  children: React.ReactNode
}

export const TopBarPrimary = ({ children }: TopBarPrimaryProps) => {
  return (
    <div className="flex items-center h-[64px] gap-8 px-8 py-3 mx-auto max-w-screen-2xl cu-topbar--primary">
      {children}
    </div>
  )
  // return <div className={navBaseStyles.primaryWrapper}>{children}</div>
}

TopBarPrimary.displayName = 'TopBar.Primary'
