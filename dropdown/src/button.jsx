var react = require('react');

module.exports = React.createClass({
  render: function () {
    return <button onClick={this.props.whenClicked} ClclassName={"btn " + this.props.className} type="button">
        {this.props.title}
        <span className={this.props.subTitleClassName}>
          {this.props.subTitle}
        </span>
      </button>
  }
});
