import React from 'react'
import { bgOpacityClasses, justifyContentClasses } from '@/utils/optionClasses'
import { PageHeaders } from '@carletonuniversity/rds'

type bgOpacityKeys = keyof typeof bgOpacityClasses
type justifyContentKeys = keyof typeof justifyContentClasses

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
  opacity = 80,
  justify = 'start',
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
        <div className={`flex ${justifyContentClasses[justify]}`}>
          <div
            className={`space-y-3 md:space-y-6 w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl md:rounded-lg px-4 md:px-8 pt-3 pb-5 md:pt-6 md:pb-8 bg-black ${bgOpacityClasses[opacity]} ${contentAlign}`}
          >
            <PageHeaders header={title} as="h1" size="md" noUnderline isWhite />
            {children}
          </div>
        </div>
      </div>
    </FullBannerComponent>
  )
}
