import React from 'react'

export const Video = () => {

    const item = [
        {
          id: 1,
          video: 'https://res.cloudinary.com/dwj1w03r9/video/upload/v1679606013/Blue_Animation_Simple_Vlog_Intro_Outro_Youtube_Video_4_gamwfw.mp4',
          formato: 'video/mp4',
        }
    ]

    return (
 
        item.map(item => {
   
          return  <div className="containerVideo" key={ item.id }>
                    <video width='54%' autoPlay loop>
                      <source src={ item.video} type={ item.formato }/>
                    </video>
                  </div>
         
   
        })
   
      )
}
