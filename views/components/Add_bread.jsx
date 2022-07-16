import React from 'react'

const Add_bread = ({ bakers }) => {
  return (
    <div className="wrapper form-container">
        <h2>Add a new bread</h2>
        <form action='/breads' method='POST'>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required />
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input type="text" name="image" id="image" />
            </div>
            <div className="form-group">
                <label htmlFor="baker">Baker</label>
                <select name="baker" id="baker">
                {bakers.map(baker => {
                return(
                    <option value={baker.id} key={baker.id}>
                    {baker.name}
                    </option>
                    )
                })}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="hasGluten"><span className='color-highlight'>Has Gluten?</span></label>
                <input type="checkbox" name="hasGluten" id="hasGluten" defaultChecked />
            </div>
            <div className="form-group">
                <input type="submit" />
            </div>
        </form>
    </div>
  )
};

module.exports = Add_bread;