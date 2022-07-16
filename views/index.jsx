const React = require('react');
const Default = require('./default');
const Content = require('./components/Index_content');
const Index = ({breads, bakers}) => {
    return(
        <Default>
            <Content breads={breads} bakers={bakers} />
        </Default>
    )
};
module.exports = Index;