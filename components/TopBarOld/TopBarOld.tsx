import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import { styles } from './TopBarOld.Styles'

export interface LinkProps {
  label: string
  link: string
  // active: boolean
}

export interface TopBarOldProps {
  children?: React.ReactNode
  title?: string
  homeLink: string
  navLinks?: LinkProps[]
  isTwoTier?: boolean
}

export const TopBarOldWrapper = ({
  title,
  homeLink,
  navLinks,
  isTwoTier = false,
}: TopBarOldProps) => {
  return (
    <header className="bg-white border-t-2 border-b cu-topnav border-b-cu-black-100 border-t-cu-red">
      <div className="flex gap-8 px-4 items-center py-3.5 mx-auto max-w-screen-2xl">
        <div className="flex items-center h-full gap-3">
          <Link href="https://carleton.ca">
            <Image
              src="/assets/_new/cu-logo-shield-right-black-text.svg"
              alt="Carleton University logo"
              width="145"
              height="40"
            />
          </Link>
          {title && (
            <h1 className="max-w-[200px] h-full text-lg hover:text-cu-red font-semibold leading-[1.25rem] md:leading-[1.25rem] text-cu-black-800 pl-3.5 border-l border-cu-black-200">
              <Link href={homeLink}>{title}</Link>
            </h1>
          )}
        </div>

        {!isTwoTier && (
          <nav>
            <ul className="flex gap-8 text-[0.925rem] cu-priority-nav">
              {navLinks &&
                navLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      // className={item.active ? 'text-cu-red' : ''}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </nav>
        )}

        <div className="flex ml-auto">
          <p className="px-4 py-2 font-medium rounded text-cu-black-800 bg-cu-black-100">
            Buttons
          </p>
        </div>
      </div>

      {isTwoTier && (
        <nav className="border-t border-b-cu-black-100">
          <ul className="flex gap-8 pr-4 pl-5 py-2 mx-auto text-[0.925rem] max-w-screen-2xl cu-priority-nav">
            {navLinks &&
              navLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    // className={item.active ? 'text-cu-red' : ''}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export const TopBarOld = Object.assign(TopBarOldWrapper, {
  // Nav: TopBarOldFigure,
})
