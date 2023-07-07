export const styles = {
  base: 'flex flex-wrap gap-6 mx-auto md:flex-nowrap md:gap-12 not-contained not-prose',
  border:
    'border-b border-cu-black-50 pb-6 md:mb-12 shadow-hero-text-image md:pb-10',
}

export const contentStyles = {
  contentWrapper:
    'flex flex-col gap-4 md:gap-6 flex-[0_0_100%] md:max-w-4xl md:flex-1',
  contentTopSpace: 'md:pt-4',
  header:
    'text-2xl not-italic font-semibold md:leading-10 sm:text-3xl md:text-4xl',
  headerOne: 'text-3xl lg:text-5xl lg:leading-[3.5rem]',
  pronoun: 'text-xl lg:text-3xl font-light lowercase text-cu-black-500',
  listLink: 'font-semibold text-cu-red hover:text-cyan-600',
  largeText:
    'text-lg font-light italic text-cu-black-600 md:text-2xl md:leading-9 mb-2 md:max-w-3xl',
}

export const mediaStyles = {
  mediaWrapper: 'flex-[0_0_100%] md:flex-none md:w-[40%]',
  mediaBgImage: 'relative rounded bg-cover bg-no-repeat min-h-[220px]',
  svgLeft: 'hidden lg:block absolute -left-px top-0 z-10 h-full',
  svgRight:
    'hidden lg:block absolute -right-px top-0 z-10 h-full transform scale-[-1]',
}

export const socialStyles = {
  flex: 'flex items-center gap-4',
  link: 'text-cu-black-400',
  icon: 'w-6 h-6 md:w-8 md:h-8',
}
