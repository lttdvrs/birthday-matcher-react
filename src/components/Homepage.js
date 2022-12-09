import FormInput from "./FormInput";
import ReturnData from "./Ranks/ReturnData";

const Homepage = (props) => {
    return (<>
        <FormInput setDate={props.setDate}/>
        <ReturnData date={props.date} setInfo={props.setInfo}/>
    <a href="index.html" className="link">Go to search bar</a>
    </>
    )
}

export default Homepage;