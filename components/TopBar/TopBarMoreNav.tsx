import { Fragment } from 'react'
import { Menu, Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { navItemStyles, navDropDownStyles } from './TopBar.Styles'

export const TopBarMoreNav = ({ sideMenu }: any) => {
  return (
    <Menu as="ul" className={navDropDownStyles.moreMenuWrapper}>
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
          as="nav"
          className={`${navDropDownStyles.dropDownContainer} ${navDropDownStyles.moreMenuContainer}`}
        >
          {sideMenu.map((sideMenuItem: any, index: number) => (
            <>
              {!Array.isArray(sideMenuItem.props.children) && (
                <li
                  className={navDropDownStyles.dropDownItems}
                  key={'main-' + index}
                >
                  {sideMenuItem}
                </li>
              )}
              {Array.isArray(sideMenuItem.props.children) && (
                <Disclosure>
                  {({ open }) => (
                    <>
                      <ul className={navDropDownStyles.moreMenuDropDown}>
                        <Disclosure.Button
                          className={`${open ? 'text-cu-red' : ''} ${
                            navDropDownStyles.moreMenuParentItem
                          }`}
                        >
                          {sideMenuItem.props.label}
                          <ChevronRightIcon
                            className={`${open ? 'rotate-90' : ''} ${
                              navDropDownStyles.moreMenuParentArrow
                            }`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel as="ul" className="pb-2">
                          {sideMenuItem.props.children.map(
                            (navSubMenuItem: any, index: number) => (
                              <li key={'sub-' + index}>
                                <Disclosure.Button as={Fragment}>
                                  {navSubMenuItem}
                                </Disclosure.Button>
                              </li>
                            ),
                          )}
                        </Disclosure.Panel>
                      </ul>
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
