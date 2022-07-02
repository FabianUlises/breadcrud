const React = require('react');

const Default = (html) => {

    const navSlider = () => {
        console.log('menu pressed')
    }
    return(
        <html>
            <head>
                <link rel="stylesheet" href="/main.css" />
                <title>{html.title || 'Default'}</title>
            </head>
            <body>
                {/* Start of header */}
                <header className='site-header'>
                    {/* Start of dummy subscribe section */}
                    <div className="subscribe">
                        <input type="email" placeholder='dummy form' required />
                        <button>Subscribe</button>
                    </div>
                    {/* End of subscription section */}
                    {/* Start of nav */}
                        <nav className='site-nav wrapper'>
                            {/* Start of nav logo container */}
                            <div className="nav-logo">
                                <h1><a href="/breads">BreadCRUD</a></h1>
                            </div>
                            {/* Start of nav links */}
                            <ul className='nav-links'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact Me</a></li>
                            </ul>
                            <div className="burger" onClick={() => {navSlider()}}>
                                <div className="btn1"></div>
                                <div className="btn2"></div>
                                <div className="btn3"></div>
                            </div>
                        </nav>
                    {/* End of nav */}
                </header>
                {/* End of header */}


                {/* Site wrapper */}
                <div className="wrapper">
                    <div className="content-wrapper wrapper">
                        {html.children}
                    </div>
                </div>
                <script>
                    console.log('hello')
                </script>
            </body>
        </html>
    )
}
module.exports = Default;