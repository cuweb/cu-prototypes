export const styles = {
  card: `not-prose group relative flex flex-col cu-card cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg`,
  content: `flex flex-col space-y-2 py-6 px-7 @sm:md:space-y-3 relative`,
  header: `text-lg font-semibold text-cu-black group-hover:text-cu-red @sm:md:text-xl`,
  excerpt: `text-base text-cu-black-600`,
  more: `font-semibold text-cu-red group-hover:text-cyan-700`,
  badges: `pb-5 mt-auto px-7`,
}

export const figureStyles = {
  figure: `relative`,
  round: `pt-8 pb-2 px-6`,
}

export const metaStyles = {
  singleItem: `flex items-start text-sm italic text-cu-black-600`,
  singleLarge: `text-sm italic text-cu-black-600 @sm:md:text-lg`,
  multiWrapper: `flex flex-col gap-2 mt-4`,
  multiItem: `flex text-sm text-cu-black-600 @sm:md:text-base`,
  icon: `flex-shrink-0 w-6 h-6 mr-2 text-cu-red-300`,
}

export const eventStyles = {
  dateBox: `z-10 -mt-16 mb-3 flex flex-col items-center justify-center w-20 h-20 bg-white rounded-md shadow-md group-hover:bg-cu-red`,
  dateBoxMonth: `text-xs font-bold uppercase text-cu-red group-hover:text-white`,
  dateBoxDay: `text-2xl font-bold uppercase text-cu-black-800 group-hover:text-white`,
}

export const videoStyle = {
  container: `relative pt-[56.25%] bg-cu-black-900`,
  player: `absolute top-0 left-0`,
}
