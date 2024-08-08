import React from 'react'
import { PageHeader, utils } from '@carletonuniversity/rds'

// Deconstruct propClass utils
const { maxWidthClasses } = utils

export interface RedWaveProps {
  children?: React.ReactNode
  // title: string
  maxWidth?: '2xl' | '3xl' | '4xl'
}

export default function RedWave({
  children,
  // title,
  maxWidth = '4xl',
}: RedWaveProps) {
  return (
    <div
      className={`not-contained cu-component-spacing ${maxWidthClasses[maxWidth]} mx-auto`}
    >
      <PageHeader as="h2" header="Red Wave Testing" noUnderline size="md" />
      {children}
    </div>
  )
}
