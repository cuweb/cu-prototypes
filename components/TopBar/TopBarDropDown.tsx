import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export const TopBarDropDown = ({ navItemLabel, navSubMenu }: any) => {
  return (
    <Popover>
      {/* Nav item with submenu */}
      <Popover.Button className="flex font-medium items-center -mb-0.5 text-sm text-cu-black-700 hover:text-cu-red">
        {navItemLabel}
        <ChevronDownIcon
          className="flex-none w-5 h-5 text-gray-400"
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
        <Popover.Panel className="absolute max-w-md mt-3 overflow-hidden bg-white rounded-md shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            {navSubMenu.map((navSubMenuItem: any, index: any) => (
              <Link
                key={navSubMenuItem.id}
                href={navSubMenuItem.link}
                className="block p-2 hover:text-indigo-600"
              >
                {navSubMenuItem.label} -- item1
              </Link>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
