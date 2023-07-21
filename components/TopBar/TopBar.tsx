import React from 'react'
import { TopBarLogo } from './TopBarLogo'
import { TopBarMenu } from './TopBarMenu'
import { TopBarAside } from './TopBarAside'

export interface LinkProps {
  label: string
  link: string
}

export interface TopBarProps {
  children: React.ReactNode
  tier?: '1' | '2'
  navLinks?: LinkProps[]
}

export const TopBarWrapper = ({ children, tier = '1' }: TopBarProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-t-2 border-b cu-navbar border-b-cu-black-100 border-t-cu-red">
      {tier === '1' && (
        <div className="flex items-center gap-8 px-8 py-3 mx-auto max-w-screen-2xl">
          {children}
        </div>
      )}

      {tier === '2' && (
        <>
          <div className="flex items-center gap-8 px-8 py-4 mx-auto max-w-screen-2xl">
            {children}
          </div>
          <div className="px-8 py-3 mx-auto border-t max-w-screen-2xl bg-cu-black-25 border-t-cu-black-100">
            <TopBar.Menu navLinks={navLinks} />
          </div>
        </>
      )}
    </header>
  )
}

export const TopBar = Object.assign(TopBarWrapper, {
  Logo: TopBarLogo,
  Menu: TopBarMenu,
  Aside: TopBarAside,
})
