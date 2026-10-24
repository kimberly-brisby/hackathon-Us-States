function Midwest ({records}){

    const midwestList = [
    "Illinois","Indiana","Iowa","Kansas","Michigan","Minnesota",
    "Missouri","Nebraska","North Dakota","Ohio","South Dakota","Wisconsin"
]

const midwestRecords = records.filter(state => midwestList.includes(state["State Name"]));
const midwestSections = midwestRecords.map(state => ( 
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
console.log(midwestRecords)


    return(
        <article className='MW'>
            <h1>Midwest States</h1>
            <div className='Midwest-grid'>
            {midwestSections}    
            </div>
        </article>
    
    )
}

export default Midwest