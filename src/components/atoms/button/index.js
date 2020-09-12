import React from "react"
import styled from "styled-components"

const Root = styled.button`
    cursor: pointer;
    font-size: 24px;
    border: none;
    background: none;
`

const Button = ({ children, onClick }) => {

    return (
        <Root onClick={() => onClick()}>
            {children}
        </Root>
    )
}

export default Button