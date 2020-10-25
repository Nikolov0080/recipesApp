import React from 'react'


const InputField = ({ label, func, name, type }) => {
    return (
        <div>
            <label>{label}</label>
            <input onChange={(e)=>func(e.target.value)} name={name} type={type}  />
        </div>
    )
}

export default InputField;