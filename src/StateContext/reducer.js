const initialState = {
    formValues: {
        date: "",
        service: "",
        facebook: "",
        twitter: "",
        firstname: "",
        lastname: "",
        email: "",
        line1: "",
        line2: "",
        postal_code: "",
        city: "",
        country: null,
        currency: null,
        amount: "",
    },
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'editFormValue':
            state.formValues[action.key.toLowerCase()] = action.value;
            return { ...state };

        case 'emptyFormValue':
            return {
                ...state,
                formValues: initialState.formValues
            };
        default:
    };
    return state;
};

export { initialState, reducer }