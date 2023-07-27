/* eslint-disable @next/next/no-img-element */
import React, { PropsWithChildren, useState } from 'react'
import { InView } from 'react-intersection-observer'
import { TopBarSubMenu } from './TopBarSubMenu'
import { TopBarMoreNav } from './TopBarMoreNav'
import { navItemStyles } from './TopBar.Styles'

export const TopBarMenu = (props: PropsWithChildren) => {
  // create sub menu for invisible items
  const [sideMenu, setSideMenu] = useState<any>([])
  const navLinks = React.Children.toArray(props.children)
  // add or remove menu item to sub menu based on visisbility
  const updateMenu = (inView: any, entry: any, menuItem: any) => {
    entry.target.classList.toggle('invisible', !inView)
    if (inView) {
      sideMenu.shift()
      setSideMenu((sideMenu: any) => [...sideMenu])
    } else {
      setSideMenu((sideMenu: any) => [menuItem, ...sideMenu])
    }
    console.log(inView)
  }

  // return <>{navLinks.map((navMenuItem: any) => navMenuItem)}</>

  return (
    <>
      {navLinks && (
        <>
          <ul className={`${navItemStyles.navWrapper}`}>
            {/* <ul className={`${navItemStyles.navWrapper} max-w-3xl bg-cyan-300`}> */}
            {navLinks.map((navMenuItem: any, index: number) => (
              <InView
                key={'nav-' + index}
                threshold={0.99}
                onChange={(inView, entry) =>
                  updateMenu(inView, entry, navMenuItem)
                }
              >
                {({ ref }) => (
                  <li ref={ref} className="invisible">
                    {navMenuItem}
                  </li>
                )}
              </InView>
            ))}
          </ul>

          {/* <ul className="flex items-center"> */}
          {sideMenu.length > 0 && <TopBarMoreNav sideMenu={sideMenu} />}
          {/* </ul> */}
        </>
      )}
    </>
  )
}

TopBarMenu.displayName = 'TopBar.Menu'
