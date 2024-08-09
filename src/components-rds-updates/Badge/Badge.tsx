// import { useLinkContext } from '../LinkProvider/useLinkContext'
import Link from 'next/link'

import { borderRadiusClasses } from '@/utils/optionClasses'
type borderRadiusKeys = keyof typeof borderRadiusClasses

export interface BadgeProps {
  text: string
  link?: string
  rounded?: borderRadiusKeys
  color?: 'green' | 'red' | 'yellow' | 'blue' | 'purple' | 'grey'
  noWordBreak?: boolean
}

export const Badge = ({
  text,
  link,
  rounded = 'full',
  color = 'grey',
  noWordBreak = false,
}: BadgeProps) => {
  // const LinkComponent = useLinkContext()
  const wordBreakClass = noWordBreak ? 'whitespace-nowrap' : ''

  return (
    <p
      className={`inline-flex cu-badge cu-badge--${color} not-prose ${borderRadiusClasses[rounded]} ${wordBreakClass}`}
    >
      {link ? (
        <>
          <Link href={link} className="cursor-pointer block">
            <span className="px-3.5 py-1.5 text-xs font-semibold block">
              {text}
            </span>
          </Link>
          {/* <LinkComponent href={link} className="cursor-pointer block">
          <span className="px-3.5 py-1.5 text-xs font-semibold block">
            {text}
          </span>
        </LinkComponent> */}
        </>
      ) : (
        <span className="px-3.5 py-1.5 text-xs font-semibold block">
          {text}
        </span>
      )}
    </p>
  )
}
