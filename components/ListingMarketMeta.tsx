import { metaStyles } from './Listing.Styles'
import { BanknotesIcon } from '@heroicons/react/24/outline'

export interface ListingMarketMetaProps {
  condition?: string
  cost?: string
}

export const ListingMarketMeta = ({
  condition = 'not specified',
  cost = 'Free',
}: ListingMarketMetaProps) => {
  return (
    <>
      {cost && (
        <p className={`${metaStyles.itemLarge} ${metaStyles.alignIcon}`}>
          <BanknotesIcon className={metaStyles.iconLarge} aria-hidden="true" />
          Item is listed for ${cost}
        </p>
      )}

      <ul className={metaStyles.wrapper}>
        <li className={metaStyles.item}>
          {condition} condition | Price is flexible
        </li>
      </ul>
    </>
  )
}
