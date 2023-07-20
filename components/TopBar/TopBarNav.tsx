import { useState } from 'react'
import { InView } from 'react-intersection-observer'
import Link from 'next/link'
import { TopBarSideNav } from './TopBarSideNav'
import { TopBarDropDown } from './TopBarDropDown'
import { navItemStyles, navAsideStyles } from './TopBar.Styles'

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
      {navLinks && (
        <nav className={navItemStyles.navContainer}>
          {navLinks.map((navMenuItem: any, index: any) => (
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
                      className={navItemStyles.navItem}
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
        </nav>
      )}

      <div className={navAsideStyles.asideContainer}>
        {sideMenu.length > 0 && <TopBarSideNav sideMenu={sideMenu} />}

        {/* Mega Menu Button */}
        <button
          type="button"
          aria-label="global-carleton-navigation"
          className={navAsideStyles.megaMenuButton}
        >
          Menu
        </button>
      </div>
    </>
  )
}
