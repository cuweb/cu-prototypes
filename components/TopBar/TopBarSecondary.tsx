import React from 'react'

export interface TopBarSecondaryProps {
  children: React.ReactNode
}

export const TopBarSecondary = ({ children }: TopBarSecondaryProps) => {
  return (
    <nav className="border-t bg-cu-black-25 border-t-cu-black-100">
      <div className="flex gap-6 px-8 py-3 mx-auto max-w-screen-2xl">
        {children}
      </div>
    </nav>
  )
}

TopBarSecondary.displayName = 'TopBar.Secondary'
