import React from 'react';

const Home_content = ({ html }) => {
  return (
    <div>
      {/* Site wrapper */}
      <div>
          {/* <div className="content-wrapper wrapper"> */}
              {html.children}
          {/* </div> */}
      </div>
    </div>
  )
}

module.exports = Home_content;
