import { DescriptionAccordion } from './DescriptionAccordion'
import { DescriptionMeta } from './DescriptionMeta'

export interface DescriptionProps {
  children: React.ReactNode
}

export const DescriptionWrapper = ({ children }: DescriptionProps) => {
  return <dl>{children}</dl>
}

export const Description = Object.assign(DescriptionWrapper, {
  Accordion: DescriptionAccordion,
  Meta: DescriptionMeta,
})
