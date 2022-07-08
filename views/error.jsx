const React = require('react');
const Default = require('./default');
const Index = () => {
    return(
        <Default>
            <div class="err-container">
                <div class="err-msg">
                    <h3>Oops something went wrong, feel free to redirect back to the home page</h3>
                    <a href="/">Go Back</a>
                </div>
            </div>
        </Default>
    )
}
module.exports = Index;