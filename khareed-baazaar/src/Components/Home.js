import React from 'react'
import './Home.css'
import Product from './Product'

export default function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
  <img src="/assets/background.jpg" className="card-img" alt="Background" height="690px"/>
  <div className="card-img-overlay">

    <div className="container">

        <h5 className="card-title display-3"> All Your Favourites At One Place</h5>
        <div className="item">
        <div className='head-cont'>Buy anything you want</div>
        <p className='para' >From Cap to Shoes</p>
        <p className='para'>From Cloths to Jwellery</p>
        <p className='para'>& even Electronics items</p>

        </div>
    </div>
    
  </div>
</div>

      <Product/>

    </div>
  )
}
