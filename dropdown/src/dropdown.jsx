var React = require('react');
var Button = require('./button.jsx');
var ListItem = require('./listitem.jsx');

module.exports = React.createClass({

  handleClick: function() {
    alert("click in dropdown");
  },


  render: function() {

    var list = this.props.items.map(function(item) {
      // alert("map "+item);
      return <ListItem item={item} />
    });

    return <div className="dropdown">
          <Button
            whenClicked={this.handleClick}
            className="btn-default"
            title={this.props.title}
            subTitleClassName="caret"
            />
          <ul>
          {list}
          </ul>
          </div>
        }

});
