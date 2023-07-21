/* eslint-disable @next/next/no-img-element */
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

export const TopBarAside = () => {
  return (
    <div className="flex items-center gap-5 ml-auto">
      <MagnifyingGlassIcon className="w-5 h-5 text-cu-black-400" />

      <ul className="items-center hidden gap-5 pl-5 border-l md:flex border-cu-black-100">
        <li className="hidden lg:block">
          <a
            href="#"
            className="text-[15px] font-medium text-cu-black-600 hover:text-cyan-600"
          >
            Give
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[15px] font-medium text-cu-black-600 hover:text-cyan-600"
          >
            Apply
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[15px] font-medium text-cu-black-600 hover:text-cyan-600"
          >
            Login
          </a>
        </li>
      </ul>

      <button
        type="button"
        aria-label="global-carleton-navigation"
        className="px-3 py-2 text-sm font-medium rounded md:text-[15px] text-cu-black-700 md:px-3.5 md:py-2.5 whitespace-nowrap cu-topnav--mega hover:text-white focus:outline-none bg-cu-black-50 hover:bg-cu-red"
      >
        Mega Manu
      </button>
    </div>
  )
}

TopBarAside.displayName = 'TopBar.Aside'
