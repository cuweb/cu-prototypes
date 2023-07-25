/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { InView } from 'react-intersection-observer'
import { TopBarDropDown } from './TopBarDropDown'
import { TopBarMoreNav } from './TopBarMoreNav'
import { navItemStyles } from './TopBar.Styles'

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

  return (
    <>
      {navLinks && (
        <>
          <ul className={navItemStyles.navWrapper}>
            {navLinks.map((navMenuItem: any) => (
              <InView
                key={navMenuItem.id}
                threshold={0.99}
                onChange={(inView, entry) =>
                  updateMenu(inView, entry, navMenuItem)
                }
              >
                {({ ref }) => (
                  <li ref={ref} className="invisible">
                    {!navMenuItem.subMenu && (
                      <a
                        ref={ref}
                        href={navMenuItem.link}
                        className={navItemStyles.navItem}
                      >
                        {navMenuItem.label}
                      </a>
                    )}
                    {navMenuItem.subMenu && (
                      <TopBarDropDown
                        navItemLabel={navMenuItem.label}
                        navSubMenu={navMenuItem.subMenu}
                      />
                    )}
                  </li>
                )}
              </InView>
            ))}
          </ul>

          <ul className="flex items-center">
            {sideMenu.length > 0 && <TopBarMoreNav sideMenu={sideMenu} />}
          </ul>
        </>
      )}
    </>
  )
}

TopBarMenu.displayName = 'TopBar.Menu'
