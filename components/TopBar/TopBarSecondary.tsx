import React from 'react'

export interface TopBarSecondaryProps {
  children: React.ReactNode
}

export const TopBarSecondary = ({ children }: TopBarSecondaryProps) => {
  return (
    <div className="sticky top-0 z-50 border-t bg-cu-black-25 border-t-cu-black-100">
      <div className="flex items-center gap-8 px-8 py-3 mx-auto max-w-screen-2xl">
        {children}
      </div>
    </div>
  )
}

TopBarSecondary.displayName = 'TopBar.Secondary'
