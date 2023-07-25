import { Menu, Disclosure, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
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
          className={`${navDropDownStyles.dropDownContainer} ${navDropDownStyles.moreMenuContainer}`}
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
                <Disclosure>
                  {({ open }) => (
                    <>
                      <div className={navDropDownStyles.moreMenuDropDown}>
                        <Disclosure.Button
                          className={navDropDownStyles.moreMenuParentItem}
                        >
                          {sideMenuItem.label}
                          <ChevronRightIcon
                            className={`${open ? 'rotate-90' : ''} ${
                              navDropDownStyles.moreMenuParentArrow
                            }`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          {sideMenuItem.subMenu.map((navSubMenuItem: any) => (
                            <Disclosure.Button
                              key={navSubMenuItem.id}
                              as="a"
                              href={navSubMenuItem.link}
                              className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                            >
                              {navSubMenuItem.label}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </div>
                    </>
                  )}
                </Disclosure>
              )}
            </>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
