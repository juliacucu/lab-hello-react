function FeatureItem (props) {
    return (
      <div class='item-card'>
          <img src={props.imgUrl}></img>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
      </div>
    );
  }

export default FeatureItem;