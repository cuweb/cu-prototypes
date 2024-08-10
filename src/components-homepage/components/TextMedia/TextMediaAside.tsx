import React from 'react'

export interface TextMediaAsideProps {
  children: React.ReactNode
}

export const TextMediaAside = ({ children }: TextMediaAsideProps) => {
  return <div className="flex-1 cu-textmedia-aside">{children}</div>
}

TextMediaAside.displayName = 'TextMedia.Aside'
