import { Link } from "react-router-dom";

const ShowRanked = (props) => {
    
    return (
    <div className="ranked_profile">
        <img className="ranked_image" src={props.data.img}/>
        <h1 className="rankAndName">{props.data.name} </h1> 
        <p className="rankInfo">{props.data.age} Years old</p>
        <div className="rankAndbtn"><h1 className="rankAndName"> #{props.rank}</h1> {props.boost} </div>
        <Link to="/info" className="moreRank" onClick={() => {props.setInfo(props.data.id)}}> Read more</Link>
    </div>)
  }


export default ShowRanked;