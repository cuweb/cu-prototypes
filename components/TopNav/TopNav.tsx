import React from 'react'
import { styles } from './TopNav.Styles'
import Image from 'next/image'

export interface TopNavProps {
  children?: React.ReactNode
}

export const TopNavWrapper = ({ children }: TopNavProps) => {
  // const noLinkStyles = noLink ? 'cu-card--nolink' : styles.link
  // const centerText = isCenter ? 'text-center' : ''
  // const addBorder = border ? `${rdsBorderColor[border]} ${styles.border}` : ''

  return (
    <header className="px-6 bg-white cu-topnav md:px-10">
      <div className="flex py-3.5 mx-auto max-w-screen-2xl">
        <div className="flex items-center h-full gap-3">
          <a
            href="https://carleton.ca"
            className="pr-3 border-r border-cu-black-200"
          >
            <Image
              src="/assets/_new/cu-logo-shield-right-black-text.svg"
              alt="Carleton University logo"
              width="145"
              height="40"
            />
          </a>
          <h1 className="max-w-[200px] text-base font-semibold leading-[1.25rem] md:leading-[1.25rem]">
            <a href="#" className="">
              Information and Technology Services
            </a>
          </h1>
        </div>

        {/* <nav>
        {children}
        <ul>
          <li>
            <a href="#">NavItem</a>
          </li>
          <li>
            <a href="#">NavItem</a>
          </li>
          <li>
            <a href="#">NavItem</a>
          </li>
          <li>
            <a href="#">NavItem</a>
          </li>
          <li>
            <a href="#">NavItem</a>
          </li>
        </ul>
      </nav> */}

        <div className="flex items-center ml-auto">Buttons</div>
      </div>
    </header>
  )
}

export const TopNav = Object.assign(TopNavWrapper, {
  // Figure: TopNavFigure,
})
