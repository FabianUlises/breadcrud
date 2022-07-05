const React = require('react');

const welcomePage = () => {
    return(
        <html lang='en'>
            <head>
                <meta charset="UTF-8" />
                <link rel="stylesheet" href="/welcome.css" />
                <title>BreadCrud</title>
            </head>
            <body>
                {/* Start of wrapper */}
                <div className="wrapper">
                    <div className="content">
                        {/* Content */}
                        <h1>Welcome To Bread<span className="color-highlight">Crud</span></h1>
                        <h3>This app is meant for crud demonstration purposes only. <span className="color-highlight"> Explore and have fun</span>.</h3>
                        {/* Link to app */}
                        <a href="/breads" className='color-highlight'>click here to continue</a>
                        <div className="details">
                            <h2>Details</h2>
                            <h3>This app was created using </h3>
                            <ul>
                                <li>NodeJS<img src='/images/nodejs.png' height="35px" /></li>
                                <li>ExpressJS<img src='/images/expressjs.png' height="35px" /></li>
                                <li>Express React<img src='/images/react.png' height="35px" /></li>
                                <li>Mongoose</li>
                                <li>MongoDB<img src='/images/mongodb.png' height="35px" /></li>
                                <li>CSS<img src='/images/css.png' height="35px" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* End of wrapper */}


            </body>
        </html>
    )
}
module.exports = welcomePage;