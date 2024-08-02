import React from 'react'
import { PageHeaders } from '@carletonuniversity/rds'
import { maxWidthClasses } from '@/utils/optionClasses'

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
      <PageHeaders as="h2" header="Red Wave Testing" noUnderline size="md" />
      {children}
    </div>
  )
}
