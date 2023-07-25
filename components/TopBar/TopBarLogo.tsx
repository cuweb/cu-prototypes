/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { navLogoTitle } from './TopBar.Styles'

export interface TopBarLogoProps {
  title?: string
  link?: string
}

const navLogoTitle2 = {
  siteTitle: `font-semibold md:text-lg hover:text-cu-red text-cu-black-800`,
  oneLineHeader: `text-base whitespace-nowrap`,
  twoLineHeader: `text-sm ms:text-base line-clamp-2`,
}

export const TopBarLogo = ({ title, link }: TopBarLogoProps) => {
  const titleLength = title ? title.length : 0
  const titleLengthStyles =
    titleLength > 15 ? navLogoTitle2.twoLineHeader : navLogoTitle2.oneLineHeader

  return (
    <div className={navLogoTitle.logoWrapper}>
      <a href="https://carleton.ca" className={navLogoTitle.cuLogoLink}>
        <img
          className={navLogoTitle.cuLogo}
          src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg"
          width="130"
          height="35"
          alt="Logo"
        />
        <img
          className={navLogoTitle.cuShield}
          src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg"
          width="28"
          height="35"
          alt="Logo"
        />
      </a>
      {title && link && (
        <h1 className={`${navLogoTitle2.siteTitle} ${titleLengthStyles}`}>
          <a href={link}>{title}</a>
        </h1>
      )}
    </div>
  )
}

TopBarLogo.displayName = 'TopBar.Logo'
