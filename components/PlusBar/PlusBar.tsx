/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { PlusBarNav } from './PlusBarNav'

export interface LinkProps {
  label: string
  link: string
}

export interface PlusBarProps {
  children?: React.ReactNode
  title?: string
  homeLink: string
  navLinks?: LinkProps[]
  isTwoTier?: boolean
}

export const PlusBarWrapper = ({ title, homeLink, navLinks }: PlusBarProps) => {
  return (
    <header className="sticky z-50 px-5 bg-white border-t-2 border-b cu-topnav border-b-cu-black-100 border-t-cu-red">
      <div className="flex gap-8 items-center py-3.5 mx-auto max-w-screen-2xl">
        {/* Logo and Title */}
        <div className="flex items-center gap-3 md:gap-5 [&>a]:shrink-0">
          <Link href="https://carleton.ca">
            <img
              className="w-[130px] h-[35px] hidden md:block"
              src="/assets/cu-logo-color-right-horiztonal.svg"
              width="130"
              height="35"
              alt="Logo"
            />
            <img
              className="w-[28px] h-[35px] block md:hidden"
              src="/assets/cu-shield-color.svg"
              width="28"
              height="35"
              alt="Logo"
            />
          </Link>

          {title && (
            <h1 className="text-base font-semibold md:text-lg hover:text-cu-red text-cu-black-800">
              <Link href={homeLink}>{title}</Link>
            </h1>
          )}
        </div>

        <PlusBarNav navLinks={navLinks} />

        {/* <div className="ml-auto">
          <button
            type="button"
            aria-label="Small Button"
            className="px-3 py-2 text-sm font-semibold rounded text-cu-black-700 md:px-4 md:py-3 whitespace-nowrap cu-button hover:text-white focus:outline-none bg-cu-black-100 hover:bg-cu-red"
          >
            Menu
          </button>
        </div> */}
      </div>
    </header>
  )
}

export const PlusBar = Object.assign(PlusBarWrapper, {})
