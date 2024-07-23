import React from 'react'

export const TextInput = (
    {
        handleChange,
        isFormValidationOnBlur,
        errorFields,
        label,
        id,
        name,
        type
    }) => {
    return (
        <div className="input-section">
            <label htmlFor={name}>{label} <span className="danger">*</span></label>
            <input
                id={id}
                type={type}
                name={name}
                onChange={handleChange}
                onBlur={isFormValidationOnBlur}
            />
            {errorFields[name] && <p className="danger">{label} is required</p>}
        </div>
    )
}

