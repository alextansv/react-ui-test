import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Button = styled.div`
    cursor: pointer;
    background-color: #E0E0E0;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    padding: 0.375rem 0.75rem;
    color: rgba(0, 0, 0, 0.87);
    font-size: 1rem;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    -webkit-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    :hover {
        background-color: #D5D5D5;
    }
`

const PrimaryButton = styled(Button)`
    background-color: rgb(25, 118, 210);
    border-color: rgb(25, 118, 210);
    color: #FFF;
    :hover {
        color: #FFF;
        background-color: rgb(17, 82, 147);
        border-color: rgb(17, 82, 147);
    }
    :active {
        background-color: #6eb9f7;
        background-size: 100%;
        transition: background 0s;
    }
`

type ButtonProps = {
    color: 'primary'|'secondary';
}

const button: FunctionComponent<ButtonProps> = function({ children, color, ...rest }) {
    console.log(color)
    if (color === 'primary') return <PrimaryButton {...rest}>{children}</PrimaryButton>;
    
    return (
        <Button {...rest}>
            {children}
        </Button>
    );
}

export { button as Button }
export default button;