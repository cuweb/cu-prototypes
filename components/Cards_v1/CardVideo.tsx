import React from 'react'
import ReactPlayer from 'react-player'
import { videoStyle } from './Card.Styles'

export interface CardVideoProps {
  source: string
}

export const CardVideo = ({ source }: CardVideoProps) => {
  return (
    <div className={videoStyle.container}>
      <ReactPlayer
        url={source}
        className={videoStyle.player}
        width="100%"
        height="100%"
        controls
        // onDuration={handleDuration}
      />
    </div>
  )
}
