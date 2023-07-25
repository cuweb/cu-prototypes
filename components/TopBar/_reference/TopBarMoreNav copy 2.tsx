import { Fragment } from 'react'
import { Disclosure, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { navItemStyles, navDropDownStyles } from './TopBar.Styles'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const TopBarMoreNav = ({ sideMenu }: any) => {
  return (
    <Popover className="relative">
      <Popover.Button
        className={`${navItemStyles.navItemChildren} ${navItemStyles.navItemMoreNav} text-cu-red-600 text-sm font-medium whitespace-nowrap hover:text-cyan-600`}
      >
        Browse
        <ChevronDownIcon
          className={navItemStyles.navArrow}
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className={navDropDownStyles.dropDownContainer}>
          {sideMenu.map((sideMenuItem: any, index: any) => (
            <>
              {!sideMenuItem.subMenu && (
                <a href="/analytics">No Children Menu</a>
                // <li className={navDropDownStyles.dropDownItems}>
                // </li>
              )}

              {sideMenuItem.subMenu && (
                <a href="/analytics">Has Child Menu</a>
                // <li className={navDropDownStyles.dropDownItems}>
                // </li>
              )}
            </>
          ))}

          {/* <ul className="">
            <li className={navDropDownStyles.dropDownItems}>
              <a href="/analytics">Analytics</a>
            </li>
            <li className={navDropDownStyles.dropDownItems}>
              <a href="/engagement">Engagement</a>
            </li>
            <li className={navDropDownStyles.dropDownItems}>
              <a href="/security">Security</a>
            </li>
            <li className={navDropDownStyles.dropDownItems}>
              <a href="/integrations">Integrations</a>
            </li>
          </ul> */}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
