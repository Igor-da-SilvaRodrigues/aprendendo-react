import React from 'react'

const ManageData = () => {
    const [number, setNumber] = React.useState(0)
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={()=>{setNumber(number+1)}}>Sum 1</button>
            
        </div>
    )
}

export default ManageData