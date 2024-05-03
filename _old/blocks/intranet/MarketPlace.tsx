import React from 'react'
import { StackedList, Listing } from '@carletonuniversity/rds'
import { ListingMarketMeta } from '@components/ListingMarketMeta/ListingMarketMeta'
import Link from 'next/link'
import { MarketplaceData } from '../../../src/data/MarketplaceData'
import Image from 'next/image'

export const MarketPlace = () => {
  return (
    <>
      <StackedList header="Marketplace" cols="2" hasBorder>
        {MarketplaceData.slice(0, 4).map(
          ({ id, title, link, image, alt, condition, cost }) => (
            <Listing key={id}>
              <Link href={link}>
                <Listing.Figure>
                  <Image src={image} alt={alt} width="400" height="266" />
                </Listing.Figure>
                <Listing.Content>
                  <Listing.Header text={title} />
                  <ListingMarketMeta condition={condition} cost={cost} />
                </Listing.Content>
              </Link>
            </Listing>
          ),
        )}
      </StackedList>
    </>
  )
}
