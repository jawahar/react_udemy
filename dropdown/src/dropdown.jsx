var React = require('react');
var Button = require('./button.jsx');

module.exports = React.createClass({
  render: function() {
    return <div className="dropdown">
        <Button className="btn-default" title={this.props.title} subTitleClassName="caret" />
      </div>
  }
});
