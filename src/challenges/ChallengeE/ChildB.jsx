import React, {createContext, useContext} from 'react'
import GrandChildC from './GrandChildC'
import GrandChildD from './GrandChildD'
// import {parentContent} from './ChallengeE'

const ChildB = () => {
    
    // const parentText = useContext(parentContent)
    return (
        <>
            <p>This is Component B</p>
            {/* {parentText} */}
                <GrandChildC />
                <GrandChildD />
        </>
    )
}

export default ChildB