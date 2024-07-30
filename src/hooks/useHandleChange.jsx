import { useState } from "react";

export const useHandleChange = (initial) => {
    const [state, setState] = useState(initial)

    const handleChange = (event) => {
        setFields((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
        isFormValidationOnBlur(event)
    };

    return {
        state,
        handleChange
    }
}