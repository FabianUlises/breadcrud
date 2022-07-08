const React = require('react');

const Default = (html) => {
    return(
        <html>
            <head>
                <metadata charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="description" content="A sandboxCRUD app meant to demonstrate CRUD operations."></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
                <link rel="stylesheet" href="/main.css" />
                <title>BreadCrud</title>
            </head>
            <body>
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

                {/* Site wrapper */}
                <div className="wrapper">
                    {/* <div className="content-wrapper wrapper"> */}
                        {html.children}
                    {/* </div> */}
                </div>
            </body>
        </html>
    )
}
module.exports = Default;