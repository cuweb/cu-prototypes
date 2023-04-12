import React from 'react'
import { MarketplaceItem, StackedList } from '@carletonuniversity/rds'
import { MarketplaceData as marketplaceData } from '../../../data/MarketplaceData'

export const MarketplaceListing = () => {
  return (
    <StackedList header="Marketplace" cols="2" hasShadow>
      {marketplaceData.map(
        ({ id, title, link, image, alt, condition, cost, category }) => (
          <MarketplaceItem key={id} as="li" link={link}>
            <MarketplaceItem.Image image={image} alt={alt} />
            <MarketplaceItem.Content>
              <MarketplaceItem.Title title={title} link={link} />
              <MarketplaceItem.Details condition={condition} cost={cost} />
              <MarketplaceItem.Category category={category} />
            </MarketplaceItem.Content>
          </MarketplaceItem>
        ),
      )}
    </StackedList>
  )
}
