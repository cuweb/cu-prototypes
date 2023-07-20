import { useState } from 'react'
import { InView } from 'react-intersection-observer'
import Link from 'next/link'
import { TopBarSideNav } from './TopBarSideNav'
import { TopBarDropDown } from './TopBarDropDown'

export const TopBarNav = ({ navLinks }: any) => {
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
      <div className="flex items-center gap-5 overflow-hidden">
        {navLinks &&
          navLinks.map((navMenuItem: any, index: any) => (
            <InView
              key={index}
              threshold={0.99}
              onChange={(inView, entry) =>
                updateMenu(inView, entry, navMenuItem)
              }
            >
              {({ ref }) => (
                <div ref={ref} className="invisible">
                  {!navMenuItem.subMenu && (
                    <Link
                      ref={ref}
                      href={navMenuItem.link}
                      className="text-sm font-medium text-cu-black-700 hover:text-cu-red"
                    >
                      {navMenuItem.label}
                    </Link>
                  )}
                  {navMenuItem.subMenu && (
                    <TopBarDropDown
                      navItemLabel={navMenuItem.label}
                      navSubMenu={navMenuItem.subMenu}
                    />
                  )}
                </div>
              )}
            </InView>
          ))}
      </div>

      <div className="flex items-center gap-4 ml-auto">
        {sideMenu.length > 0 && <TopBarSideNav sideMenu={sideMenu} />}

        {/* Mega Menu Button */}
        <button
          type="button"
          aria-label="Small Button"
          className="px-3 py-2 text-sm font-semibold rounded text-cu-black-700 md:px-4 md:py-3 whitespace-nowrap cu-button hover:text-white focus:outline-none bg-cu-black-100 hover:bg-cu-red"
        >
          Menu
        </button>
      </div>
    </>
  )
}
