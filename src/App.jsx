import { useState } from 'react'
import useFetchData from './useFetchData'

import "@picocss/pico/css/pico.css"

import './App.css'
import Northeast from './NortheastStatesCard'
import Southeast from './SoutheastStatesCard'
import West from './WestStatesCard'
import Midwest from './MidwestStates'
import Southwest from './SouthwestStatesCard'
import LikeButton from '../LikeButton'


function App() {
const baseUrl = "https://student-data-api.shy-wood-95d7.workers.dev/api/v1/datasets/"
const dataSet = "us-states/records?limit="
const recordLimit = 50


const url = baseUrl + dataSet + recordLimit 

const { records, loading, error } = useFetchData(url)
 console.log(records)

  if(loading){
    return <h1>Loading...</h1>
  }
 


  return (
  <article>
    <div className='container-flex'>
    <h1>US States</h1>
    <p>{error}</p>
    </div>
    &nbsp;
    <div>
      <Northeast records={records} /> 
      <Southeast records={records} /> 
      <Southwest records={records} />
      <Midwest records={records} />
      <West records={records} />
    </div>
    <LikeButton />
  </article>
  )  
      
}

export default App
