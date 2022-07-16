const React = require('react');
const Default = require('./default');
const Content = require('./components/Add_bread');

function New ({ bakers }) {
    return ( 
      <Default>
        <Content bakers={bakers} />
      </Default>
    )
}

module.exports = New;