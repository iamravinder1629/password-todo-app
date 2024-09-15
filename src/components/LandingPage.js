import React from 'react'
import '../components/LandingPage.css'

function LandingPage() {
  return (

    <>
      <div className='landing align-items-center d-flex justify-content-center '>
        <div className='h-50 w-100'>
          <svg className='mainlight'>
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              RAVINDER
            </text>
          </svg>

          <div className="sub">
            <div className="typewriter">
              <h1>code with &#123;Ravinder&#x7D;....</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
