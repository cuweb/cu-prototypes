import { useState } from 'react'
import { metaStyles } from './Description.Styles'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

export interface DescriptionAccordionProps {
  term: string
  children: React.ReactNode
}

export const DescriptionAccordion = ({
  term,
  children,
}: DescriptionAccordionProps) => {
  const [ariaExpanded, setAriaExpanded] = useState(false)
  const [collapsed, setCollapsed] = useState(true)
  const [hidden, setHidden] = useState(true)

  const onContentToggle = () => {
    setAriaExpanded((current) => !current)
    setCollapsed((current) => !current)
    setHidden((current) => !current)
  }

  const termLabel = term.toLowerCase().replace(/ +/g, '-')

  return (
    <div className={`${metaStyles.metaBase}`}>
      <dt className={metaStyles.term}>
        <button
          className={metaStyles.button}
          id={termLabel}
          aria-expanded={ariaExpanded}
          onClick={onContentToggle}
        >
          {term}

          <ChevronRightIcon
            className={`${metaStyles.chevron} ${
              collapsed ? 'rotate-0' : 'rotate-90'
            }`}
          />
        </button>
      </dt>

      <dd className={metaStyles.details} hidden={hidden}>
        {children}
      </dd>
    </div>
  )
}

DescriptionAccordion.displayName = 'Description.Accordion'
