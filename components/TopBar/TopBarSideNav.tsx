import { Fragment } from 'react'
import { Disclosure, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const TopBarSideNav = ({ sideMenu }: any) => {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center text-sm font-semibold leading-6 text-red-500 gap-x-1">
        <span>Browse</span>
        <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
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
        <Popover.Panel className="absolute z-10 max-w-md mt-3 overflow-hidden bg-white rounded-md shadow-lg -left-10 top-full ring-1 ring-gray-900/5">
          <div className="p-4">
            {sideMenu.map((sideMenuItem: any, index: any) => (
              <div key={index}>
                {!sideMenuItem.subMenu && (
                  <Link
                    href={sideMenuItem.link}
                    className="block p-2 hover:text-indigo-600"
                  >
                    {sideMenuItem.label}
                  </Link>
                )}
                {sideMenuItem.subMenu && (
                  <Disclosure as="div" className="-mx-3" key={index}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          {sideMenuItem.label}
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'rotate-180' : '',
                              'h-5 w-5 flex-none',
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
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
                      </>
                    )}
                  </Disclosure>
                )}
              </div>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
