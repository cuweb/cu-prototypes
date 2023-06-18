import { useState } from 'react'
import { InView } from 'react-intersection-observer'
import { PlusBarSubNav } from './PlusBarSubNav'
import Link from 'next/link'

export const PlusBarNav = ({ navLinks, className }: any) => {
  // create sub menu for invisible items
  const [subMenu, setSubMenu] = useState<any>([])

  // add or remove menu item to sub menu based on visisbility
  const updateMenu = (inView: any, entry: any, menuItem: any) => {
    console.log(inView)
    if (inView) {
      subMenu.pop()
      setSubMenu((subMenu: any) => [...subMenu])
      entry.target.classList.toggle('invisible')
    } else {
      setSubMenu((subMenu: any) => [...subMenu, menuItem])
      entry.target.classList.toggle('invisible')
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
                <Link
                  ref={ref}
                  href={navMenuItem.link}
                  className="text-sm font-semibold leading-6 text-gray-900 invisible"
                >
                  {navMenuItem.label}
                </Link>
              )}
            </InView>
          ))}
      </div>
      <div className="flex-none">
        {subMenu.length > 0 && <PlusBarSubNav subMenu={subMenu} />}
      </div>
    </>
  )
}
