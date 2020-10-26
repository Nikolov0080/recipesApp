import React from 'react'


const InputFile = ({ label, func, name, type }) => {
    return (
        <div>
            <label>{label}</label>
            <input onChange={func} name={name} type={type} />
        </div>
    )
}

export default InputFile;