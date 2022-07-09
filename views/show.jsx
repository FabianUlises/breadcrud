const React = require('react')
const Default = require('./default')

function Show ({bread}) {
    return (
      <Default>
        {/* Bread show section */}
        <section className="breads-container wrapper">
          {/* Bread container */}
          <article className="bread-container">
            {/* Bread title */}
            <div className="bread-title">
              <h2>{bread.name}</h2>
              <p>and it{bread.hasGluten ? <span> does </span> : <span> does Not </span> } have gluten.</p>
            </div>
            {/* Bread img */}
            <div className="bread-img">
              <img src={bread.image} alt={bread.name} />
            </div>
            {/* Bread details */}
            <div className="bread-details">
              <p>{bread.getBakedBy()}</p>
              {/* Bread buttons */}
              <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
              <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
              </form>
            </div>
          </article>
          {/* End of Bread container */}
        </section>
        {/* End of Bread show section */}
      </Default>
    )
}

module.exports = Show