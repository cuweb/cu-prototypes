/* eslint-disable @next/next/no-img-element */
import React from 'react'

export const TopBarMenu = () => {
  return (
    <nav className="flex justify-between w-full text-sm md:text-base">
      <p>Navigation</p>
      <p>Browse</p>
    </nav>
  )
}

TopBarMenu.displayName = 'TopBar.Menu'
