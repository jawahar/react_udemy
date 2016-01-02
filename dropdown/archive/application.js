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
React.render(element, document.querySelector('.target'));

var Badge = React.createClass({displayName: "Badge",
  render: function () {
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
    this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
    )
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function() {
    return React.createElement("div", {className: "thumbnail"}, 
      React.createElement("img", {src: this.props.imageURL}), 
      React.createElement("div", {className: "caption"}, 
        React.createElement("h3", null, this.props.header), 
        React.createElement("p", null, this.props.description), 
        React.createElement("p", null, 
          React.createElement(Badge, {title: this.props.title, number: this.props.number})
        )
      )
    )
  }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function() {
    var list = this.props.thumbnailData.map (function(x) {
      return React.createElement(Thumbnail, {imageURL: x.imageURL, header: x.header, description: x.description, 
        title: x.title, number: x.number});
    });

    return (
      React.createElement("div", null, " ", list, " ")
    );
  }
});
