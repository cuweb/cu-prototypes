import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const navItemStyles = {
  // navItem: `text-sm font-medium text-cu-black-600 whitespace-nowrap hover:text-cu-red`,
  // navItemChildren: `flex items-center -mb-px -mr-2`,
  // navArrow: `flex-none w-5 h-5 pt-1 text-cu-black-400`,
  navItem: ``,
  navItemChildren: ``,
  navArrow: ``,
}

export const navDropDownStyles = {
  // dropDownContainer: `absolute max-w-xs mt-5 -ml-3 overflow-hidden text-sm font-medium bg-white border rounded shadow-lg text-cu-black-600 border-cu-black-100`,
  // dropDownItems: `block px-5 py-4 border-b hover:text-cu-black-900 hover:bg-cu-black-50/50 border-b-cu-black-50/75 last:border-b-0`,
  dropDownContainer: ``,
  dropDownItems: ``,
}

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
