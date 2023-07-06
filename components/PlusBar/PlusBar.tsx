import React from 'react'
import Image from 'next/image'
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

export const PlusBarWrapper = ({ navLinks, homeLink }: PlusBarProps) => {
  return (
    <header className="bg-white border-t-2 border-b cu-topnav border-b-cu-black-100 border-t-cu-red">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6">
        <div className="flex-none">
          <Link href={homeLink}>
            <Image
              src="/assets/_new/cu-logo-shield-right-black-text.svg"
              alt="Carleton University logo"
              width="145"
              height="40"
            />
          </Link>
        </div>
        <PlusBarNav
          className="flex gap-x-12 mx-8 overflow-hidden"
          navLinks={navLinks}
        />
      </nav>
    </header>
  )
}

export const PlusBar = Object.assign(PlusBarWrapper, {})
