import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface LinkProps {
  label: string
  link: string
  subLinks?: LinkProps[]
}

export interface TopBarProps {
  children?: React.ReactNode
  title?: string
  homeLink?: string
  navLinks?: LinkProps[]
  isTwoTier?: boolean
}

export const TopBarWrapper = ({
  title,
  homeLink,
  navLinks,
  isTwoTier = false,
}: TopBarProps) => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null)

  const handleMenuEnter = (index: number) => {
    setOpenMenuIndex(index)
  }

  const handleMenuLeave = () => {
    setOpenMenuIndex(null)
  }

  return (
    <header className="relative z-50 bg-white border-t-2 border-b cu-topnav border-b-cu-black-100 border-t-cu-red">
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
          {title && homeLink && (
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
                  <li
                    key={index}
                    className="relative"
                    onMouseEnter={() => handleMenuEnter(index)}
                    onMouseLeave={handleMenuLeave}
                  >
                    <a
                      href={item.link}
                      className={openMenuIndex === index ? 'text-cu-red' : ''}
                    >
                      {item.label}
                    </a>
                    {item.subLinks && openMenuIndex === index && (
                      <ul className="absolute left-0 w-40 mt-2 ml-0 shadow-lg bg-cu-black-100 top-full">
                        {item.subLinks.map((subLink, subIndex) => (
                          <li key={subIndex}>
                            <a href={subLink.link}>{subLink.label}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
            </ul>
          </nav>
        )}
        {/* Rest of the code */}
      </div>

      {isTwoTier && (
        <nav className="border-t border-b-cu-black-100">
          <ul className="flex gap-8 pr-4 pl-5 py-2 mx-auto text-[0.925rem] max-w-screen-2xl cu-priority-nav">
            {navLinks &&
              navLinks.map((item, index) => (
                <li
                  key={index}
                  className="relative" // Add relative class here
                  onMouseEnter={() => handleMenuEnter(index)}
                  onMouseLeave={handleMenuLeave}
                >
                  <a
                    href={item.link}
                    className={openMenuIndex === index ? 'text-cu-red' : ''}
                  >
                    {item.label}
                  </a>
                  {item.subLinks && openMenuIndex === index && (
                    <ul className="absolute left-0 w-40 mt-2 ml-0 bg-white shadow-lg top-full">
                      {item.subLinks.map((subLink, subIndex) => (
                        <li key={subIndex}>
                          <a href={subLink.link}>{subLink.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export const TopBar = Object.assign(TopBarWrapper, {
  // Nav: TopBarFigure,
})
