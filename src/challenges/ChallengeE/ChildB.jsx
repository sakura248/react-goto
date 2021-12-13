import React, {
    // createContext, useContext
} from 'react'
import GrandChildC from './GrandChildC'
import GrandChildD from './GrandChildD'

const ChildB = () => {
    
    return (
        <div style={{backgroundColor: '#f77f00', color: '#fff', height: '90%', width: '90%', margin: '0 auto'}}>
            <h2>This is Child component B</h2>
                <GrandChildC />
                <GrandChildD />
        </div>
    )
}

export default ChildB