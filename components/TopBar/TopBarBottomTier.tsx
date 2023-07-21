/* eslint-disable @next/next/no-img-element */
import React from 'react'

export interface TopBarBottomTierProps {
  children: React.ReactNode
}

export const TopBarBottomTier = ({ children }: TopBarBottomTierProps) => {
  return (
    <div className="px-8 py-3 mx-auto border-t max-w-screen-2xl bg-cu-black-25 border-t-cu-black-100">
      {children}
    </div>
  )
}

TopBarBottomTier.displayName = 'TopBar.Logo'
