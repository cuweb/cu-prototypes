/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

export interface TopBarLogoProps {
  title?: string
  link?: string
}

export const TopBarLogo = ({ title, link }: TopBarLogoProps) => {
  return (
    <div className="flex items-center gap-3 md:gap-5 cu-navbar--logo lg:shrink-0 [&>a]:shrink-0">
      <Link href="https://carleton.ca">
        <img
          className="w-[130px] h-[35px] hidden md:block shrink-0"
          src="/assets/cu-logo-color-right-horiztonal.svg"
          width="130"
          height="35"
          alt="Logo"
        />
        <img
          className="w-[28px] h-[35px] block md:hidden shrink-0"
          src="/assets/cu-shield-color.svg"
          width="28"
          height="35"
          alt="Logo"
        />
      </Link>
      {title && link && (
        <h1 className="text-base font-semibold leading-tight md:text-lg hover:text-cu-red text-cu-black-800">
          <a href={link}>{title}</a>
        </h1>
      )}
    </div>
  )
}

TopBarLogo.displayName = 'TopBar.Logo'
