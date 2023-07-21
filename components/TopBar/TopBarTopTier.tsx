/* eslint-disable @next/next/no-img-element */
import React from 'react'

export interface TopBarTopTierProps {
  children: React.ReactNode
}

export const TopBarTopTier = ({ children }: TopBarTopTierProps) => {
  return (
    <div className="flex items-center gap-8 px-8 py-3 mx-auto max-w-screen-2xl">
      {children}
    </div>
  )
}

TopBarTopTier.displayName = 'TopBar.Logo'
