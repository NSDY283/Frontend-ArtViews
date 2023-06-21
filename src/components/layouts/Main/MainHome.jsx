import React from 'react'
import { Video } from '../../ui/Video/Video'
import { TextVideo } from '../../ui/TextVideo/TextVideo'
import '../Main/MainHome.css'


export const Main = () => {
  return (
    <div className="main">
      <TextVideo/>
      <Video/>
    </div>
  )
}
