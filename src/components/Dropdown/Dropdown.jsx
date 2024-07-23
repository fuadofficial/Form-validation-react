import React from 'react'

export const Dropdown = (
    {
        errorFields,
        handleChange,
        isFormValidationOnBlur,
        id,
        name
    }) => {
    return (
        <div className="input-section dropdown-section">
            <label htmlFor={id}>{name} <span className="danger">*</span></label>
            <select id={id} name="country" onChange={handleChange} onBlur={isFormValidationOnBlur}                    >
                <option value="">Select {name}</option>
                <option value="INDIA">INDIA</option>
                <option value="UAE">UAE</option>
                <option value="EUROPE">EUROPE</option>
            </select>
            {errorFields.country && <p className="danger">{name} is required</p>}
        </div>)
}

