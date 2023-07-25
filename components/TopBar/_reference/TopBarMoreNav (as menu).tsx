import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { navItemStyles, navDropDownStyles } from '../TopBar.Styles'

export const TopBarMoreNav = ({ sideMenu }: any) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={`${navItemStyles.navItemChildren} ${navItemStyles.navItemMoreNav} text-cu-red-600 text-sm font-medium whitespace-nowrap hover:text-cyan-600`}
        >
          Browse
          <ChevronDownIcon
            className={navItemStyles.navArrow}
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {sideMenu.map((sideMenuItem: any) => (
            <>
              {!sideMenuItem.subMenu && (
                <p key={sideMenuItem.id}>{sideMenuItem.label} - No children</p>
              )}
              {sideMenuItem.subMenu && (
                <p key={sideMenuItem.id}>{sideMenuItem.label} - Has children</p>
              )}
            </>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
