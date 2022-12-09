const ReturnPersonInfo = (props) => {
    
    return (<><div className="bigInfo">
        <div className="infoBox">
            <img src={props.data.img} className="bigInfo_img"/>
            <div className="smallInfo">
                <h1 className="bigInfo_name">{props.data.name}</h1>
                <p>About: {props.data.info}</p>
                <p>{props.data.day} {props.data.month}</p>
                <p>Born in {props.data.year}</p>
                <p>{props.data.age} years old</p>
            </div>
        </div>
        <p className="aboutInfo">About</p>
        <p className="infoAbout">{props.data.about}</p>
    </div>
    {props.cat}
    </>);

}

export default ReturnPersonInfo;
