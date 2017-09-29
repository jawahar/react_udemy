var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var Actions = require('../actions');
var ImagePreview = require('./image-preview');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')  // listen to ImageStore for 'change' triggers
  ],
  getInitialState: function() {
    return {
      images: []
    };
  },
  componentWillMount: function(){
    Actions.getImages(this.props.params.id);
  },
  componentWillReceiveProps: function(newProps) {
    Actions.getImages(newProps.params.id);
  },
  render: function() {
    return <div className="topic">
      {this.renderImages()}
    </div>
  },
  renderImages: function() {
    return this.state.images.slice(0, 20).map(function(image) {
      return <ImagePreview key={image.id} {...image} />
    });
  },
  onChange: function(event, newImages) {    // triggered by ImageStore once it has received new data
    this.setState({images: newImages})
  }
})
