import React from "react"
import styled from "styled-components"

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const Sentence = styled.p`
    display: inline-block;
    font-size: 80px;
    font-weight: 300;
`

const ShowSentences = ({ sentence }) => {

    return (
        <Root>
            <Sentence>
                {sentence}
            </Sentence>
        </Root>
    )
}

export default ShowSentences
