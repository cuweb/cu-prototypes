import React from 'react'

export interface TopBarPrimaryProps {
  children: React.ReactNode
}

export const TopBarPrimary = ({ children }: TopBarPrimaryProps) => {
  return (
    <div className="flex items-center gap-8 px-8 py-3 mx-auto max-w-screen-2xl">
      {children}
    </div>
  )
}

TopBarPrimary.displayName = 'TopBar.Primary'
