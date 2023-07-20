/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { TopBarNav } from './TopBarNav'
import { navBaseStyles } from './TopBar.Styles'

export interface LinkProps {
  label: string
  link: string
}

export interface TopBarProps {
  children?: React.ReactNode
  title?: string
  homeLink: string
  navLinks?: LinkProps[]
  isTwoTier?: boolean
}

export const TopBarWrapper = ({ title, homeLink, navLinks }: TopBarProps) => {
  return (
    <header className={navBaseStyles.header}>
      <div className={navBaseStyles.topbarContainer}>
        <div className={navBaseStyles.logoContainer}>
          <Link href="https://carleton.ca">
            <img
              className={navBaseStyles.cuLogo}
              src="/assets/cu-logo-color-right-horiztonal.svg"
              width="130"
              height="35"
              alt="Logo"
            />
            <img
              className={navBaseStyles.cuShield}
              src="/assets/cu-shield-color.svg"
              width="28"
              height="35"
              alt="Logo"
            />
          </Link>

          {title && (
            <h1 className={navBaseStyles.siteTitle}>
              <Link href={homeLink}>{title}</Link>
            </h1>
          )}
        </div>

        <TopBarNav navLinks={navLinks} />
      </div>
    </header>
  )
}

export const TopBar = Object.assign(TopBarWrapper, {})
