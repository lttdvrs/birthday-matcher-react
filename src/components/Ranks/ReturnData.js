import BirthdayData from "../BirthdayData";
import Boost from "../Boost";
import DisplayData from "./DisplayData";
import React from "react";

const ReturnData = ({date, setInfo , infoo}) => {

   let returnOrder = BirthdayData;

    if (date == ''){
        returnOrder = returnOrder.sort(function (a,b)
        {   const boostA = localStorage.getItem(a.name);
            const boostB = localStorage.getItem(b.name);
            return boostB-boostA
        });

        returnOrder= returnOrder.slice(0, 10);      
    }

    
    const AllData = () => {
        return returnOrder.map((data, i) => {
            const display = <DisplayData data={data} key={i} boost={<Boost name={data.name}/>} rank={i + 1} setInfo={setInfo} infoo={infoo}/>
            const ex = data.day + ' ' + data.month.toLowerCase();
            const exdif = data.month.toLowerCase() + ' ' + data.day;

            if (date != ''){
                // Regex ipv dit.
                if (ex.substr(0, date.length) === date.toLowerCase() || exdif.substr(0, date.length) === date.toLowerCase()){
                    return display;
                } else if (data.month.substr(0 , date.length).toLowerCase() == date.toLowerCase()){
                    return display;
                } else if (data.year == date){
                    return display;
                }else if (data.name.toLowerCase().includes(date.toLowerCase())){
                    return display;       
                }
            }
            else if (localStorage.getItem(data.name)){
                return display;  

            } else if (1 < 10){
                return display;
            }
        });
     
    }
   
    return (<>
        {AllData()}
    </>)
    
}

export default ReturnData;