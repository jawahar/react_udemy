var Reflux = require('reflux');
var Actions = require('../actions');
var Api = require('../utils/api');
var _ = require('lodash');

module.exports = Reflux.createStore({
  listenables: [Actions],         // this store must listen to all action defined in actions.jsx
                                  // invoke the method 'getImages()' if the action 'getImages' is invoked
  getImages: function(topicId) {
      Api.get('topics/' + topicId) // returns a promise which can invoke a function with the response
      .then(function(response) {
        this.images = _.reject(response.data, function(image) {
          // reject will reject the image if this function returns true
          return image.is_album;
        });
        this.triggerChange();
      }.bind(this));
  },
  getImage: function(imageId) {
    Api.get('gallery/image/' + imageId)
      .then(function(imageJSON){
        console.log(imageJSON);
        if (this.images) {
          this.images.push(imageJSON.data);
          console.log("GetImage: adding image to existing this.images");
          console.log(imageJSON.data);
        } else {
          this.images = [imageJSON.data];
          console.log("GetImage: creating new this.images");
        }
        this.triggerChange();   // let all listeners know that the data is available
      }.bind(this))
  },
  find: function(imageId) {
    console.log('in find');
    var image = _.find(this.images, {id: imageId}); // find the image with id = imageId in this.images
    if (image)
      console.log('found image: ' + image.id + image.title);
    if (image) {
      return image
    } else {
      this.getImage(imageId);
      return null;
    };
  },
  triggerChange: function() {
    // trigger a DOM change using Reflux's trigger method
    this.trigger('change', this.images)
  }
});
