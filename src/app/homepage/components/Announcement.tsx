import React from 'react'

export interface AnnouncementProps {
  children?: React.ReactNode
  title: string
}

export default function Announcement({ children, title }: AnnouncementProps) {
  return (
    <div className="">
      <h2 className="">{title}</h2>
      {children}
    </div>
  )
}
