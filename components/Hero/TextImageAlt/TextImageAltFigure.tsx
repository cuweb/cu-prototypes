/* eslint-disable @next/next/no-img-element */
import React from 'react'

export interface HeroBannerFigureProps {
  children?: React.ReactNode
}

export const HeroBannerFigure = ({ children }: HeroBannerFigureProps) => {
  return <div className="relative">{children}</div>
}

HeroBannerFigure.displayName = 'HeroBanner.Figure'
