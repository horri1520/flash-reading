import React from "react"
import styled from "styled-components"

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    /* background: #bebebe; */
`

const OperationPanel = ({ onClickStart }) => {

    return (
        <Root>
            <button onClick={() => onClickStart()}>読む</button>
        </Root>
    )
}

export default OperationPanel
