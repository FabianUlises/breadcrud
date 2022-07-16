import React from 'react';

const Index_content = ({ breads, bakers }) => {
  return (
    <main className='home-page wrapper'>
        {/* Banner for home page */}
        <div className="home-banner">
        </div>
        {/* Container for button */}
        <div className="newButton flex">
        <a className='home-page-link' href="/breads/new">Add a new bread</a>
        </div>
        {/* Container for Breads and Bakers */}
        <div className="home-content-container flex">
            {/* Bakers */}
            <div className="bakers-container">
                <h3>Bakers</h3>
                <ul>
                    {/* Mapping through breads db */}
                    {bakers.map((baker, i) => {
                        return(
                            <li className='item baker-item' key={baker._id}>
                                <a href={`/bakers/${baker._id}`}>{baker.name}</a>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
            {/* Breads */}
            <div className="breads-container">
                <h3>Breads</h3>
                <ul>
                    {/* Mapping through breads db */}
                    {breads.map((bread, index) => {
                        return(
                            <li className='item bread-item' key={bread._id}>
                                <a href={`/breads/${bread._id}`}>{bread.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        {/* End of container */}
    </main>
  )
};

module.exports = Index_content;
