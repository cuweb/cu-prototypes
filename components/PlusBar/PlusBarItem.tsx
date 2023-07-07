import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export const PlusBarItem = ({ navItemLabel, navSubMenu }: any) => {
  return (
    <Popover>
      <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        {navItemLabel}
        <ChevronDownIcon
          className="h-5 w-5 flex-none text-gray-400"
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
        <Popover.Panel className="absolute mt-3 max-w-md overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            {navSubMenu.map((navSubMenuItem: any, index: any) => (
              <Link
                key={navSubMenuItem.id}
                href={navSubMenuItem.link}
                className="block p-2 hover:text-indigo-600"
              >
                {navSubMenuItem.label}
              </Link>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
