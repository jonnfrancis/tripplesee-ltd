import React from 'react';
import Services from './components/Services'
import LoadingScreen from './components/LoadingScreen';
import data from './data'

export default function AllServices() {
    return(
        <div>
            <LoadingScreen />
            <Services slides={data} />
        </div>
    )
}