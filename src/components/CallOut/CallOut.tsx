import React from 'react'
import { PageHeader, utils } from '@carletonuniversity/rds'
const { maxWidthClasses, justifyContentClasses } = utils

type maxWidthKeys = keyof typeof maxWidthClasses
type justifyContentKeys = keyof typeof justifyContentClasses

export interface CallOutProps {
  children?: React.ReactNode
  title: string
  justify?: justifyContentKeys
  maxWidth?: maxWidthKeys
}

export default function CallOut({
  children,
  title,
  maxWidth = '4xl',
  justify = 'center',
}: CallOutProps) {
  return (
    <div
      className={`not-contained cu-component-spacing cu-callout cu-callout--${justify} ${maxWidthClasses[maxWidth]} mx-auto border-8 md:border-[12px] border-solid border-cu-black-50 px-8 pt-5 pb-6 md:px-16 md:pt-8 md:py-10 rounded-lg bg-white`}
    >
      <PageHeader
        as="h2"
        header={title}
        size="md"
        isCenter={justify === 'center' ? true : false}
      />
      {children}
    </div>
  )
}
