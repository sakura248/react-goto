import React, {useContext} from 'react'
import {parentContent} from './ChallengeE'

const GrandChildC = () => {
    console.log(parentContent)
    const parentText = useContext(parentContent)
    // const test = 'テストだよ'
    return (
        <div style={{backgroundColor: '#fcbf49', color:'#000', height: '40%', width: '90%', margin: '0 auto'}}>
            <h3>This is Grandchild Component C</h3>
            <p>{parentText}</p>
            {/* <p>{test}</p> */}
        </div>
    )
}
export default GrandChildC
