/* eslint-disable @next/next/no-img-element */
import React from 'react'

export const styles = {
  navWrapper: `flex w-full gap-6 text-sm md:text-[15px]`,
  navItem: `hover:text-cu-red`,
  navMore: `font-medium text-cu-red`,
}

export const TopBarMenu = () => {
  return (
    <nav>
      <ul className={styles.navWrapper}>
        <li>
          <a href="#" className={styles.navItem}>
            Nav Item
          </a>
        </li>
        <li>
          <a href="#" className={styles.navItem}>
            Nav Item
          </a>
        </li>
        <li>
          <a href="#" className={styles.navItem}>
            Nav Item
          </a>
        </li>
        <li>
          <a href="#" className={styles.navMore}>
            Browse
          </a>
        </li>
      </ul>
    </nav>
  )
}

TopBarMenu.displayName = 'TopBar.Menu'
