import React from 'react'
import '../StyleComponant/Header.css'
import Sign_In_box from './Sign_In_box'


const Header = () => {
  return (
    <div id='Main_Header'>
        <div id='LeftHeader'>
            <div className="Left_Header_content">
                <a href="">Customer Service</a>
            </div>
            <div className="Left_Header_content">
                <a href="">Newsletter</a>
            </div>
            <div className="Left_Header_content">
                <a href="">Find a store</a>
            </div>
            <div className="Left_Header_content">
                <a href="">. . .</a>
            </div>
        </div>
        <div id='MiddleHeader'>
            <div>
                <img src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png" alt="H&M" />
            </div> 
        </div>
        <div id='RightHeader'>
            <div className="Right_Header_content">
                <button> 
                <Sign_In_box/>
                </button>
            </div>
            <div className="Right_Header_content">
                <button><img src="https://tse1.mm.bing.net/th?id=OIP.aT9zFV4cwmBFWMmTMw6wKAHaGg&pid=Api&P=0&h=220" alt="" />Favourites</button>
            </div>
            <div className="Right_Header_content">
                <button> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAAA7Ozuenp4EBASTk5NNTU3Z2dnl5eWKiorr6+v7+/u4uLiZmZliYmLv7+9ISEhRUVH29vYSEhKCgoKkpKRXV1d8fHzNzc0rKytycnIwMDCtra3BwcEbGxvHx8ckJCRoaGi0tLQ3NzcO9G9GAAAEKUlEQVR4nO2d63aqMBBGaxUR0SKiovVW9f3f8awmKWpbbYYMzLDOt/+WpLM1JJPElby8AAAAAAAAAAAAAAAAAAAAAABA28T7qMw3xaDY5GW0j6XDYWa8e+t95203lg6Li3Qy/KFnGU5S6eAYmEfFA79PimguHWAo0yd6lql0iEHs77+/fBFN+9Nokd9/j3vpMGszv+leDskxu/lTdkwON51OR5vq+qqw+G1wiBfXB9atR8dA9QYWy0c9ZrqsWnEH38b3KvZnI0JafQ7vrUXGxMoFvvprWB9XT7YSFxszF/bO49mde3bWeFSMOMFi5PX0qOicomt4Q9+cLB12rKGWbpQjFHEjZ9lYTKzs6IKVos97K05cr8W5lt2FeePGRPpKLvdqym0aiIgZ9xJmfz/5jawjr+K6fmOLu5Gifpgo+7XK9k3ZD9Z42JkGDd0z/Un43DY0v1TmJyNbXPNs0c74otrlI1N+wRgRM647DKihbkfcFomJ7xxQw9nUkLBFxMycYczeqH4Tlya6SVAdE1PHkikibrYcw5kZULcM0TTAOmCwv9JXnNiULP1gpjc7TQv6rPA3zEyx0LhlYxtp+Ar9Xm0ztflM+Gefqs1rTE96YqjopLQ3HQfnM1/YvEbfBvGELa4xQ+LQBCYnPbBUddCZm5qFJJ7tFbOpQ1/KahrGfHIZOgdrhBHjKLYOWihoijXj1DVTOebvOFuWqauNBf55OfQltzPX3LvA08rsTNq/srLujNmus3eBmh1vLB03gXobOjDURIjhItLNIthQX45/zzjY0DO1OJ55c5DR+ej5YDuG6aUXsl3xk88NjIvXekFLhknAv3n8r70mUC0Z2o0/vpVqO7vw2oZsydD+VoRvWm4XDLxWJlsyNI9yLh5tvcNuyfBlnR9qp7+/MS8Pud/0qS1DOWD4DGuod8fZkgUbXl4t2n5Tt3NxXYINK3Ttyy755hYVuhYwXzkMRx0yrNkfvnfGsPZa+z6xrJQarlx84duyS6WGfJ1fX6lh6O8+rsBQABgSgaEAMCQCQwFgSASGAsCQCAwFgCERGAoAQyIwFACGRGAoAAyJwFAAGBKBoQAwJAJDAWBIBIYCwJAIDAWAIREYCgBDIjAUAIZEYCgADInAUAAYEoGhADAkAkMBYEgEhgLAkAgMBYAhERgKAEMiMBQAhkRgKAAMicBQABgSgaEAMCQCQwGYDc0ZQ7puDTFHR/KdMWQP29R0+p49aY/vONGYub5w7GfOePHsQNuLaF7DAWOF9tBsPddn2stAOW9McsfvaTk60R2ayHrw6NdV2xrOLx83c4m3u+C9N0v6siTuZvpewSv4/ZhIBbAfjhsPpJXuGDRwRXmWS1vdkDeTfuy30mKObfhhl4+Ip6fNQJbNadpAAwUAAAAAAAAAAAAAAAAAAAAA/Bf8A1NwMcYTd1PxAAAAAElFTkSuQmCC" alt="Cart" />
                Shopping bag</button></div> 
        </div>
        
    </div>
  )
}

export default Header