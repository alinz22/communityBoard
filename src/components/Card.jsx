export default function Card(props) {
    return (
      <div className="card">
        <img src = {props.image} alt = "food-destination" />
        <h2>{props.name}</h2>
        <h3>{props.description}</h3>
        <a href = {props.link} className = "button">View Link</a>
        
      </div>
    )
  }
  