import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { videoStyle } from './Card.Styles'

export interface CardVideoProps {
  source: string
}

export const CardVideo = ({ source }: CardVideoProps) => {
  const [initialRender, setInitialRender] = useState(false)
  //   const [videoDuration, setVideoDuration] = useState(0)

  // Run after first render and load the video player
  useEffect(() => {
    setInitialRender(true)
  }, [])

  //   const handleDuration = (duration: number) => {
  //     setVideoDuration(duration)
  //   }

  // Prevent the component from rendering and avoid hydration error
  if (!initialRender) {
    return (
      <div className={videoStyle.container}>
        <p className="hidden">Loading video</p>
      </div>
    )
  } else {
    return (
      <div className={videoStyle.container}>
        <ReactPlayer
          url={source}
          className={videoStyle.player}
          width="100%"
          height="100%"
          controls
          //   onDuration={handleDuration}
        />
      </div>
    )
  }
}
