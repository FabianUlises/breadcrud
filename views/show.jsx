const React = require('react');
const Default = require('./default');
const Content = require('./components/Show_content');

function Show ({bread, title}) {
    return (
      <Default title={title}>
        <Content bread={bread} />
      </Default>
    )
};

module.exports = Show;