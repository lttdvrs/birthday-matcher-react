// import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import HeaderFile from "./components/HeaderFile";
import {Routes, Route} from "react-router-dom";
import Homepage from "./components/Homepage";
import ReturnRanked from "./components/Ranks/ReturnRanked";
import PersonInfo from "./components/PersonInfo";

const App = () => {
    
    
    const [showForm, setShowForm] = useState(false);
    const [date, setDate] = useState([]);
    let [info, setInfo] = useState(0);
    
    if (info > 0){
        localStorage.setItem('INFO', info)
    }

    return (
    <>
        <HeaderFile onAdd={() => setShowForm(!showForm)} showNew={showForm} />
        <Routes>
            <Route path="/" element={<Homepage date={date} setDate={setDate} setInfo={setInfo}/>}/>
            <Route path="/ranked" element={<ReturnRanked setInfo={setInfo}/>}/>
            <Route path="/info" element={<PersonInfo info={info} setInfo={setInfo}/>}/>
        </Routes>
    </>)
}

export default App