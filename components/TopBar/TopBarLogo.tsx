/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

export const TopBarLogo = () => {
  return (
    <div className="flex items-center gap-3 md:gap-5 cu-navbar--logo shrink-0">
      <Link href="https://carleton.ca">
        <img
          className="w-[130px] h-[35px] hidden md:block"
          src="/assets/cu-logo-color-right-horiztonal.svg"
          width="130"
          height="35"
          alt="Logo"
        />
        <img
          className="w-[28px] h-[35px] block md:hidden"
          src="/assets/cu-shield-color.svg"
          width="28"
          height="35"
          alt="Logo"
        />
      </Link>
      <h1 className="text-base font-semibold leading-tight md:text-lg hover:text-cu-red text-cu-black-800">
        <Link href="#">Web Services</Link>
      </h1>
    </div>
  )
}

TopBarLogo.displayName = 'TopBar.Logo'
