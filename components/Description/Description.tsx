import { DescriptionAccordian } from './DescriptionAccordian'
import { DescriptionMeta } from './DescriptionMeta'

export interface DescriptionProps {
  children: React.ReactNode
}

export const DescriptionWrapper = ({ children }: DescriptionProps) => {
  return <dl>{children}</dl>
}

export const Description = Object.assign(DescriptionWrapper, {
  Accordian: DescriptionAccordian,
  Meta: DescriptionMeta,
})
