import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TopBarNav } from './TopBarNav'

export interface LinkProps {
  label: string
  link: string
}

export interface TopBarProps {
  children?: React.ReactNode
  title?: string
  homeLink: string
  navLinks?: LinkProps[]
  isTwoTier?: boolean
}

export const TopBarWrapper = ({ title, homeLink, navLinks }: TopBarProps) => {
  return (
    <header className="relative z-50 bg-white border-t-2 border-b cu-topnav border-b-cu-black-100 border-t-cu-red">
      <div className="flex gap-8 px-4 items-center py-3.5 mx-auto max-w-screen-2xl">
        <div className="flex items-center h-full gap-3 [&>a]:w-[145px]">
          <Link href="https://carleton.ca">
            <Image
              src="/assets/_new/cu-logo-shield-right-black-text.svg"
              alt="Carleton University logo"
              width="145"
              height="40"
            />
          </Link>
          {title && (
            <h1 className="h-full text-lg hover:text-cu-red font-semibold leading-[1.25rem] md:leading-[1.25rem] text-cu-black-800 pl-4">
              <Link href={homeLink}>{title}</Link>
            </h1>
          )}
        </div>
        <TopBarNav navLinks={navLinks} />
      </div>
    </header>
  )
}

export const TopBar = Object.assign(TopBarWrapper, {})
