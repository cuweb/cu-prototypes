import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { navItemStyles, navDropDownStyles } from './PlusNavNew.Styles'
import Link from 'next/link'

export const PlusNavNewDropDown = ({ navItemLabel, navSubMenu }: any) => {
  return (
    <Popover>
      {/* Nav item with submenu */}
      <Popover.Button
        className={`${navItemStyles.navItem} ${navItemStyles.navItemChildren}`}
      >
        {navItemLabel}
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
        {/* Submenu */}
        <Popover.Panel className={navDropDownStyles.dropDownContainer}>
          {/* <div className=""> */}
          {navSubMenu.map((navSubMenuItem: any, index: any) => (
            <Link
              key={navSubMenuItem.id}
              href={navSubMenuItem.link}
              className={navDropDownStyles.dropDownItems}
            >
              {navSubMenuItem.label}
            </Link>
          ))}
          {/* </div> */}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
