export const primaryStyles = {
  header: `sticky z-50 px-5 bg-white border-t-2 border-b cu-topnav border-b-cu-black-100 border-t-cu-red`, // sticky not working, need to follow up
  topbarWrapper: `flex gap-8 items-center py-3.5 mx-auto max-w-screen-2xl`,
  logoContainer: `cu-topnav--logo flex items-center gap-3 md:gap-5 [&>a]:shrink-0`, // --> [&>a]:shrink-0 should move into an external .css file in RDS and target .cu-topnav--logo a
  cuLogo: `w-[130px] h-[35px] hidden md:block`, // --> may need to move these to external .css file in RDS and target .cu-topnav--logo img (depends on how we use a-tag vs next link here)
  cuShield: `w-[28px] h-[35px] block md:hidden`, // --> may need to move these to external .css file in RDS and target .cu-topnav--logo img (depends on how we use a-tag vs next link here)
  siteTitle: `font-semibold leading-tight hover:text-cu-red text-cu-black-800 shrink-0`, // --> need to figure out how to drop to 2 lines when character count exceeds X
}