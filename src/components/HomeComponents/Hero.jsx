import React from 'react'
import '../../styles/HomeCss/hero.css'

const Hero = ({ image, title, description, buttonText }) => {
  return (
    <div className='homeContainer'>
      {/* <img src="../../assets/Image/homeImg.jpg" alt="Hero Image" className='heroImg' /> */}
      <img src={image || 'https://www.ascencia-business-school.mt/wp-content/uploads/2022/11/ascencia-malta-banner.jpg'} alt="Hero Image" className='heroImg' />
    
      <div className='heroContent'>
        <p className='heroTitle'>{title || 'We are eager to give you the best education'}</p>
        <h1 className='heroDescription'>{description || 'Welcome to Ascencia Malta'}</h1>
        <button className='heroButton btn-primary'>{buttonText || 'Discover Our Courses'}</button>
      </div>
    </div>
  )
}

export default Hero