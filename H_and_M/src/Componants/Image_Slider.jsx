import React from 'react'
import '../StyleComponant/Image.css'

const Image_Slider = () => {
  return (
    <div>
        {/* <!-- Image_Slider --> */}
        <div style={{fontFamily:"Arial, Helvetica, sans-serif", border:"0px", overflow:"hidden"}}>
            <div className="slider-container">
                <div style={{width: "30%", transition:"transform 0.3s ease-in-out"}} className="slider-wrapper" id="slider">
                    <div className="slider-item">
                        <img className="Imgstyle" src="https://www.jefit.com/wp/wp-content/uploads/2021/11/19members-150x150.png" alt="Image 1"/>
                    </div>
                    <div className="slider-item">
                        <img className="Imgstyle" src="https://www.jefit.com/wp/wp-content/uploads/2021/11/11members-150x150.png" alt="Image 2"/>
                    </div>
                    <div className="slider-item">
                        <img className="Imgstyle" src="https://www.jefit.com/wp/wp-content/uploads/2021/11/10members-150x150.png" alt="Image 3"/>
                    </div>
                    <div className="slider-item">
                        <img className="Imgstyle" src="https://www.jefit.com/wp/wp-content/uploads/2021/11/17members-150x150.png" alt="Image 4"/>
                    </div>
                    <div className="slider-item">
                        <img className="Imgstyle" src="https://www.jefit.com/wp/wp-content/uploads/2021/11/7members-150x150.png" alt="Image 5"/>
                    </div>
                    <div className="slider-item">
                        <img className="Imgstyle" src="https://www.jefit.com/wp/wp-content/uploads/2021/11/16members-150x150.png" alt="Image 6"/>
                    </div>
                    <div className="slider-item">
                        <img className="Imgstyle" src="https://www.jefit.com/wp/wp-content/uploads/2021/11/2members-150x150.png" alt="Image 7"/>
                    </div>
                    <div className="slider-item">
                        <img className="Imgstyle" src="https://www.jefit.com/wp/wp-content/uploads/2021/11/8members-150x150.png" alt="Image 8"/>
                    </div>
                    <div className="slider-item">
                        <img className="Imgstyle" src="https://www.jefit.com/wp/wp-content/uploads/2021/11/5members-150x150.png" alt="Image 9"/>
                    </div>
                    <div className="slider-item">
                        <img className="Imgstyle" src="https://www.jefit.com/wp/wp-content/uploads/2021/11/9members-150x150.png" alt="Image 10"/>
                    </div>
                    <div className="slider-item">
                        <img className="Imgstyle" src="https://www.jefit.com/wp/wp-content/uploads/2021/11/1members-150x150.png" alt="Image 11"/>
                    </div>
                    
                </div>
        </div>
        </div>
    </div>
  )
}

export default Image_Slider