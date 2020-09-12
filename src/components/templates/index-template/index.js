import React from "react"
import styled from "styled-components"
import Header from "../../organisms/header"
import Contents from "../../organisms/contents"

const Root = styled.div`
    display: inline-block;
    width: 100vw;
    height: 100vh;
`

const HeaderWrapper = styled.div`
    display: inline-block;
    width: 100%;
    height: 100px;
`

const ContentsWrapper = styled.div`
    display: inline-block;
    width: 100%;
    height: calc( 100% - 100px );
`

const IndexTemplate = () => {

    return (
        <Root>
            <HeaderWrapper>
                <Header />
            </HeaderWrapper>
            <ContentsWrapper>
                <Contents />
            </ContentsWrapper>
        </Root>
    )
}

export default IndexTemplate

