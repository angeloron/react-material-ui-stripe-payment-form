// Wrapper around the actual Stripe <*Element>, so that it can be used as `inputComponent`
// for Material UI's <Input>. Also adds some styling.

import React from 'react'

const StripeInput = ({ component: Component, inputRef, ...other }) => {
    const elementRef = React.useRef();
    React.useImperativeHandle(inputRef, () => ({
        focus: () => elementRef.current.focus
    }));

    return (
        <Component onReady={element => (elementRef.current = element)} {...other} />
    );
}

export default StripeInput