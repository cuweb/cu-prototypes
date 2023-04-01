import React from 'react'

export interface CardImageProps {
  children: React.ReactNode
}

export const CardImage = ({ children }: CardImageProps) => {
  return <figure>{children}</figure>
}
