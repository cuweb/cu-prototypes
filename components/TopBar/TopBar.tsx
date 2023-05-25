import React from 'react'
import Image from 'next/image'
// import { styles } from './TopBar.Styles'

import priorityPlus from 'priority-plus'
priorityPlus(document.querySelector('.cu-priority-nav'))

// const inst = priorityPlus(document.querySelector('.cu-priority-nav'))
// console.log(inst.getNavElements())

export interface TopBarProps {
  children?: React.ReactNode
  title?: string
  isTwoTier?: boolean
}

const navigationItems = [
  { label: 'Human Resources', url: '#' },
  { label: 'Careers', url: '#' },
  { label: 'Community', url: '#' },
  { label: 'Services', url: '#' },
  { label: 'Security', url: '#' },
  { label: 'Support', url: '#' },
  { label: 'Alert', url: '#' },
  { label: 'About', url: '#' },
]

export const TopBarWrapper = ({ title, isTwoTier = false }: TopBarProps) => {
  return (
    <header className="bg-white border-t-2 border-b cu-topnav border-b-cu-black-100 border-t-cu-red">
      <div className="flex gap-8 px-4 items-center py-3.5 mx-auto max-w-screen-2xl">
        <div className="flex items-center h-full gap-3">
          <a href="https://carleton.ca">
            <Image
              src="/assets/_new/cu-logo-shield-right-black-text.svg"
              alt="Carleton University logo"
              width="145"
              height="40"
            />
          </a>

          {title && (
            <h1 className="max-w-[200px] h-full text-lg hover:text-cu-red font-semibold leading-[1.25rem] md:leading-[1.25rem] text-cu-black-800 pl-3.5 border-l border-cu-black-200">
              <a href="#">{title}</a>
            </h1>
          )}
        </div>

        {!isTwoTier && (
          <nav>
            <ul className="flex gap-8 text-[0.925rem] cu-priority-nav">
              {navigationItems.slice(0, 3).map((item, index) => (
                <li key={index}>
                  <a href={item.url}>{item.label}</a>
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
            {navigationItems.slice(3, 8).map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.label}</a>
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
