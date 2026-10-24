function Southwest ({records}){

    const southwestList = [
        "Arizona","New Mexico","Oklahoma","Texas"
    ]
  

    const southwestRecords = records.filter(state => southwestList.includes(state["State Name"]));
const southwestSections = southwestRecords.map(state => ( 
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
console.log(southwestRecords)


    return(
        <article className='SW'>
            <h1>Southwest States</h1>
            <div className='Southwest-grid'>
            {southwestSections}    
            </div>
        </article>
    
    )
}

export default Southwest