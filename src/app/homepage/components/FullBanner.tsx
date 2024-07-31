import React from 'react'
import { bgOpacity, justifyContent } from '@/utils/optionClasses'

type bgOpacityKeys = keyof typeof bgOpacity
type justifyContentKeys = keyof typeof justifyContent

export interface FullBannerProps {
  children?: React.ReactNode
  as?: 'section' | 'div'
  title: string
  justify?: justifyContentKeys
  opacity?: bgOpacityKeys
}

export default function FullBanner({
  children,
  as = 'section',
  title,
  opacity = 70,
  justify = 'normal',
}: FullBannerProps) {
  const FullBannerComponent = as
  const contentAlign =
    justify === 'center' ? 'text-center [&>*]:justify-center' : ''

  return (
    <FullBannerComponent
      className="overflow-hidden not-contained not-prose bg-cu-black-200 bg-cover mb-6 -mt-10 -mx-8 md:-mx-10 pt-80 pb-0 md:pt-48 md:pb-12 lg:pt-64 lg:pb-24 xl:pt-96 xl:pb-36 px-0 md:px-10"
      style={{
        backgroundImage: 'url("https://picsum.photos/1600/700")',
        backgroundPosition: '50% 50%',
      }}
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className={`flex ${justifyContent[justify]}`}>
          <div
            className={`space-y-3 md:space-y-6 w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl md:rounded-lg px-4 md:px-8 pt-3 pb-5 md:pt-6 md:pb-8 bg-black ${bgOpacity[opacity]} ${contentAlign}`}
          >
            <h1 className="font-semibold text-lg md:text-3xl lg:text-4xl lg:leading-[3rem] text-white">
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </FullBannerComponent>
  )
}
