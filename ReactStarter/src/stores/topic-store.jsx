var Api = require('../utils/api.jsx')
var Reflux = require('reflux')
var Actions = require('../actions.jsx')

module.exports = Reflux.createStore({
  // listen to actions defined in 'Actions';
  // 'getTopics' is defined; the function 'getTopics' will be called when that action is invoked
  listenables: [Actions],
  getTopics: function(){
    return Api.get('topics/defaults')
      .then(function(response) {
        this.topics = response.data
        this.triggerChange();
      }.bind(this))
  },
  triggerChange: function() {
    // trigger is provided by Reflux; first arg is a string and is the name of the event
    this.trigger('change', this.topics);
  }
})
