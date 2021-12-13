import React, {createContext} from 'react'
import ChildB from './ChildB'
import GrandChildD from './GrandChildD'

export const parentContent = createContext('I am createContext')

const ChallengeE = () => {

    return (
        <div style={{backgroundColor: '#d62828', color:'#fff', height: '100vh'}}>
            <h1>I am parent component</h1>
            <parentContent.Provider value="I am from value">
                <ChildB />
            </parentContent.Provider>
            <GrandChildD />
            
        </div>
    )
}

export default ChallengeE



