/* eslint-disable @next/next/no-img-element */
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { navAsideStyles } from './TopBar.Styles'

export const TopBarAside = () => {
  return (
    <div className={navAsideStyles.asideWrapper}>
      <MagnifyingGlassIcon className={navAsideStyles.searchIcon} />

      <ul className={navAsideStyles.unorderedList}>
        <li className={navAsideStyles.listHidden}>
          <a href="#" className={navAsideStyles.listItemLink}>
            Give
          </a>
        </li>
        <li>
          <a href="#" className={navAsideStyles.listItemLink}>
            Apply
          </a>
        </li>
        <li>
          <a href="#" className={navAsideStyles.listItemLink}>
            Login
          </a>
        </li>
      </ul>

      <button
        type="button"
        aria-label="global-cu-navigation"
        className={navAsideStyles.megaMenuButton}
      >
        Mega Man
      </button>
    </div>
  )
}

TopBarAside.displayName = 'TopBar.Aside'
