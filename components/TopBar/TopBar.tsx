import React from 'react'
import { TopBarLogo } from './TopBarLogo'
import { TopBarMenu } from './TopBarMenu'
import { TopBarAside } from './TopBarAside'
import { TopBarPrimary } from './TopBarPrimary'
import { TopBarSecondary } from './TopBarSecondary'

export interface TopBarProps {
  children: React.ReactNode
}

export const TopBarWrapper = ({ children }: TopBarProps) => {
  return (
    <header className="bg-white border-t-2 border-b cu-navbar border-b-cu-black-100 border-t-cu-red">
      {/* <header className="sticky top-0 z-50 bg-white border-t-2 border-b cu-navbar border-b-cu-black-100 border-t-cu-red"> */}
      {children}
    </header>
  )
}

export const TopBar = Object.assign(TopBarWrapper, {
  Logo: TopBarLogo,
  Menu: TopBarMenu,
  Aside: TopBarAside,
  Primary: TopBarPrimary,
  Secondary: TopBarSecondary,
})
