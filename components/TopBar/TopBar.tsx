import React, { useState, useEffect } from 'react'
import { TopBarLogo } from './TopBarLogo'
import { TopBarMenu } from './TopBarMenu'
import { TopBarAside } from './TopBarAside'
import { TopBarPrimary } from './TopBarPrimary'
import { TopBarSecondary } from './TopBarSecondary'
import { navBaseStyles } from './TopBar.Styles'

export interface TopBarProps {
  children: React.ReactNode
}

export const TopBarWrapper = ({ children }: TopBarProps) => {
  const [navPosition, setNavPosition] = useState('top-0')
  const [navScroll, setNavScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const isScrollingUp = window.scrollY < navScroll

      // If use is scrolling up set the position to top-0
      setNavPosition(isScrollingUp ? 'top-0' : '-top-[66px]')

      setNavScroll(window.scrollY)
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [navScroll])

  return (
    <header className={`${navPosition} ${navBaseStyles.header}`}>
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
