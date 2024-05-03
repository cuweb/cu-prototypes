export const navBaseStyles = {
  header: `sticky z-50 px-5 bg-white border-t-2 border-b cu-topnav border-b-cu-black-100 border-t-cu-red`, // sticky not working, need to follow up
  topbarContainer: `flex gap-8 items-center py-3.5 mx-auto max-w-screen-2xl`,
  logoContainer: `cu-topnav--logo flex shrink-0 items-center gap-3 md:gap-5 [&>a]:shrink-0`, // --> [&>a]:shrink-0 should move into an external .css file in RDS and target .cu-topnav--logo a
  cuLogo: `w-[130px] h-[35px] hidden md:block`, // --> may need to move these to external .css file in RDS and target .cu-topnav--logo img (depends on how we use a-tag vs next link here)
  cuShield: `w-[28px] h-[35px] block md:hidden`, // --> may need to move these to external .css file in RDS and target .cu-topnav--logo img (depends on how we use a-tag vs next link here)
  siteTitle: `font-semibold leading-tight hover:text-cu-red text-cu-black-800 shrink-0`, // --> need to figure out how to drop to 2 lines when character count exceeds X
}

export const navItemStyles = {
  navContainer: `flex items-center gap-8 overflow-hidden pr-2`,
  navItem: `text-sm font-medium text-cu-black-600 whitespace-nowrap hover:text-cu-red`,
  navItemChildren: `flex items-center -mb-px -mr-2`,
  navArrow: `flex-none w-5 h-5 pt-1 text-cu-black-400`,
}

export const navDropDownStyles = {
  dropDownContainer: `absolute max-w-xs mt-5 -ml-3 overflow-hidden text-sm font-medium bg-white border rounded shadow-lg text-cu-black-600 border-cu-black-100`,
  dropDownItems: `block px-5 py-4 border-b hover:text-cu-black-900 hover:bg-cu-black-50/50 border-b-cu-black-50/75 last:border-b-0`,
}

export const navAsideStyles = {
  asideContainer: `flex items-center gap-4 ml-auto`,
  megaMenuButton: `px-3 py-2 text-sm font-semibold rounded text-cu-black-700 md:px-4 md:py-3 whitespace-nowrap cu-button hover:text-white focus:outline-none bg-cu-black-100 hover:bg-cu-red`,
}
