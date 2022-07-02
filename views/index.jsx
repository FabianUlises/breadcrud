const React = require('react');
const Default = require('./layouts/default');
const Index = ({breads, bakers, title}) => {
    return(
        <Default title={title}>
            <main className='home-page'>
                <div className="home-banner">
                </div>
                <div className="newButton">
                    <a className='home-page-link' href="/breads/new">Add a new bread</a>
                </div>
                <h3>Bakers</h3>
                    <ul>
                        {
                            bakers.map((baker, i) => {
                                return(
                                    <li key={baker._id}>
                                        <a href={`/bakers/${baker._id}`}>{baker.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                <ul>
                {breads.map((bread, index) => {
                    return(
                        
                            <li key={bread._id}>
                                <a href={`/breads/${bread._id}`}>{bread.name}</a>
                            </li>
                        
                        )
                    })}
                </ul>
            </main>


        </Default>
    )
}
module.exports = Index;