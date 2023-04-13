import React from 'react'
import Link from 'next/link'
import { Listing, StackedList } from '@carletonuniversity/rds'
import { MarketplaceData as marketplaceData } from '../../data/MarketplaceData'
import Image from 'next/image'
import { ListingMarketMeta } from '@components/ListingMarketMeta'

export const MarketplaceListing = () => {
  return (
    <StackedList header="Marketplace" cols="2" hasShadow>
      {marketplaceData
        .slice(0, 6)
        .map(({ id, title, link, image, alt, condition, cost, tags }) => (
          <Listing key={id}>
            <Link href={link}>
              <Listing.Figure>
                <Image src={image} alt={alt} width="400" height="266" />
              </Listing.Figure>
              <Listing.Content>
                <Listing.Header text={title} />
                <ListingMarketMeta condition={condition} cost={cost} />
                <Listing.Badges tags={tags} />
              </Listing.Content>
            </Link>
          </Listing>
        ))}
    </StackedList>
  )
}
