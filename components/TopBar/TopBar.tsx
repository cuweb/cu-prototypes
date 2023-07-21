import React from 'react'
import { TopBarLogo } from './TopBarLogo'
import { TopBarMenu } from './TopBarMenu'
import { TopBarAside } from './TopBarAside'

export interface TopBarProps {
  children: React.ReactNode
}

export const TopBarWrapper = ({ children }: TopBarProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-t-2 border-b cu-navbar border-b-cu-black-100 border-t-cu-red">
      <div className="flex items-center gap-8 px-8 py-3 mx-auto max-w-screen-2xl">
        {children}
      </div>
    </header>
  )
}

export const TopBar = Object.assign(TopBarWrapper, {
  Logo: TopBarLogo,
  Menu: TopBarMenu,
  Aside: TopBarAside,
})
