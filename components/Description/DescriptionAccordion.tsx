import { useState } from 'react'

export interface DescriptionAccordionProps {
  term: string
  children: React.ReactNode
}

export const DescriptionAccordion = ({
  term,
  children,
}: DescriptionAccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const uniqueName = term.toLowerCase().replace(/ +/g, '-')

  return (
    <>
      <dt>
        <button
          id={`${uniqueName}-header`}
          aria-controls={`${uniqueName}-panel`}
          aria-expanded={isExpanded}
        >
          {uniqueName}
          <br />
          {term}
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z" />
          </svg>
        </button>
      </dt>

      <dd>{children}</dd>
    </>
  )
}

DescriptionAccordion.displayName = 'Description.Accordion'
