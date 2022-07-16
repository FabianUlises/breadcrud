const React = require('react');
const Default = require('./default');
const Content = require('./components/Baker_show');

function Show ({baker}) {
    return (
      <Default>
        <Content baker={ baker } />
      </Default>
    )
};

module.exports = Show;