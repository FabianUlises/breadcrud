import React from 'react'

const Home_header = () => {
  return (
    <div>
        {/* Start of header */}
        <header className='site-header flex'>
        {/* Start of dummy subscribe section */}
            <div className="header-subscribe">
                <input type="email" placeholder='dummy form' required />
                <button>Subscribe</button>
            </div>
            {/* End of subscription section */}
            {/* Start of nav */}
                <nav className='site-nav flex'>
                    {/* Start of nav logo container */}
                    <div className="nav-logo">
                        <h1><a href="/breads">BreadCRUD</a></h1>
                    </div>
                    {/* Start of nav links */}
                    {/* <ul className='nav-links'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Me</a></li>
                    </ul> */}
                    <div className="burger">
                        <div className="btn1"></div>
                        <div className="btn2"></div>
                        <div className="btn3"></div>
                    </div>
                </nav>
            {/* End of nav */}
        </header>
        {/* End of header */}
    </div>
  )
}

module.exports = Home-header;
