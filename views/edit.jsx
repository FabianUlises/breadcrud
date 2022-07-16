const React = require('react');
const Default = require('./default');
const Content = require('./components/Edit_content');

function Edit ({bread, bakers}) {
    return (
      <Default>
        <Content bread={bread} bakers={bakers} />
      </Default>
    )
};

module.exports = Edit;