import { useEffect } from "react";
import BirthdayData from "./BirthdayData";
import Category from "./Category";
import ReturnPersonInfo from "./ReturnPersonInfo";

const PersonInfo = ({info, setInfo}) => {

    const PersonData = () => {

        useEffect(() => {
            window.scrollTo(0, 0)
          },[info]);

        return BirthdayData.map((data, i) => {
            const display = <ReturnPersonInfo data={data} key={i} cat={<Category category={data.ctg} id={data.id} setInfo={setInfo}/>}/>
            if (localStorage.getItem('INFO') == data.id){
                return display;
            }
        })
    }

    return (<>
        {PersonData()}
    </>)
}

export default PersonInfo