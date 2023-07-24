/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { InView } from 'react-intersection-observer'
import { TopBarDropDown } from './TopBarDropDown'
import { TopBarMoreNav } from './TopBarMoreNav'

export const styles = {
  navWrapper: ``,
  navItem: `text-sm font-medium text-cu-black-600 whitespace-nowrap hover:text-cu-red whitespace-nowrap`,
  navMore: `text-cu-red`,
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
  console.log(sideMenu.length)

  return (
    <>
      {navLinks && (
        <>
          <ul className="flex gap-6 text-sm md:text-[15px] items-center overflow-hidden">
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
                      <a
                        ref={ref}
                        href={navMenuItem.link}
                        className={styles.navItem}
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
