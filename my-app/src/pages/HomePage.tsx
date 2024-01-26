import React from 'react'
import '../styles/HomePageStyles/HomePageGlobal.css'
import AddFileComponent from '../Components/AddFileComponent'
import ResultContainer from '../Components/ResultContainer'

const HomePage = () => {
    return (
        <div className='HomePage-container'>
            {/* <AddFileComponent />
            <InfoFromFile/> */}
            <div className="AddFileComponent-container">
                <AddFileComponent/>
                <ResultContainer/>
            </div>
            <div className="InfoFromFile-container">InfoFromFile-container</div>
        </div>
    )
}

export default HomePage
