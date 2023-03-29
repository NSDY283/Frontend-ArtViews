import React from 'react'

export const Slider = () => {
  return (
    <div className="slider">
      <div className="subSlider">
        <div className="slides">

          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />

          <div className="slide first">
            <img src="https://res.cloudinary.com/dwj1w03r9/image/upload/v1679693030/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_7_twbcwz.png" alt="" />
          </div>
          <div className="slide">
            <img src="https://res.cloudinary.com/dwj1w03r9/image/upload/v1679693026/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_5_rl5sup.png" alt="" />
          </div>
          <div className="slide">
            <img src="https://res.cloudinary.com/dwj1w03r9/image/upload/v1679693028/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_6_euowbs.png" alt="" />
          </div>

          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
          </div>

        </div>

        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
        </div>

      </div>
    </div>
  )
}
