import { useEffect, useReducer } from "react";

const initialInputState = {
    value: "",
    isTouched: false,
};

const inputStateReducer = (state, action) => {
    if (action.type === "BLUR") {
        return { isTouched: true, value: state.value };
    }
    if (action.type === "INPUT") {
        return { isTouched: state.isTouched, value: action.value };
    }
    if (action.type === "RESET") {
        return { isTouched: false, value: "" };
    }
};

export const useInput = (validateValue, setEnterEmailError) => {
    const [inputState, dispatch] = useReducer(
        inputStateReducer,
        initialInputState
    );

    const valueIsValid = validateValue(inputState.value);
    useEffect(() => {
        if (valueIsValid) {
            setEnterEmailError(false);
        }
    }, [setEnterEmailError, valueIsValid]);

    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (event) => {
        dispatch({ type: "INPUT", value: event.target.value });
    };

    const inputBlurHandler = (event) => {
        dispatch({ type: "BLUR" });
    };

    const reset = () => {
        dispatch({ type: "RESET" });
    };

    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
        isTouched: inputState.isTouched,
    };
};
