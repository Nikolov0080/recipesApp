import React from 'react'

const StepTextBox = ({func,index,val}) => {
    return (
        <div>
            <textarea defaultValue={val}/>
        </div>
    )
}

export default StepTextBox
