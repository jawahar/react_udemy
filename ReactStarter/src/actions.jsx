var Reflux = require('reflux');

module.exports = Reflux.createActions([
  'getTopics',   // defined in stores/topic-store.jsx; invoked in topic-list.jsx
  'getImages',   // defined in stores/image-store.jsx; invoked in topic.jsx
  'getImage'    // defined in stores/image-store.jsx; invoked in image-detail.jsx
]);
