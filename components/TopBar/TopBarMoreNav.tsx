import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { navItemStyles, navDropDownStyles } from './TopBar.Styles'

export const TopBarMoreNav = ({ sideMenu }: any) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        className={`${navItemStyles.navItemChildren} ${navItemStyles.navItemMoreNav}`}
      >
        Browse
        <ChevronDownIcon
          className={navItemStyles.navArrow}
          aria-hidden="true"
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`${navDropDownStyles.dropDownContainer} ${navDropDownStyles.moreDropDown}`}
        >
          {sideMenu.map((sideMenuItem: any) => (
            <>
              {!sideMenuItem.subMenu && (
                <a
                  key={sideMenuItem.id}
                  href={sideMenuItem.link}
                  className={navDropDownStyles.dropDownItems}
                >
                  {sideMenuItem.label}
                </a>
              )}
              {sideMenuItem.subMenu && (
                <a
                  key={sideMenuItem.id}
                  href={sideMenuItem.link}
                  className={navDropDownStyles.dropDownItems}
                >
                  {sideMenuItem.label}
                </a>
              )}
            </>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
