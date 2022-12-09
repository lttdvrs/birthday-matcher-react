import { Link } from "react-router-dom";

const DisplayData = (props) => {

    return (<div className="profile">
        {props.rank <= 10 &&  <h1 className="rank">#{props.rank}</h1>}
        <h1 className="boostName">{props.data.name} {props.boost}</h1> 
        <p className="GreyText">{props.data.info}</p>
        <div className="smallBox">
            <img src={props.data.img} className="imageprofile"/>
            <div className="smallInfoBox">
                <div>
                    <p className="PurpleText">Date</p>
                    <p>{props.data.day} {props.data.month}</p>
                </div>
                <div>
                    <p className="PurpleText">Year</p>
                    <p>Born in {props.data.year}</p>
                </div>
                <div>
                    <p className="PurpleText">Age</p>
                    <p>{props.data.age} years old</p>
                </div>
                <Link to="/info" className="moreData" onClick={(e) => {props.setInfo(props.data.id)}}>Read more</Link>
            </div>
        </div>
  
        
    </div>)
  }


export default DisplayData;