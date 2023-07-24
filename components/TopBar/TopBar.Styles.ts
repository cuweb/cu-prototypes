export const navBaseStyles = {
  header: `sticky z-50 bg-white border-t-2 border-b cu-navbar border-b-cu-black-100 border-t-cu-red transition-top duration-300 ease-in-out`,
  primaryWrapper: `flex items-center h-[64px] gap-8 px-8 py-3 mx-auto max-w-screen-2xl`,
  secondaryWrapper: `border-t bg-cu-black-25 border-t-cu-black-100`,
  navInnerWrapper: `flex gap-6 px-8 py-3 mx-auto max-w-screen-2xl`,
}

export const navLogoTitle = {
  logoWrapper: `flex items-center gap-3 md:gap-5 cu-navbar--logo lg:shrink-0`,
  cuLogoLink: `shrink-0`, // needs to move to a css file in RDS, /src/styles/components.css, target -- .cu-topbar--logo a
  cuLogo: `w-[130px] h-[35px] hidden md:block shrink-0`,
  cuShield: `w-[28px] h-[35px] block md:hidden shrink-0`,
  siteTitle: `text-sm font-semibold leading-3 md:leading-none md:text-lg hover:text-cu-red text-cu-black-800`,
}

export const navItemStyles = {
  navContainer: ``,
  navItem: ``,
  navItemChildren: ``,
  navArrow: ``,
}

export const navDropDownStyles = {
  dropDownContainer: ``,
  dropDownItems: ``,
}

export const navAsideStyles = {
  asideWrapper: `flex items-center gap-5 ml-auto`,
  searchIcon: `w-5 h-5 text-cu-black-400`,
  unorderedList: `items-center hidden gap-5 pl-5 border-l md:flex border-cu-black-100`,
  listHidden: `hidden lg:block`,
  listItemLink: `text-[15px] font-medium text-cu-black-600 hover:text-cyan-600`,
  megaMenuButton: `px-3 py-2 text-sm font-medium rounded md:text-[15px] text-cu-black-700 md:px-3.5 md:py-2.5 whitespace-nowrap cu-topnav--mega hover:text-white focus:outline-none bg-cu-black-50 hover:bg-cu-red`,
}
