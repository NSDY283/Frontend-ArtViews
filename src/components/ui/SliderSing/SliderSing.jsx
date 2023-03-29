import React from 'react'

export const SliderSing = () => {
  return (
    <div className="sliderSing">
      <div className="subSliderSing">
        <div className="slidesSing">

          <input type="radio" name="radio-btnSing" id="radio1Sing" />
          <input type="radio" name="radio-btnSing" id="radio2Sing" />
          <input type="radio" name="radio-btnSing" id="radio3Sing" />

          <div className="slideSing firstSing">
            <img src="https://res.cloudinary.com/dwj1w03r9/image/upload/v1680032540/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_9_jkn04d.png" alt="" />
          </div>
          <div className="slideSing">
            <img src="https://res.cloudinary.com/dwj1w03r9/image/upload/v1680032548/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_8_um5bkx.png" alt="" />
          </div>
          <div className="slideSing">
            <img src="https://res.cloudinary.com/dwj1w03r9/image/upload/v1680032543/Black_Blush_Elegant_Luxury_Name_Initial_Typography_Photography_Logo_10_mvnav5.png" alt="" />
          </div>

          <div className="navigation-autoSing">
            <div className="auto-btn1Sing"></div>
            <div className="auto-btn2Sing"></div>
            <div className="auto-btn3Sing"></div>
          </div>

        </div>

        <div className="navigation-manual">
          <label htmlFor="radio1Sing" className="manual-btnSing"></label>
          <label htmlFor="radio2Sing" className="manual-btnSing"></label>
          <label htmlFor="radio3Sing" className="manual-btnSing"></label>
        </div>
      </div>
    </div>
  )
}
