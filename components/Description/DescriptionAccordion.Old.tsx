import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export interface DescriptionAccordionProps {
  term: string
  children: React.ReactNode
}

export const DescriptionAccordion = ({
  term,
  children,
}: DescriptionAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => setIsOpen(!isOpen)

  return (
    <>
      <dt>
        <button
          className="flex items-start justify-between w-full text-left text-gray-900"
          onClick={toggleAccordion}
        >
          <span className="text-base font-semibold leading-7">{term}</span>
          <span className="flex items-center ml-6 h-7">
            {isOpen ? (
              <MinusSmallIcon className="w-6 h-6" aria-hidden="true" />
            ) : (
              <PlusSmallIcon className="w-6 h-6" aria-hidden="true" />
            )}
          </span>
        </button>
      </dt>
      {isOpen && (
        <dd className="pr-12 mt-2 overflow-y-scroll max-h-40 md:max-h-full">
          {children}
        </dd>
      )}
    </>
  )
}

DescriptionAccordion.displayName = 'Description.Accordion'
