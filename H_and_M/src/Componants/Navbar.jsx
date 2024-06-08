import React from 'react'
import Header from './Header'
import '../StyleComponant/Navbar.css'


const Navbar = () => {
  return (
    <div>
      <Header/>
      {/* ---------------------------------NavBar Mega Menu----------------------------------- */}
    <nav>
        <div className='wrapper'>
            <div className='logo'>
                <a href=""></a>
            </div>
            <ul className='NavLinks'>
                <li className='Underline'>
                {/* ---------------------------Clothings------------------------ */}
                    <a className='MainLinks' href="">Ladies</a>
                    <div className='mega-box'>
                        <div className='content'>
                            {/* <div className="rowimg">
                                <img src="https://www.bluefly.com/cdn/shop/files/women.jpg?v=1613619704" alt="" />
                                <h4>Dresses</h4>
                                <h5>Up to 80% off</h5>
                            </div> */}
                            <div className='row'>
                                <header>New Arrivals</header>
                                <ul className="mega-links">
                                    <li><a href="">View All</a></li>
                                    <li><a href="">Clothes</a></li>
                                    <li><a href=""></a></li>
                                    <li><a href=""></a></li>

                                    <header>Offers</header>
                                      <li><a href="">Members</a></li>
                                      <li><a href="">Exclusive</a></li>
                                      <li><a href="">Prices</a></li>
                                      <li><a href="">Up to 40% off</a></li>
                                      <li><a href=""></a></li>
                                      <li><a href=""></a></li>

                                    <header>Trending Now</header>
                                      <li><a href="">Trending Now</a></li>
                                </ul>
                            </div>
                            <div className='row'>
                                <header>Shop by Product</header>
                                <ul className="mega-links">
                                    <li><a href="">View all</a></li>
                                    <li><a href="">Tops</a></li>
                                    <li><a href="">Dresses</a></li>
                                    <li><a href="">Shirt & Blouses</a></li>
                                    <li><a href="">Jeans</a></li>
                                    <li><a href="">Shoes</a></li>
                                    <li><a href="">Trousers</a></li>
                                    <li><a href="">Accessories</a></li>
                                    <li><a href="">Swimwear & Beachwear</a></li>
                                    <li><a href="">Nightwear</a></li>
                                    <li><a href="">Lingerie</a></li>
                                    <li><a href="">Blazers & Waistcoats</a></li>
                                    <li><a href="">Jumpsuits</a></li>
                                    <li><a href="">Loungewear</a></li>
                                    <li><a href="">SweatShirts & Hoodies</a></li>
                                    <li><a href="">Jackets & Coats</a></li>
                                    <li><a href="">Knitwear</a></li>
                                    <li><a href="">Sweaters & cardigans</a></li>
                                    <li><a href="">Sportswear</a></li>
                                    <li><a href="">Socks & tights</a></li>
                                    <li><a href="">Maternity wear</a></li>
                                    <li><a href="">Sale</a></li>
                                    <li><a href="">Premium Selection</a></li>
                                    <li><a href="">Care Products</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    {/* ---------------------------Shoes------------------------ */}
                    <a className='MainLinks'  href="">Men</a>
                    <div className='mega-box'>
                        <div className='content'>
                            {/* <div className="rowimg">
                                <img src="https://www.bluefly.com/cdn/shop/files/women.jpg?v=1613619704" alt="" />
                                <h4>Dresses</h4>
                                <h5>Up to 80% off</h5>
                            </div> */}
                            <div className='row'>
                                <header>Offers</header>
                                <ul className="mega-links">
                                      <li><a href="">Members Exclusive price</a></li>
                                      <li><a href="">Flat 40% off</a></li>
                                      <li><a href=""></a></li>
                                      <li><a href=""></a></li>

                                    <header>New Arrivals</header>
                                      <li><a href="">View All</a></li>
                                      <li><a href="">Clothes</a></li>
                                      <li><a href="">Shoes & Accessories</a></li>
                                      <li><a href=""></a></li>
                                      <li><a href=""></a></li>

                                    <header>Lookbook</header>
                                      <li><a href="">Casual Looks</a></li>
                                      <li><a href="">Smart Looks</a></li>
                                      <li><a href="">Street Looks</a></li>
                                      <li><a href="">Athleisure Looks</a></li>

                                    <header>Trending Now</header>
                                      <li><a href="">Trending Now</a></li>
                                </ul>
                            </div>
                            <div className='row'>
                                <header>Shop by Product</header>
                                <ul className="mega-links">
                                    <li><a href="">View all</a></li>
                                    <li><a href="">Polos</a></li>
                                    <li><a href="">T-shirt & Tops</a></li>
                                    <li><a href="">Shirts</a></li>
                                    <li><a href="">Trousers</a></li>
                                    <li><a href="">Jeans</a></li>
                                    <li><a href="">Accessories</a></li>
                                    <li><a href="">Shorts</a></li>
                                    <li><a href="">Hoodies & Sweatshirts</a></li>
                                    <li><a href="">Basics</a></li>
                                    <li><a href="">Sweamwear</a></li>
                                    <li><a href="">Jackets & Coats</a></li>
                                    <li><a href="">Blazers & Suits</a></li>
                                    <li><a href="">Sweaters & Cardigans</a></li>
                                    <li><a href="">Underwear</a></li>
                                    <li><a href="">Socks</a></li>
                                    <li><a href="">Sportwear</a></li>
                                    <li><a href="">Care products</a></li>
                                    <li><a href="">Sleepwear & Loungewear</a></li>
                                    <li><a href="">Premium selection</a></li>
                                    <li><a href="">Sale</a></li>
                                </ul>
                            </div>
                            <div className='row'>
                                <header>Sustainability</header>
                                <ul className="mega-links">
                                    <li><a href="">H&M Take Care</a></li>
                                    <li><a href="">Learn More</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    {/* ---------------------------HandBags------------------------ */}
                    <a className='MainLinks' href="">Baby</a>
                    <div className='mega-box'>
                        <div className='content'>
                            {/* <div className="rowimg">
                                <img src="https://www.bluefly.com/cdn/shop/files/handbag2.jpg?v=1613619716" alt="" />
                                <h4>SATCHELS</h4>
                                <h5>Up to 60% off</h5>
                            </div> */}
                            <div className='row'>
                                <header>Offers</header>
                                <ul className="mega-links">
                                      <li><a href="">Members Prices</a></li>
                                      <li><a href=""></a></li>
                                      <li><a href=""></a></li>

                                    <header>Life with Baby</header>
                                      <li><a href="">Guides and Inspo</a></li>
                                      <li><a href=""></a></li>
                                      <li><a href=""></a></li>

                                    <header>Trending Now</header>  
                                      <li><a href="">The Summer</a></li>
                                      <li><a href="">Shop 0-2Y</a></li>
                                      <li><a href="">Little characters</a></li>
                                      <li><a href="">New styles</a></li><li><a href="">Wallets & Cardholders</a></li>
                                </ul>
                            </div>
                            <div className='row'>
                                <header>Newborn</header>
                                <ul className="mega-links">
                                      <li><a href="">View All</a></li>
                                      <li><a href="">New Arrivals</a></li>
                                      <li><a href="">Clothing</a></li>
                                      <li><a href="">Accessories</a></li>
                                      <li><a href="">Outwear</a></li>
                                      <li><a href=""></a></li>
                                      <li><a href=""></a></li>

                                    <header>Baby Girl</header>
                                      <li><a href="">View All</a></li>
                                      <li><a href="">New Arrivals</a></li>
                                      <li><a href="">Clothing</a></li>
                                      <li><a href="">Accessories</a></li>
                                      <li><a href="">Outwear</a></li>
                                </ul>
                            </div>
                            <div className='row'>
                                <header>Baby Boy</header>
                                <ul className="mega-links">
                                <li><a href="">View All</a></li>
                                      <li><a href="">New Arrivals</a></li>
                                      <li><a href="">Clothing</a></li>
                                      <li><a href="">Accessories</a></li>
                                      <li><a href="">Outwear</a></li>
                                </ul>
                            </div>
                            <div className='row'>
                                <header>Shop by Product</header>
                                <ul className="mega-links">
                                      <li><a href="">View All</a></li>
                                      <li><a href="">New Arrivals</a></li>
                                      <li><a href="">Clothing</a></li>
                                      <li><a href="">Accessories</a></li>
                                      <li><a href="">Outwear</a></li>
                                      <li><a href="">Party & Occasion</a></li>
                                      <li><a href="">Sale</a></li>
                                      <li><a href=""></a></li>
                                      <li><a href=""></a></li>

                                    <header>Sustainability</header>
                                      <li><a href="">H&M Take Care</a></li>
                                      <li><a href="">Learn More</a></li>
                                     
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    {/* ---------------------------Designers------------------------ */}
                    <a className='MainLinks' href="">Kids</a>
                    <div className='mega-box'>
                        <div className='content'>
                            {/* <div className="rowimg">
                                <img src="https://www.bluefly.com/cdn/shop/files/handbag.jpg?v=1613619701" alt="" />
                                <h4>GUCCI</h4>
                                <h5>Up to 64% off</h5>
                            </div> */}
                            <div className='row'>
                                <header>WOMEN'S SUNGLASSES</header>
                                <ul className="mega-links">
                                    <li><a href="">Boltega veneta</a></li>
                                    <li><a href="">Burberry</a></li>
                                    <li><a href="">Celine</a></li>
                                    <li><a href="">Chloe</a></li>
                                    <li><a href="">Dolce & Gabbana</a></li>
                                    <li><a href="">Fendi</a></li>
                                    <li><a href="">Givenchy</a></li>
                                    <li><a href="">Gucci</a></li>
                                    <li><a href="">Mario valentino</a></li>
                                    <li><a href="">Prada</a></li>
                                    <li><a href="">Saint Laurent</a></li>
                                    <li><a href="">Salvatore Ferragemo</a></li>
                                    <li><a href="">Stella McCartney</a></li>
                                    <li><a href="">Valentino</a></li>
                                </ul>
                            </div>
                            <div className='row'>
                            <header>MEN'S SUNGLASSES</header>
                                <ul className="mega-links">
                                    <li><a href="">shop all</a></li>
                                    <li><a href="">Balenciago</a></li>
                                    <li><a href="">Boltega veneta</a></li>
                                    <li><a href="">Burberry</a></li>
                                    <li><a href="">Celine</a></li>
                                    <li><a href="">Chloe</a></li>
                                    <li><a href="">shop all</a></li>
                                    <li><a href="">Alexander & McQueen</a></li>
                                    <li><a href="">Balenciaga</a></li>
                                    <li><a href="">Bottega Veneta</a></li>
                                    <li><a href="">Chrstian Louboutin</a></li>
                                    <li><a href="">Dolce & Gabbana</a></li>
                                    <li><a href="">Fendi</a></li>
                                    <li><a href="">Gianvito Rossi</a></li>
                                    <li><a href="">Gucci</a></li>
                                    <li><a href="">Jimmy choo</a></li>
                                    <li><a href="">Monolo Blanhik</a></li>
                                    <li><a href="">Saint Lunrent</a></li>
                                    <li><a href="">Stuart Wtieztman</a></li>
                                    <li><a href="">Salvatore Ferrangamo</a></li>
                                    <li><a href="">Valentino</a></li>
                                    <li><a href="">VEJA</a></li>
                                    <li><a href="">Stella McCartney</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    {/* ---------------------------Sunglasses------------------------ */}
                    <a className='MainLinks' href="">H&M Home</a>
                    <div className='mega-box'>
                        <div className='content'>
                            {/* <div className="rowimg">
                                <img src="https://www.bluefly.com/cdn/shop/files/handbag.jpg?v=1613619701" alt="" />
                                <h4>GUCCI</h4>
                                <h5>Up to 64% off</h5>
                            </div> */}
                            <div className='row'>
                                <header>New Arrivals</header>
                                <ul className="mega-links">
                                      <li><a href="">New Products</a></li>
                                      <li><a href=""></a></li>
                                      <li><a href=""></a></li>

                                    <header>Offers</header>
                                      <li><a href="">Member Prices</a></li>
                                      <li><a href=""></a></li>
                                      <li><a href=""></a></li>

                                    <header>Shop by Room</header>
                                      <li><a href="">Bedroom</a></li>
                                      <li><a href="">Leavingroom</a></li>
                                      <li><a href="">Bathroom</a></li>
                                      <li><a href="">Nursery</a></li>
                                      <li><a href="">Kids Room</a></li>
                                      <li><a href="">Kitchen</a></li>
                                      <li><a href="">Balcony & Outdoor</a></li>
                                   
                                </ul>
                            </div>
                            <div className='row'>
                                <ul className="mega-links">
                                <header>Trending Now</header>
                                    <li><a href="">All sets Home essentials</a></li>
                                    <li><a href="">Must Have under Rs.999</a></li>
                                    <li><a href="">Scented candies</a></li>
                                    
                                </ul>
                            </div>
                            <div className='row'>
                                <ul className="mega-links">
                                <header>Shop by Product</header>
                                    <li><a href="">View All</a></li>
                                    <li><a href="">Decorations</a></li>
                                    <li><a href="">Cushions</a></li>
                                    <li><a href="">Bed line</a></li>
                                    <li><a href="">Wall Decorations</a></li>
                                    <li><a href="">Room Fragrance</a></li>
                                    <li><a href="">Serving & Dining</a></li>
                                    <li><a href="">Cookware</a></li>
                                    <li><a href="">Storage</a></li>
                                    <li><a href="">Bath & Shower</a></li>
                                    <li><a href="">Curtains</a></li>
                                    <li><a href="">Sleepware</a></li>
                                    <li><a href="">Blankets</a></li>
                                    <li><a href="">Sale</a></li>
                                    
                                </ul>
                            </div>
                            <div className='row'>
                                <ul className="mega-links">
                                <header>Sustainability</header>
                                    <li><a href="">Meet the Maker</a></li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    {/* ---------------------------JWELLARY & WATCHES------------------------ */}
                    <a className='MainLinks' href="">Sports</a>
                    <div className='mega-box'>
                        <div className='content'>
                            {/* <div className="rowimg">
                                <img src="https://www.bluefly.com/cdn/shop/files/handbag.jpg?v=1613619701" alt="" />
                                <h4>GUCCI</h4>
                                <h5>Up to 64% off</h5>
                            </div> */}
                            <div className='row'>
                                <header>Offers</header>
                                <ul className="mega-links">
                                    <li><a href="">Members Exclusive Prices</a></li>
                                </ul>
                            </div>
                            <div className='row'>
                            <header>Women</header>
                                <ul className="mega-links">
                                    <li><a href="">shop by activity</a></li>
                                    <li><a href="">View All</a></li>
                                    <li><a href="">New Arrivals</a></li>
                                    <li><a href="">Clothing</a></li>
                                    <li><a href="">Active Swimwears</a></li>
                                    <li><a href="">Outerwear</a></li>
                                    <li><a href="">Accessories & Equipments</a></li>
                                    <li><a href="">Maternity</a></li>
                                    
                                </ul>
                            </div>
                            <div className='row'>
                            <header>Men</header>
                                <ul className="mega-links">
                                    <li><a href="">shop by activity</a></li>
                                    <li><a href="">View All</a></li>
                                    <li><a href="">New Arrivals</a></li>
                                    <li><a href="">Clothing</a></li>
                                    <li><a href="">Active Swimwears</a></li>
                                    <li><a href="">Outerwear</a></li>
                                    <li><a href="">Accessories & Equipments</a></li>
                                    
                                </ul>
                            </div>
                            <div className='row'>
                            <header>Kids</header>
                                <ul className="mega-links">
                                    <li><a href="">View All</a></li>
                                    <li><a href="">New Arrivals</a></li>
                                    <li><a href="">Girls</a></li>
                                    <li><a href="">Boys</a></li>
                                    <li><a href="">Sport Accessories & Equipments</a></li>

                                    <header>Sale</header>
                                    <li><a href="">View All</a></li>
                                    <li><a href="">Women</a></li>
                                    <li><a href="">Men</a></li>
                                    <li><a href="">Kids</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    {/* ---------------------------ACCESSORIES------------------------ */}
                    <a className='MainLinks' href="">Sale</a>
                    <div className='mega-box'>
                        <div className='content'>
                            {/* <div className="rowimg">
                                <img src="https://www.bluefly.com/cdn/shop/files/handbag.jpg?v=1613619701" alt="" />
                                <h4>GUCCI</h4>
                                <h5>Up to 64% off</h5>
                            </div> */}
                            <div className='row'>
                                <header>WOMEN'S ACCESSORIES</header>
                                <ul className="mega-links">
                                    <li><a href="">Shop all</a></li>
                                    <li><a href="">Bags Charms, Straps, & Accessories</a></li>
                                    <li><a href="">Belts</a></li>
                                    <li><a href="">Cosmetic Bags</a></li>
                                    <li><a href="">Hats</a></li>
                                    <li><a href="">Gloves</a></li>
                                    <li><a href="">Scarves & Wraps</a></li>
                                    <li><a href="">Optical & Reading Glasses</a></li>
                                    <li><a href="">SunGlasses</a></li>
                                    <li><a href="">Travel bags & Luggage</a></li>
                                   
                                </ul>
                            </div>
                            <div className='row'>
                                <header>MEN'S ACCESSORIES</header>
                                <header>SHOP ALL</header>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    {/* ---------------------------Home------------------------ */}
                    <a className='MainLinks' href="/">Sustanability</a>
                    <div className='mega-box'>
                        <div className='content'>
                            {/* <div className="rowimg">
                                <img src="https://www.bluefly.com/cdn/shop/files/handbag.jpg?v=1613619701" alt="" />
                                <h4>GUCCI</h4>
                                <h5>Up to 64% off</h5>
                            </div> */}
                            <div className='row'>
                                <header>Our Work</header>
                                <ul className="mega-links">
                                    <li><a href="">Lets Innovate</a></li>
                                    <li><a href="">Lets be Fair</a></li>
                                    <li><a href="">Lets br for all</a></li>
                                    <li><a href="">Lets be transparent</a></li>
                                    <li><a href="">Lets Cleanup</a></li>
                                    <li><a href="">Lets close the loop</a></li>
                                    <li><a href="">Lets be reward our memberst</a></li>
                                   
                                </ul>
                            </div>
                            <div className='row'>
                                <header>H&M Take Care</header>
                                <ul className="mega-links">
                                    <li><a href="">Wash</a></li>
                                    <li><a href="">Care</a></li>
                                    <li><a href="">Repair & Remake</a></li>
                                    <li><a href="">Care Products</a></li>
                                    
                                </ul>
                            </div>
                            <div className='row'>
                                <header>Our commitment</header>
                                <ul className="mega-links">
                                    <li><a href="">H&M group sustainability Strategy</a></li>
                                    <li><a href="">H&M group sustainability Report</a></li>
                                    <li><a href="">H&M foundation</a></li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav> 
    </div>
  )
}

export default Navbar