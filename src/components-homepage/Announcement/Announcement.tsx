import React from 'react'
import { PageHeaders } from '@carletonuniversity/rds'
import { maxWidthClasses, justifyContent } from '@/utils/optionClasses'

export interface AnnouncementProps {
  children?: React.ReactNode
  title: string
  justify?: 'start' | 'center'
  maxWidth?: '2xl' | '3xl' | '4xl'
}

export default function Announcement({
  children,
  title,
  maxWidth = '4xl',
  justify = 'center',
}: AnnouncementProps) {
  return (
    <div
      className={`not-contained cu-announcement cu-announcement--${justify} ${maxWidthClasses[maxWidth]} mx-auto border-8 md:border-[12px] border-solid border-cu-black-50 px-8 pt-5 pb-6 md:px-16 md:pt-8 md:py-10 rounded-lg bg-white`}
    >
      <PageHeaders
        as="h2"
        header={title}
        // noUnderline
        size="md"
        isCenter={justify === 'center' ? true : false}
      />
      {children}
    </div>
  )
}
