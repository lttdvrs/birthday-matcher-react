import BirthdayData from "./BirthdayData"
import ShowCategory from "./ShowCategory"

const Category = ({category , id, setInfo}) => {

    const randomGenerator = (arr , num = 4) => {
        const res = [];
        for (let i = 0; i < num; i++){
            const random = Math.floor(Math.random() * arr.length);
            if(res.indexOf(arr[random]) !== -1){
                continue;
            };
            res.push(arr[random]);
        }
        return res;
    }

    const filter = () =>{
        return BirthdayData.filter((person) => {
            return person.ctg == category;
        })
    }

    const returnCat = () => {
        let filteredArr = filter();
        filteredArr = randomGenerator(filteredArr, 4);
    
        return filteredArr.map((data, i) => {
            const display = <ShowCategory data={data} key={i} setInfo={setInfo}/>
            if (category == data.ctg && id != data.id){
                return display
            }
        })
    }
    return (<>
        <h1 className="interested">Other people you might be interested in</h1>
        {returnCat()}
    </>)
}

export default Category