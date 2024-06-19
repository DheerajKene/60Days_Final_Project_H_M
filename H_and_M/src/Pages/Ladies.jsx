import React from 'react'
import '../StyleComponant/Ladies.css'
import '../StyleComponant/Image.css'
import DescriptionBox from '../Componants/DescriptionBox'
import Footer from '../Componants/Footer'
import Image_Slider from '../Componants/Image_Slider'

const Ladies = () => {
  return (
    <>
    <div id='MainBody'>
        <div id='leftSidebar'></div>
{/* ---------------Main Image section---------------             */}        
        <div id='middleImg'>

            <div id='img'>
                <div>
                    <button>
                        <a href="https://www2.hm.com/en_in/women/new-arrivals/view-all.html">Shop Now</a>
                    </button>
                </div>
            </div>

{/* ---------------Notification Bar---------------             */}
            <div id='Notification_Bar1st'>
                <h2>Dreaming of dresses</h2>
                <h6>The ideal choice for the in between weather starting Rs799</h6>
                
                <button>Shop now</button>
            </div>


            <Image_Slider/>

{/* ---------------Notification Bar---------------             */}
            <a href="">
            <div id='Notification_Bar2st' href=''>
                <h2 style={{color:'red'}}>Special treat: Member exclusive prices</h2>
                <h6>Enjoy exclusive styles for less!</h6>
            </div>
            </a>

{/* ---------------Main Image section---------------             */} 
            <div id='img2'>
                <div>
                    <button>
                        <a href="https://www2.hm.com/en_in/women/new-arrivals/view-all.html">Shop Now</a>
                    </button>
                </div>
            </div>   
{/* ---------------Main Image section---------------             */} 
            <div id='img3'>
                <div>
                    <button>
                        <a href="https://www2.hm.com/en_in/women/new-arrivals/view-all.html">Shop Now</a>
                    </button>
                </div>
            </div>  

{/* ---------------Notification Bar---------------             */}
            <div id='Notification_Bar3rd'>
                <h2>Italian dinning!</h2>
                <h6>Never shopped from H&M HOME, check "My account page" for offer.</h6>
                <button>Shop now</button>
                <button>My Account</button>
            </div>   

            <DescriptionBox/>
        </div>

        <div id='SearchBar'>
            
        </div>
    </div>

{/* ---------------Footer Section---------------             */}    
    <Footer/>
    </>
  )
}

export default Ladies