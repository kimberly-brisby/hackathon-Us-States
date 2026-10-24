function Southeast ({records}){

const southeastList = [
    "Alabama","Arkansas","Florida","Georgia","Kentucky","Louisiana",
    "Mississippi","North Carolina","South Carolina","Tennessee","Virginia","West Virginia"
]

const southeastRecords = records.filter(state => southeastList.includes(state["State Name"]));
const southeastSections = southeastRecords.map(state => ( 
    <div className="state-card">
        <h2>{state["State Name"]}</h2>
        &nbsp;
        <p>Capital: {state.Capital}</p>
        &nbsp;
        <p>Code Name: {state["Code Name"]}</p>
        &nbsp;
        <p>Nickname: {state.Nickname}</p>
        &nbsp;
        <img src={state.Map} alt={`Map of ${state["State Name"]}`} />
    </div>
))
console.log(southeastRecords)


    return(
        <article className='SE'>
            <h1>SouthEast States</h1>
            <div className='Southeast-grid'>
            {southeastSections}    
            </div>
        </article>
    
    )
}

export default Southeast