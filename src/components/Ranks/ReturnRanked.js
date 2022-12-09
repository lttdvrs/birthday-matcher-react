import BirthdayData from "../BirthdayData";
import Boost from "../Boost";
import ShowRanked from "./ShowRanked";
import { useState } from "react";

const ReturnRanked = (props) => {

    let returnOrder = BirthdayData;
        
    returnOrder = returnOrder.sort(function (a,b)
    {   const boostA = localStorage.getItem(a.name);
        const boostB = localStorage.getItem(b.name);
        return boostB-boostA
    });

    const [amount, setAmout] = useState(20);

    const AmountButtons =()=> {
        return (
        <div className="filterButtons">
        <h2>How many ranks do you want to see?</h2>
            <button className="filterbtn" onClick={()=>setAmout(20)}>20</button>
            <button className="filterbtn" onClick={()=>setAmout(25)}>25</button>
            <button className="filterbtn" onClick={()=>setAmout(40)}>40</button>
            <button className="filterbtn" onClick={()=>setAmout(55)}>50</button>
            <button className="filterbtn" onClick={()=>setAmout(75)}>75</button>
            <button className="filterbtn" onClick={()=>setAmout(100)}>100</button>
            <button className="filterbtn" onClick={()=>setAmout(BirthdayData.length)}>All</button>
        </div>)
    }

    returnOrder= returnOrder.slice(0, amount); 
    
    const AllData = () => {
        return returnOrder.map((data, i) => {
            const ranked = <ShowRanked data={data} key={i} rank={i+1} boost={<Boost name={data.name}/> } setInfo={props.setInfo}/>
            return ranked
        })
    }
    return (<>
         <h1 className="rankedtitle">Celebrities ranked from your boosts!</h1>
         {AmountButtons()}
        {AllData()}
    </>)

}

export default ReturnRanked