const FormInput = ({setDate}) => {
    return (<>
        <form>
            <h2>Search for your birthday, birthmonth, birthyear or favorite celebrity</h2>
            <input type="text" className="search" 
                onChange={(event) => {
                    setDate(event.target.value);
                }}/>
        </form>
    </>)
}

export default FormInput;