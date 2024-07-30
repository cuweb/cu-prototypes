'use client'
import PlaceHolder from '@/app/homepage/includes/PlaceHolder'
import HomeStats from '@/app/homepage/includes/HomeStats'
import HomeNews from '@/app/homepage/includes/HomeNews'

import FullBanner from '@/components-homepage/FullBanner'

export default function Page() {
  return (
    <>
      <FullBanner />
      <PlaceHolder name="Announcement / Boxed Ad" />
      <HomeStats />
      <HomeNews />
      <PlaceHolder name="Red Wave" maxWidth="full" />
    </>
  )
}
