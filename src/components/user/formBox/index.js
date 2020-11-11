import React from 'react'

const FormBox = (props) => {
    return (
        <div>
            <div className="shadow p-3 mb-5 bg-white rounded mt-5">
                {props.children}
            </div>
        </div>
    )
}

export default FormBox
