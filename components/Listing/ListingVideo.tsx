import React from 'react'
import { videoStyles } from './Listing.Styles'

export interface ListingVideoProps {
  url: string;
  size?: 'small' | 'default';
}

export const ListingVideo = ({
  url,
  size = 'default',
}: ListingVideoProps) => {
  return url ? (
<iframe className={`cu-figure ${videoStyles.figure} ${videoStyles[size]}`} src={url} />
  ) : null ;
}

ListingVideo.displayName = 'Listing.Video'


