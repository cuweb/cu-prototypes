/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { TopBarNav } from './TopBarNav'
import { primaryStyles } from './TopBar.Styles'

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
    <header className={primaryStyles.header}>
      <div className={primaryStyles.topbarWrapper}>
        <div className={primaryStyles.logoContainer}>
          <Link href="https://carleton.ca">
            <img
              className={primaryStyles.cuLogo}
              src="/assets/cu-logo-color-right-horiztonal.svg"
              width="130"
              height="35"
              alt="Logo"
            />
            <img
              className={primaryStyles.cuShield}
              src="/assets/cu-shield-color.svg"
              width="28"
              height="35"
              alt="Logo"
            />
          </Link>

          {title && (
            <h1 className={primaryStyles.siteTitle}>
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
