import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'

export interface ListingVideoProps {
  source: string
}

export const ListingVideo = ({ source }: ListingVideoProps) => {
  // return <iframe className={videoStyles[size]} src={url} />

  const [initialRender, setInitialRender] = useState(false)

  // Run after first render and load the video player
  useEffect(() => {
    setInitialRender(true)
  }, [])

  // Prevent the component from rendering and avoid hydration error
  if (!initialRender) {
    return (
      <div>
        <p className="hidden">Loading video</p>
      </div>
    )
  } else {
    return <ReactPlayer url={source} width="100%" height="100%" controls />
  }
}
