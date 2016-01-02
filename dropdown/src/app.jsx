var React = require('react');
var Dropdown = require('./dropdown.jsx');

var options = {
  title: "Choose an item",
  items:  [
    'Apple Pie',
    'Peach cobbler',
    'Cheese Cake'
  ]
};

// render the class
var element = React.createElement(Dropdown, options);

// place the rendered class in the body element
React.render(element, document.querySelector('.container'));
