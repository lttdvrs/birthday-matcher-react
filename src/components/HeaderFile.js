// import AddButton from "./AddButton";
import {Link} from "react-router-dom";

const HeaderFile = () => {
    return <div className="header">
        <Link to="/"><img className="srcIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" height="40vh"/></Link>
        <Link to="/" style={{textDecoration:"none"}}><h1 className="headertxt">Who is your famous birthday match?</h1></Link>
        <Link to="/ranked">Ranks</Link>
    </div>
}

export default HeaderFile;