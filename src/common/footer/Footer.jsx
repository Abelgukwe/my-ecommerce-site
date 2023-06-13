import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Gukwe Gadgets</h1>
            <p>Gukwe Gadgets Store is a leading retail destination for high-quality electronic devices and accessories. With a wide range of options including smartphones, tablets, laptops, smartwatches, headphones, and more, the store caters to the needs of tech enthusiasts. Offering excellent customer service and a diverse selection of products, Gukwe Gadgets Store strives to create a seamless and enjoyable shopping experience for customers seeking the latest and most innovative gadgets.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>306 Goromonzi New Stands </li>
              <li>Email: abelgukwe@gmail.com</li>
              <li>Phone: +263 777 603 657</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
