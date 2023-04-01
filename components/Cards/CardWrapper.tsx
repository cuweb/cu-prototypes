import React from 'react'

export interface CardWrapperProps {
  children: React.ReactNode
}

const styles = {
  base: `not-prose group relative flex flex-col cu-card cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg`,
}

export const CardWrapper = ({ children }: CardWrapperProps) => {
  return <div className={`${styles.base}`}>{children}</div>
}
