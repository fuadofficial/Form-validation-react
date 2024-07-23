import React from 'react'

export const Genter = (
    {
        handleChange,
        isFormValidationOnBlur,
        name,
        type,
        male,
        female,
        errorFields
    }) => {
    return (
        <div className="input-section radio-groups">
            <label className="radio-title" htmlFor="genter">Genter : <span className="danger">*</span></label>
            <div>
                <input
                    id={male}
                    type={type}
                    value={male}
                    name={name}
                    onChange={handleChange}
                    onBlur={isFormValidationOnBlur}
                />
                <label htmlFor={male}> Male </label>
                <input
                    type={type}
                    id={female}
                    value={female}
                    name={name}
                    onChange={handleChange}
                    onBlur={isFormValidationOnBlur}
                />
                <label htmlFor={female}> Female </label>
                {errorFields.genter && <p className="danger">checkbox is required</p>}
            </div>
        </div>
    )
}

