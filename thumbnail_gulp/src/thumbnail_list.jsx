var ThumbnailList = React.createClass({
  render: function() {
    var list = this.props.thumbnailData.map (function(x) {
      return <Thumbnail imageURL={x.imageURL} header={x.header} description={x.description}
        title={x.title} number={x.number} />;
    });

    return (
      <div> {list} </div>
    );
  }
});
