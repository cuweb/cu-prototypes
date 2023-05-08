import { metaStyles } from './Description.Styles'

export interface DescriptionMetaProps {
  term?: string
  children: React.ReactNode
  useColumns?: boolean
}

export const DescriptionMeta = ({
  term,
  children,
  useColumns,
}: DescriptionMetaProps) => {
  const columns = useColumns ? metaStyles.flexRow : metaStyles.flexCol

  return (
    <div className={`${metaStyles.metaBase} ${columns}`}>
      <dt className={metaStyles.term}>{term}</dt>
      <dd className={metaStyles.details}>{children}</dd>
    </div>
  )
}

DescriptionMeta.displayName = 'Description.Meta'
