import React from 'react';

const Button = ({ buttonValue, buttonType, handler }) => {
    return (
        <button type="button" className={`column ${buttonType}`} onClick={() => handler(buttonValue)}>
            {buttonValue}
        </button>
    );
};

export default Button;