import React from 'react'

export interface WideWaveProps {
  children?: React.ReactNode
  wave?: 'red' | 'black'
  reverse?: boolean
}

export default function WideWave({ children, wave = 'red' }: WideWaveProps) {
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
      className={`cu-widewaves ${waveClass} ${waveBgColor} ${innerPadding} bg-[length:100.5%] bg-no-repeat cu-browsers-edge not-contained text-white pt-16 sm:pt-24 md:pt-36 lg:pt-44 xl:pt-56 2xl:pt-60 pb-8 md:pb-20`}
      style={redWave}
    >
      {children}
    </section>
  )
}
