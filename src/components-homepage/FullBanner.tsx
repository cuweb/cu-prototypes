import React from 'react'
import { rdsBgOpacity } from '@/utils/optionClasses'

type bgOpacityKeys = keyof typeof rdsBgOpacity

export interface FullBannerProps {
  children?: React.ReactNode
  as?: 'section' | 'div'
  title: string
  align?: 'left' | 'center' | 'right'
  opacity?: bgOpacityKeys
}

export default function FullBanner({
  children,
  as = 'section',
  title,
  opacity = 70,
}: FullBannerProps) {
  const FullBannerComponent = as

  return (
    <FullBannerComponent
      className="overflow-hidden not-contained not-prose bg-cu-black-200 bg-cover mb-6 -mt-10 -mx-8 md:-mx-10 pt-80 pb-0 md:pt-48 md:pb-12 lg:pt-64 lg:pb-20 xl:pt-72 xl:pb-44 px-0 md:px-10"
      style={{
        backgroundImage: 'url("https://picsum.photos/1600/700")',
        backgroundPosition: '50% 50%',
      }}
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex">
          <div
            className={`space-y-3 md:space-y-6 w-full md:max-w-2xl md:rounded-lg px-4 md:px-8 pt-3 pb-5 md:pt-6 md:pb-7 bg-black ${rdsBgOpacity[opacity]}`}
          >
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
