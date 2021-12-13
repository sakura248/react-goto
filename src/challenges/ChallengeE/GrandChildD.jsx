import React, {useContext} from 'react'
import {parentContent} from './ChallengeE'

const GrandChildD = () => {
    const parentText = useContext(parentContent)
    return (
        <div style={{backgroundColor: '#fcbf49', color:'#000', height: '40%', width: '90%', margin: '0 auto'}}>
            <h3>This is Grandchild Component D</h3>
            {parentText}
        </div>
    )
}
export default GrandChildD