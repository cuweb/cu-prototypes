import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { navItemStyles, navDropDownStyles } from '../TopBar.Styles'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const TopBarMoreNav = ({ sideMenu }: any) => {
  return (
    <Popover>
      {/* Nav item with submenu */}
      <Popover.Button
        className={`relative ${navItemStyles.navItemMoreNav} ${navItemStyles.navItemChildren}`}
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
        {/* Submenu */}
        <Popover.Panel
          className={`right-0 ${navDropDownStyles.dropDownContainer}`}
        >
          {sideMenu.map((sideMenuItem: any) => (
            <>
              {!sideMenuItem.subMenu && (
                <a
                  key={sideMenuItem.id}
                  href={sideMenuItem.link}
                  className={navDropDownStyles.dropDownItems}
                >
                  {sideMenuItem.label} - NoSub
                </a>
              )}
              {sideMenuItem.subMenu && (
                <a
                  key={sideMenuItem.id}
                  href={sideMenuItem.link}
                  className={navDropDownStyles.dropDownItems}
                >
                  {sideMenuItem.label} - HasSub
                </a>
              )}
            </>
          ))}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
