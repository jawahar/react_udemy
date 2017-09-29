var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store.jsx');
var Actions = require('../actions.jsx');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  mixins: [
    // this component should listen to any event that is triggered by TopicStore
    // when any event happens call function 'onChange' which is defined below
    // the second argument to 'onChange' will be the new data; i.e. the list of topics
    // the first arg will be the name of the triggering event 'change'
    Reflux.listenTo(TopicStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      topics: []
    }
  },
  // invoked just before componentIsRendered; use this to load the topic list via the api.jsx
  componentWillMount: function() {
    // using a Action; instead of calling directly in the Store
    Actions.getTopics();
  },
  render: function() {
    return <div className="list-group">
      Topic List
      {this.renderTopics()}
    </div>
  },
  renderTopics: function() {
    return this.state.topics.slice(0, 4).map(function(topic) {
      return <Link to={'topics/' + topic.id} className="list-group-item" key={topic.id}>
            <h4>{topic.name}</h4>
            <p>{topic.description}</p>
          </Link>
    })
  },
  onChange: function(event, newTriggeredData){
    this.setState({
      topics: newTriggeredData
    })
  }
})
