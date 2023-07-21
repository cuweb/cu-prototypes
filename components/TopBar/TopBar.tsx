import React from 'react'
import { TopBarTopTier } from './TopBarTopTier'
import { TopBarBottomTier } from './TopBarBottomTier'
import { TopBarLogo } from './TopBarLogo'
import { TopBarMenu } from './TopBarMenu'
import { TopBarAside } from './TopBarAside'

export interface TopBarProps {
  children: React.ReactNode
  levels?: '1' | '2'
}

export const TopBarWrapper = ({ children, levels = '1' }: TopBarProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-t-2 border-b cu-navbar border-b-cu-black-100 border-t-cu-red">
      {levels === '1' && (
        <div className="flex items-center gap-8 px-8 py-3 mx-auto max-w-screen-2xl">
          {children}
        </div>
      )}

      {levels === '2' && (
        <>
          <div className="flex items-center gap-8 px-8 py-4 mx-auto max-w-screen-2xl">
            {children}
          </div>
          <div className="px-8 py-3 mx-auto border-t max-w-screen-2xl bg-cu-black-25 border-t-cu-black-100">
            <TopBar.Menu />
          </div>
        </>
      )}
    </header>
  )
}

export const TopBar = Object.assign(TopBarWrapper, {
  TopTier: TopBarTopTier,
  BottomTier: TopBarBottomTier,
  Logo: TopBarLogo,
  Menu: TopBarMenu,
  Aside: TopBarAside,
})
