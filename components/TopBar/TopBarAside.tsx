/* eslint-disable @next/next/no-img-element */
import React from 'react'

export const TopBarAside = () => {
  return (
    <div className="ml-auto">
      <button
        type="button"
        aria-label="global-carleton-navigation"
        className="px-3 py-2 text-sm font-medium rounded md:text-base text-cu-black-700 md:px-4 md:py-3 whitespace-nowrap cu-button hover:text-white focus:outline-none bg-cu-black-100 hover:bg-cu-red"
      >
        Mega-Manu
      </button>
    </div>
  )
}

TopBarAside.displayName = 'TopBar.Aside'
