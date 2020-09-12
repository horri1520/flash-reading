import React from "react"
import styled from "styled-components"
import Header from "../../organisms/header"
import Contents from "../../organisms/contents"
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

const Root = styled.div`
    display: inline-block;
    width: 100vw;
    height: 100vh;
`

const HeaderWrapper = styled.div`
    display: inline-block;
    width: 100%;
    height: 10%;
`

const ContentsWrapper = styled.div`
    display: inline-block;
    width: 100%;
    height: 90%;
`

const SmartphoneAnnotation = styled.h1`
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 100vh;
`

const MobileHeaderWrapper = styled.div`
    display: inline-block;
    width: 100%;
    height: 20%;
`

const MobileContentsWrapper = styled.div`
    display: inline-block;
    width: 100%;
    height: 80%;
`

const IndexTemplate = () => {

    const breakPoints = useBreakpoint()

    return (
        <Root>
            {breakPoints.smartphone
                ?
                    <SmartphoneAnnotation>
                        このサービスは横画面でご利用ください。
                    </SmartphoneAnnotation>
                :
                    null
            }
            {breakPoints.mobileWide && !breakPoints.pc
                ?
                    <Root>
                        <MobileHeaderWrapper>
                            <Header />
                        </MobileHeaderWrapper>
                        <MobileContentsWrapper>
                            <Contents />
                        </MobileContentsWrapper>
                    </Root>
                :
                    null
            }
            {breakPoints.pc
                ?
                    <Root>
                        <HeaderWrapper>
                            <Header />
                        </HeaderWrapper>
                        <ContentsWrapper>
                            <Contents />
                        </ContentsWrapper>
                    </Root>
                :
                    null
            }
        </Root>
    )
}

export default IndexTemplate

