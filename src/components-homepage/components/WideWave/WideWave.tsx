import React from 'react'
import { PageHeader, utils } from '@carletonuniversity/rds'
import { TextMedia } from '@/components-homepage/components/TextMedia/TextMedia'

// Deconstruct propClass utils
const { maxWidthClasses } = utils
type maxWidthKeys = keyof typeof maxWidthClasses

export interface WideWaveProps {
  children?: React.ReactNode
  title: string
  maxWidth?: maxWidthKeys
  contentWidth?: number
  wave?: 'red' | 'black'
  reverse?: boolean
}

export default function WideWave({
  children,
  title,
  maxWidth = '7xl',
  contentWidth = 60,
  wave = 'red',
  reverse,
}: WideWaveProps) {
  const redWave = {
    backgroundPosition: '-1px -1px',
  }

  let waveClass = 'bg-cu-waves-red-full'
  let waveBgColor = 'bg-cu-red'

  if (wave === 'black') {
    waveClass = 'bg-cu-waves-black-full'
    waveBgColor = 'bg-cu-black-900'
  }

  // Needs to be a class for consistency in RDS
  const innerPadding = 'px-8 md:px-10'

  return (
    <section
      className={`cu-widewaves ${waveClass} ${waveBgColor} ${innerPadding} bg-[length:100.5%] bg-no-repeat cu-browsers-edge not-contained text-white pt-16 sm:pt-24 md:pt-36 lg:pt-44 xl:pt-52 pb-8 md:pb-20`}
      style={redWave}
    >
      <TextMedia maxWidth={maxWidth} reverse={reverse ? true : false}>
        <TextMedia.Content contentWidth={contentWidth}>
          <PageHeader as="h2" header={title} size="md" noUnderline isWhite />
          {children}
        </TextMedia.Content>
        <TextMedia.Aside>Img</TextMedia.Aside>
      </TextMedia>
    </section>
  )
}
