import React from 'react'

const Baker_show = ({ baker }) => {
  return (
    <div className="wrapper baker-container">
        <h2>{baker.name}</h2>
        <p>{baker.name} has been baking with us since {baker.startDate}</p>
        <p>About {baker.name}: {baker.bio}</p>
        <br />
        <h3 className='bakers-bread'>Breads {baker.name} has baked</h3>
        <ul className='color-highlight bakers-bread'>
        {
            baker.breads.map((bread) => {
            return(
                <li key={bread.id}>
                {bread.name}
                </li>  
            )
            })
        }
        </ul>
        {/* <form action={`/bakers/${baker.id}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE"/>
        </form> */}
    </div>
  )
}

module.exports = Baker_show;
