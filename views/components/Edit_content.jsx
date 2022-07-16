import React from 'react'

const Edit_content = ({ bread, bakers }) => {
  return (
    <div>
        <div className="wrapper form-container">
          <h2>Edit a bread</h2>
          <form action={`/breads/${bread.id}?_method=PUT`} method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required defaultValue={bread.name} />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input type="text" name="image" id="image" defaultValue={bread.image} />
            </div>
            <div className="form-group">
              <select name="baker" id="baker">
                {bakers.map((baker) => {
                  return(
                    <option value={baker.id} key={baker.id}>{baker.name}</option>
                  )
                })}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="hasGluten" className='color-highlight'>Has Gluten?</label>
              <input type="checkbox" name="hasGluten" id="hasGluten" defaultChecked={bread.hasGluten} />
            </div>
            <div className="form-group">
              <input type="submit" id='form-submit-btn'/>
            </div>
          </form>
        </div>    
    </div>
  )
};

module.exports = Edit_content;