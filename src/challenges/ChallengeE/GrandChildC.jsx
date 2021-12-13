import React, {useContext} from 'react'
import {parentContent} from './ChallengeE'

const GrandChildC = () => {
    console.log(parentContent)
    const parentText = useContext(parentContent)
    return (
        <div>
            <p>This is Grandchild Component C</p>
            <p>{parentText}</p>
        </div>
    )
}
export default GrandChildC
