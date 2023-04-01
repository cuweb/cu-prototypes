export const styles = {
  card: `not-prose group relative flex flex-col cu-card cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg`,
  figure: `relative`,
  content: `flex flex-col space-y-2 py-6 px-7 @sm:md:space-y-3 relative`,
  header: `text-lg font-semibold text-cu-black group-hover:text-cu-red @sm:md:text-xl`,
  excerpt: `text-base text-cu-black-600`,
  more: `font-semibold text-cu-red group-hover:text-cyan-700`,
  badges: `pb-5 mt-auto px-7`,
}

export const eventStyles = {
  dateBox: `z-10 -mt-16 mb-3 flex flex-col items-center justify-center w-20 h-20 bg-white rounded-md shadow-md group-hover:bg-cu-red`,
  dateBoxMonth: `text-xs font-bold uppercase text-cu-red group-hover:text-white`,
  dateBoxDay: `text-2xl font-bold uppercase text-cu-black-800 group-hover:text-white`,
}
