import { useState } from 'react'
import { InView } from 'react-intersection-observer'
import { PlusBarSideNav } from './PlusBarSideNav'
import Link from 'next/link'
import { PlusBarItem } from './PlusBarItem'

export const PlusBarNav = ({ navLinks, className }: any) => {
  // create sub menu for invisible items
  const [sideMenu, setSideMenu] = useState<any>([])

  // add or remove menu item to sub menu based on visisbility
  const updateMenu = (inView: any, entry: any, menuItem: any) => {
    if (inView) {
      sideMenu.pop()
      entry.target.classList.toggle('invisible')
      setSideMenu((sideMenu: any) => [...sideMenu])
    } else {
      entry.target.classList.toggle('invisible')
      setSideMenu((sideMenu: any) => [...sideMenu, menuItem])
    }
  }

  return (
    <>
      <div className={className}>
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
                <>
                  {!navMenuItem.subMenu && (
                    <div ref={ref} className="invisible">
                      <Link
                        ref={ref}
                        href={navMenuItem.link}
                        className="text-sm font-semibold leading-6 text-gray-900"
                      >
                        {navMenuItem.label}
                      </Link>
                    </div>
                  )}
                  {navMenuItem.subMenu && (
                    <div ref={ref} className="invisible">
                      <PlusBarItem
                        navItemLabel={navMenuItem.label}
                        navSubMenu={navMenuItem.subMenu}
                      />
                    </div>
                  )}
                </>
              )}
            </InView>
          ))}
      </div>
      <div className="flex-none">
        <div className="inline-block mr-4">
          {sideMenu.length > 0 && <PlusBarSideNav sideMenu={sideMenu} />}
        </div>
        <div className="inline-block px-4 py-2 font-medium rounded text-cu-black-800 bg-cu-black-100">
          Buttons
        </div>
      </div>
    </>
  )
}
