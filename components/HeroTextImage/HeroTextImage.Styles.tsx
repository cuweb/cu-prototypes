export const styles = {
  base: 'flex flex-wrap gap-6 mx-auto mb-12 md:flex-nowrap md:gap-12 not-contained not-prose',
  border: 'border-b border-cu-black-50 pb-6 shadow-hero-text-image md:pb-10',
}

export const contentStyles = {
  contentWrapper:
    'flex flex-col gap-4 md:gap-6 flex-[0_0_100%] md:max-w-4xl md:flex-1',
  contentTopSpace: 'md:pt-4',
  header:
    'text-2xl not-italic font-semibold md:leading-10 sm:text-3xl md:text-4xl',
  headerOne: 'text-3xl lg:text-5xl lg:leading-[3.5rem]',
  pronoun: 'text-xl lg:text-3xl font-light lowercase text-cu-black-500',
  largeText:
    'text-lg font-light italic text-cu-black-600 md:text-2xl md:leading-9 mb-2 md:max-w-3xl',
}

export const mediaStyles = {
  mediaWrapper: 'flex-[0_0_100%] md:flex-none',
  mediaBgImage: 'relative rounded bg-cover bg-no-repeat min-h-[220px]',
  svgLeft: 'hidden md:block absolute -left-px top-0 z-10 h-full',
  svgRight:
    'hidden md:block absolute -right-px top-0 z-10 h-full transform scale-[-1]',
}
