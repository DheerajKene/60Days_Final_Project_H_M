import React from 'react'
import '../StyleComponant/Footer.css'

const Footer = () => {
  return (
    <div id='Footer'>
      <div id='UpperFooter'>
        <div>
          <h2>Shop</h2>
          <ul>
            <li><a href=""></a></li>
            <li><a href="">Ladies</a></li>
            <li><a href="">Men</a></li>
            <li><a href="">Baby</a></li>
            <li><a href="">Kids</a></li>
            <li><a href="">H&M Home</a></li>
            <li><a href="">Sport</a></li>
            <li><a href="">Magazine</a></li>
          </ul>
        </div>
        <div>
        <h2>Corporate Info</h2>
          <ul>
            <li><a href=""></a></li>
            <li><a href="">Carrier at H & M</a></li>
            <li><a href="">About H & M group</a></li>
            <li><a href="">Sustainability</a></li>
            <li><a href="">Press</a></li>
            <li><a href="">Investor relations</a></li>
            <li><a href="">Corporate Governance</a></li>
            <li><a href="">Magazine</a></li>
          </ul>
        </div>
        <div>
        <h2>Help</h2>
          <ul>
            <li><a href=""></a></li>
            <li><a href="">Customer service</a></li>
            <li><a href="">My H & M</a></li>
            <li><a href="">Find a store</a></li>
            <li><a href="">Legal & Privacy</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Report a scam</a></li>
            <li><a href="">Cookie Notice</a></li>
            <li><a href="">Cookie Setting</a></li>
          </ul>
        </div>
        <div>
        <h2 style={{color:"white"}}>.</h2>
        <ul>
            <li><a href=""></a></li>
            <li><a href="">Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!</a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <br />
            <li style={{fontWeight:"1000"}}><a href="">Read more ...</a></li>
            
          </ul>
        </div>
      </div>
      <div id='LowerFooter'>
        <div>
         
          <div className="Social_Media_Icon">
            <a href="">
            <img src="http://myflock2.com/orgs_pub/church3568/caldb/images/gallery/Facebook_Icon_(Official_2).png" alt="" />
            </a>
          </div>

          <div className="Social_Media_Icon">
            <a href="">
            <img src="https://static.vecteezy.com/system/resources/previews/023/986/939/original/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png.png" alt="" />
            </a>
          </div>

          <div className="Social_Media_Icon">
            <a href="">
            <img src="https://pngimg.com/uploads/pinterest/pinterest_PNG75.png" alt="" />
            </a>
          </div>

          <div className="Social_Media_Icon">
            <a href="">
            <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
            </a>
          </div>

          <div className="Social_Media_Icon">
            <a href="">
            <img src="https://www.freepnglogos.com/uploads/transparent-instagram-logo----6.png" alt="" />
            </a>
          </div>
          
        </div>


        <div id='desc'>
            <h6>The content of this site is copyright-protected and is the property of H & M Hennes & Mauritz AB.</h6>
        </div>
{/* =================H&M Logo================ */}
        <div id='logo'>
          <a href="">
            <img src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1968-1999.png" alt="" />
          </a>
        </div>

        <a id='India' href="">
        <h5>INDIA Rs.</h5>
        </a>
        
      </div>

    </div>
  )
}

export default Footer