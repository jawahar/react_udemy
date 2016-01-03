var React = require('react');

module.exports = React.createClass({
  render: function(){
    // alert("listitem");
    return <li><a> {this.props.item} </a></li>
  }
});
