export interface DescriptionMetaProps {
  term?: string
  details?: React.ReactNode
  useColumns?: boolean
}

export const DescriptionMeta = ({
  term,
  details,
  useColumns,
}: DescriptionMetaProps) => {
  const columns = useColumns ? 'flex flex-row' : 'flex flex-col'

  return (
    <div className={columns}>
      <dt>{term}</dt>
      <dd>{details}</dd>
    </div>
  )
}

DescriptionMeta.displayName = 'Description.Meta'
