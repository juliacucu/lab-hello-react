function Badge (props) {
    return (
      <div>
        <span className="Badge">{props.badgeText}</span>
        <h1>Say hello to <br></br>ReactJS</h1>
        <p>You will learn how to use <br></br>the most popular frontend library, <br></br> and become a super Ninja developer.</p>
        <button>Awesome!</button> 
      </div>
    );
  }

export default Badge;
