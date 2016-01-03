var React = require('react');
var Button = require('./button.jsx');

module.exports = React.createClass({

  handleClick: function() {
    alert("click in dropdown");
  },

  render: function() {
    return <div className="dropdown">
        <Button whenClicked={this.handleClick} className="btn-default" title={this.props.title} subTitleClassName="caret" />
      </div>
  }

});
