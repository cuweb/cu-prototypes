import React from 'react'
import { WideImage, ButtonGroup, Button } from '@carletonuniversity/rds'

const opacityValues = Array.from({ length: 21 }, (_, index) => 60 + index)

export interface FullBannerProps {
  children?: React.ReactNode
  as?: 'section' | 'div'
  title: string
  opacity?: (typeof opacityValues)[number]
}

// Exists in WideImage, create helper function
const getOpacityStyle = (opacity: number) => ({
  opacity: `0.${opacity}`,
})

export default function FullBanner({
  children,
  as = 'section',
  title,
  opacity = 70,
}: FullBannerProps) {
  const FullBannerComponent = as
  const opacityStyle = getOpacityStyle(opacity)

  console.log(opacityStyle)

  return (
    <FullBannerComponent
      className="overflow-hidden not-contained not-prose bg-cu-black-200 bg-cover mb-6 -mt-10 -mx-8 md:-mx-10 pt-32 pb-24 md:pt-44 md:pb-28 lg:pt-60 lg:pb-36 xl:pt-72 xl:pb-48 px-8 md:px-10"
      style={{
        backgroundImage: 'url("https://picsum.photos/1600/700")',
        backgroundPosition: '50% 50%',
      }}
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex">
          <div className="space-y-6 max-w-2xl rounded-lg px-8 pt-6 pb-7 bg-black bg-opacity-70">
            <h1 className="text-white font-medium text-lg md:text-2xl lg:text-4xl">
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </FullBannerComponent>
  )
}
