const React = require('react')
const Default = require('./default')

function Show ({bread}) {
    return (
      <Default>
        <section className="breads-container wrapper">
          <article className="bread-container">
            <div className="bread-title">
              <h2>{bread.name}</h2>
              <p>and it{bread.hasGluten ? <span> does </span> : <span> does Not </span> } have gluten.</p>
            </div>
            <div className="bread-img">
              <img src={bread.image} alt={bread.name} />
            </div>
            <div className="bread-details">
              <p>{bread.getBakedBy()}</p>
              <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
              <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
              </form>
            </div>
          </article>
        </section>
      </Default>
    )
}

module.exports = Show