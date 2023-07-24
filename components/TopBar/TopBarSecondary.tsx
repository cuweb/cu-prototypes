import React from 'react'

export interface TopBarSecondaryProps {
  children: React.ReactNode
}

export const TopBarSecondary = ({ children }: TopBarSecondaryProps) => {
  return (
    <nav className="border-t bg-cu-black-25 border-t-cu-black-100">
      {children}
    </nav>
  )
}

TopBarSecondary.displayName = 'TopBar.Secondary'
