import { Link } from "react-router-dom"

const ShowCategory = (props) => {
    return (
        <div className="ranked_profile">
            <img className="ranked_image" src={props.data.img}/>
            <h1 className="rankAndName">{props.data.name} </h1> 
            <p className="rankInfo">{props.data.age} Years old</p>   
            <Link to="/info" className="moreCat" onClick={() => {props.setInfo(props.data.id)}}>Read more</Link>
        </div>)
}

export default ShowCategory