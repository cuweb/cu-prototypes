import React from 'react'

// import { gridGapClasses } from '../../utils/propClasses'
import { utils } from '@carletonuniversity/rds'
const { gridGapClasses } = utils

type gridGapKeys = keyof typeof gridGapClasses

export interface BadgeGroupProps {
  children: React.ReactNode
  gap?: gridGapKeys
  isAbsolute?: boolean
  top?: number
  right?: number
  bottom?: number
  left?: number
}

export const BadgeGroup = ({
  children,
  gap = '2',
  isAbsolute = false,
  top = 0,
  right,
  bottom,
  left = 0,
}: BadgeGroupProps) => {
  const position = isAbsolute
    ? `absolute ${top !== undefined ? `top-${top}` : ''} ${right !== undefined ? `right-${right}` : ''} ${bottom !== undefined ? `bottom-${bottom}` : ''} ${left !== undefined ? `left-${left}` : ''}`
    : ''
  return (
    <div
      className={`cu-badgegroup cu-component flex flex-wrap md:flex-1 ${position} ${gridGapClasses[gap]}`}
    >
      {children}
    </div>
  )
}
