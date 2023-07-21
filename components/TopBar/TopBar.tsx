import React from 'react'
import { TopBarLogo } from './TopBarLogo'
import { TopBarMenu } from './TopBarMenu'
import { TopBarAside } from './TopBarAside'

export const TopBarWrapper = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b cu-navbar border-cu-black-100">
      <div className="flex items-center gap-8 px-8 py-4 mx-auto max-w-screen-2xl">
        <TopBar.Logo />
        <TopBar.Menu />
        <TopBar.Aside />
      </div>
    </header>
  )
}

export const TopBar = Object.assign(TopBarWrapper, {
  Logo: TopBarLogo,
  Menu: TopBarMenu,
  Aside: TopBarAside,
})
