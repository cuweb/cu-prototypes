import React from 'react'

// import Image from 'next/image'
// import { styles } from './HeroBanner.Styles'

export const rdsMaxWidth = {
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
  max: 'max-w-screen-2xl',
  none: 'max-w-none',
}

export interface HeroBannerProps {
  children?: React.ReactNode
  title?: string
  maxWidth?: 'none' | 'max' | '5xl' | '7xl'
}

export const HeroBannerWrapper = ({
  title,
  maxWidth = 'none',
}: HeroBannerProps) => {
  const roundedBg = maxWidth === 'none' ? '' : 'rounded-lg'
  const fullWidth =
    maxWidth === 'none'
      ? '-mx-6 md:-mx-10 px-6 md:px-10 bg-cu-black-50'
      : 'bg-cu-black-50 px-8'

  return (
    <div
      className={`cu-herobanner not-contained not-prose py-6 md:py-12 mx-auto ${roundedBg} ${fullWidth} ${rdsMaxWidth[maxWidth]}`}
    >
      <div className="max-w-5xl mx-auto">
        {/* <p>Home / Ancestor Page / Parent Page</p>
        <h1>{title}</h1> */}
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit.
          Praesentium architecto a distinctio aut reprehenderit ducimus.
          Perferendis excepturi delectus nihil voluptatem non. Molestiae quas
          dolores accusamus in. Praesent quis ligula quis nulla malesuada
          tempor.
        </p>
      </div>
    </div>
  )
}

export const HeroBanner = Object.assign(HeroBannerWrapper, {
  // Nav: HeroBannerFigure,
})
