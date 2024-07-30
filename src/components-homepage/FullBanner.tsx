import React from 'react'
import { WideImage, ButtonGroup, Button } from '@carletonuniversity/rds'

const opacityValues = Array.from({ length: 21 }, (_, index) => 60 + index)

export interface FullBannerProps {
  children?: React.ReactNode
  as?: 'section' | 'div'
  opacity?: (typeof opacityValues)[number]
}

// Exists in WideImage, create helper function
const getOpacityStyle = (opacity: number) => ({
  opacity: `0.${opacity}`,
})

export default function FullBanner({
  children,
  as = 'section',
  opacity = 70,
}: FullBannerProps) {
  const FullBannerComponent = as
  const opacityStyle = getOpacityStyle(opacity)

  return (
    <>
      <FullBannerComponent
        className="relative mb-6 overflow-hidden not-contained not-prose bg-cu-black-200 bg-cover -mt-10 -mx-8 pt-32 pb-24 md:pt-44 md:pb-28 lg:pt-60 lg:pb-36 xl:pt-72 xl:pb-48"
        style={{
          backgroundImage: 'url("https://picsum.photos/1600/700")',
          backgroundPosition: '50% 50%',
        }}
      >
        <div className="mx-auto max-w-screen-2xl">
          <div
            className="max-w-3xl bg-black rounded-lg px-8 py-6 text-white font-medium text-5xl leading-tight"
            style={opacityStyle}
          >
            {children}
            <h1>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit.
            </h1>
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="grey" title="Request Information" />
            </ButtonGroup>
          </div>
        </div>
      </FullBannerComponent>

      {/* <WideImage
        image="https://picsum.photos/1600/700"
        headerType="h1"
        isType="image"
        title="Wide image with bg image"
      >
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit.
          Praesentium architecto a distinctio aut reprehenderit ducimus.
        </p>
        <ButtonGroup>
          <Button title="Apply Now" />
          <Button color="grey" title="Request Information" />
        </ButtonGroup>
      </WideImage> */}
    </>
  )
}
