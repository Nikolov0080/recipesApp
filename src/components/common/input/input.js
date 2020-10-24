import React from 'react'


const InputField = ({ label, placeholder, name, type }) => {
    return (
        <div>
            <label>{label}</label>
            <input name={name} type={type}  />
        </div>
    )
}

export default InputField;