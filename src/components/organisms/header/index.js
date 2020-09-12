import React from "react"
import styled from "styled-components"

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const AppName = styled.a`
    display: inline-block;
    font-size: 36px;
    font-weight: 400;
    color: black;
    text-decoration: none;
`

const Header = () => {

    return (
        <Root>
            <AppName href='/'>
                フラッシュリーダー
            </AppName>
        </Root>
    )
}

export default Header
