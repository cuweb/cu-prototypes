import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChevronDownIcon,
} from '@heroicons/react/20/solid'

export const PlusBarSubNav = ({ subMenu }: any) => {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-red-500">
        <span>Browse</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
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
        <Popover.Panel className="absolute -left-10 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
          <div className="w-56 shrink rounded-md bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
          {subMenu.map((subMenuItem: any, index: any) => (
              <a key={index} href={subMenuItem.link} className="block p-2 hover:text-indigo-600">
                {subMenuItem.label}
              </a>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
