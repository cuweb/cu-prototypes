import { useState } from 'react'
import { InView } from 'react-intersection-observer'
import { PlusBarSubNav } from './PlusBarSubNav'
import Link from 'next/link'

export const PlusBarNav = ({ navLinks, className }: any) => {
  // create sub menu for invisible items
  const [subMenu, setSubMenu] = useState<any>([])

  // add or remove menu item to sub menu based on visisbility
  const updateMenu = (inView: any, entry: any, menuItem: any) => {
    if (inView) {
      subMenu.pop()
      entry.target.classList.toggle('invisible')
      setSubMenu((subMenu: any) => [...subMenu])
    } else {
      entry.target.classList.toggle('invisible')
      setSubMenu((subMenu: any) => [...subMenu, menuItem])
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
        <div className='inline-block mr-4'>{subMenu.length > 0 && <PlusBarSubNav subMenu={subMenu} />}</div>
        <div className="inline-block px-4 py-2 font-medium rounded text-cu-black-800 bg-cu-black-100">
          Buttons
        </div>
      </div>
    </>
  )
}
