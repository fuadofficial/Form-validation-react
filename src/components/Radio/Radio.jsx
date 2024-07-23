import React from 'react'

export const Radio = (
    {
        handleCheckBox,
        isFormValidationOnBlur,
        errorFields,
        type,
        name,
        value
    }) => {
    return (
        <div className="input-section radio-groups">
            <label className="radio-title" htmlFor={name}>Skills <span className="danger">*</span></label>
            <div>
                <input
                    id={value.javaScript}
                    type={type}
                    value={value.javaScript}
                    name={name}
                    onChange={handleCheckBox}
                    onBlur={isFormValidationOnBlur}
                />
                <label htmlFor={value.javaScript}> JavaScript </label>
                <input
                    type={type}
                    id={value.react}
                    value={value.react}
                    name={name}
                    onChange={handleCheckBox}
                    onBlur={isFormValidationOnBlur}
                />
                <label htmlFor={value.react}> React </label>
                <input
                    type={type}
                    id={value.angular}
                    value={value.angular}
                    name={name}
                    onChange={handleCheckBox}
                    onBlur={isFormValidationOnBlur}
                />
                <label htmlFor={value.angular}> Angular </label>
                {errorFields.skills && <p className="danger">checkbox is required</p>}
            </div>
        </div>
    )
}

