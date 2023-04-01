import React from 'react'

export interface ListWrapperProps {
  children: React.ReactNode
}

const styles = {
  base: `not-prose group relative overflow-hidden @container cu-listings`,
}

export const ListWrapper = ({ children }: ListWrapperProps) => {
  return <li className={`${styles.base}`}>{children}</li>
}
