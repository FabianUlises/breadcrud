const React = require('react');
const Header = require('./components/Home_header');
const Content = require('./components/Home_content');

const Default = (html) => {
    return(
        <html lang='en'>
            <head>
                <metadata charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="description" content="A sandboxCRUD app meant to demonstrate CRUD operations."></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
                <link rel="stylesheet" href="/main.css" />
                <title>{html.title || 'EmazingBreads'}</title>
            </head>
            <body>
                {/* Header component */}
                <Header />
                {/* Home contents */}
                <Content html={html} />
            </body>
        </html>
    )
};
module.exports = Default;