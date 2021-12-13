import React, {createContext, useContext} from 'react'
import ChildB from './ChildB'

export const parentContent = createContext('I am from parent')

const ChallengeE = () => {

    return (
        <div style={{backgroundColor: 'beige'}}>
            <parentContent.Provider value={parentContent}>
                <ChildB />
            </parentContent.Provider>
            
        </div>
    )
}

export default ChallengeE



