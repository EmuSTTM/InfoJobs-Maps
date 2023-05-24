import React from 'react'
import Selecter from './components/Selecter'

import  getInfoJobsOffer from './services/getOffers'

function App () {

    const items = getInfoJobsOffer()

    console.log(items)
    return(
        <>
        <h1>Comenzando con la app</h1>
        <Selecter />
        
        </>
        
        
    )
}

export default App;
