import { useState } from 'react'
import { InView } from 'react-intersection-observer'
import { PlusBarSubNav } from './PlusBarSubNav'

export const PlusBarNav = ({ navLinks, className }: any) => {
  // create sub menu for invisible items
  const [subMenu, setSubMenu] = useState<any>([])

  // add or remove menu item to sub menu based on visisbility
  const updateMenu = (inView: any, entry: any, menuItem: any) => {
    if (inView) {
      subMenu.pop()
      entry.target.classList.toggle('invisible')
      setSubMenu([...subMenu])
    } else {
      entry.target.classList.toggle('invisible')
      setSubMenu([...subMenu, menuItem])
    }
  }

  return (
    <>
      <div className={className}>
        {navLinks &&
          navLinks.map((navMenuItem: any, index: any) => (
            <InView
              as="a"
              key={index}
              onChange={(inView, entry) =>
                updateMenu(inView, entry, navMenuItem)
              }
              threshold={0.99}
              href={navMenuItem.link}
              className="text-sm font-semibold leading-6 text-gray-900 invisible"
            >
              {navMenuItem.label}
            </InView>
          ))}
      </div>
      <div className="flex-none">
        {subMenu.length > 0 && <PlusBarSubNav subMenu={subMenu} />}
      </div>
    </>
  )
}
