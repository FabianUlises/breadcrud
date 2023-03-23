const React = require('react');
const Default = require('./default');

const Index = () => {
    return(
        <Default>
            <div className="err-container">
                <div className="err-msg">
                    <h3>Oops something went wrong, feel free to redirect back to the home page</h3>
                    <a href="/breads">Go Back</a>
                </div>
            </div>
        </Default>
    )
}
module.exports = Index;