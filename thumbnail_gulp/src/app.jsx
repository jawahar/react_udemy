var React = require('react');
var ThumbnailList = require('./thumbnail_list.jsx');

var options = {
  thumbnailData: [{
    title: "See Tutorials",
    number: "32",
    header: "learn react",
    description: "react is a fantastic new library for making fast, dynamic pages. react is a fantastic new library for making fast, dynamic pages.",
    imageURL: "https://facebook.github.io/react/img/logo_og.png"
  }, {
    title: "See lessons",
    number: "23",
    header: "learn gulp",
    description: "react is a fantastic new library for making fast, dynamic pages. react is a fantastic new library for making fast, dynamic pages.",
    imageURL: "https://cms-assets.tutsplus.com/uploads/users/30/posts/19460/preview_image/gulpjs-retina-preview.png"
  }]
}

// render the class
var element = React.createElement(ThumbnailList, options);

// place the rendered class in the body element
React.render(element, document.querySelector('.container'));
