import React from 'react'

export interface TopBarSecondaryProps {
  children: React.ReactNode
}

export const TopBarSecondary = ({ children }: TopBarSecondaryProps) => {
  return (
    <div className="border-t bg-cu-black-25 border-t-cu-black-100">
      <div className="py-4 mx-auto px-9 max-w-screen-2xl">{children}</div>
    </div>
  )
}

TopBarSecondary.displayName = 'TopBar.Secondary'
