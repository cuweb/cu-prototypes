/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { InView } from 'react-intersection-observer'
import Link from 'next/link'

export const styles = {
  navWrapper: `flex max-w-screen-2xl w-full gap-6 text-sm md:text-[15px] overflow-hidden items-center mx-auto px-8 py-3`,
  navItem: `hover:text-cu-red`,
  navMore: `font-medium text-cu-red`,
}

export const TopBarMenu = ({ navLinks }: any) => {
  // create sub menu for invisible items
  const [sideMenu, setSideMenu] = useState<any>([])

  // add or remove menu item to sub menu based on visisbility
  const updateMenu = (inView: any, entry: any, menuItem: any) => {
    entry.target.classList.toggle('invisible', !inView)
    if (inView) {
      sideMenu.pop()
      setSideMenu((sideMenu: any) => [...sideMenu])
    } else {
      setSideMenu((sideMenu: any) => [...sideMenu, menuItem])
    }
  }

  console.log(navLinks)
  console.log(sideMenu)

  return (
    <>
      {navLinks && (
        <ul className={styles.navWrapper}>
          {navLinks.map((navMenuItem: any, index: any) => (
            <InView
              key={index}
              threshold={0.99}
              onChange={(inView, entry) =>
                updateMenu(inView, entry, navMenuItem)
              }
            >
              {({ ref }) => (
                <li ref={ref} className="invisible">
                  {!navMenuItem.subMenu && (
                    <Link
                      ref={ref}
                      href={navMenuItem.link}
                      className="text-sm font-medium text-cu-black-600 whitespace-nowrap hover:text-cu-red"
                    >
                      {navMenuItem.label}
                    </Link>
                  )}
                  {navMenuItem.subMenu && (
                    <Link
                      ref={ref}
                      href={navMenuItem.link}
                      className="text-sm font-medium text-cu-black-600 whitespace-nowrap hover:text-cu-red"
                    >
                      {navMenuItem.label}
                    </Link>
                    // <PlusNavNewDropDown
                    //   navItemLabel={navMenuItem.label}
                    //   navSubMenu={navMenuItem.subMenu}
                    // />
                  )}
                </li>
              )}
            </InView>
          ))}
        </ul>
      )}
    </>
  )
}

TopBarMenu.displayName = 'TopBar.Menu'
