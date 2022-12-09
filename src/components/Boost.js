import { useEffect, useState } from "react";

const Boost = (props) => {

    let [boost, setBoost] = useState(0);
 
    if(props.name in localStorage && localStorage.getItem(props.name) >= boost){
        boost = Number(localStorage.getItem(props.name));
    }

    const increment = () => {
        localStorage.setItem(props.name , boost);
        setBoost(boost+1);
    }

    return (<>
      <button className="boostPerson" onClick={increment}>Boost <b>{boost}</b></button>
    </>)
}

export default Boost;