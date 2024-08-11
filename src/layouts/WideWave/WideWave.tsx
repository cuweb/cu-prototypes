import React from 'react'

export interface WideWaveProps {
  children?: React.ReactNode
  wave?: 'red' | 'black'
}

export default function WideWave({ children, wave = 'red' }: WideWaveProps) {
  const waveClass =
    wave === 'red' ? 'bg-cu-waves-red-hard-edge' : 'bg-cu-waves-black-hard-edge'
  const waveBgPosition = {
    backgroundPosition: '-1px -1px',
  }
  const waveBgColor = wave === 'red' ? 'bg-cu-red' : 'bg-cu-black-900'

  // Needs to be a class for consistency in RDS
  const innerPadding = 'px-8 md:px-10'

  return (
    <section
      className={`cu-widewaves ${waveClass} ${waveBgColor} ${innerPadding} bg-[length:100.5%] bg-no-repeat cu-browsers-edge not-contained text-white pt-16 sm:pt-24 md:pt-28 lg:pt-40 xl:pt-44 2xl:pt-60 pb-8 md:pb-20`}
      style={waveBgPosition}
    >
      {children}
    </section>
  )
}
