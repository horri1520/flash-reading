import React from "react"
import styled from "styled-components"
import Button from "../../atoms/button"

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    /* background: #bebebe; */
`

const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 40%;
    height: 100%;
`

const OperationPanel = ({
    onClickStart,
    onClickStop,
    reading,
    onClickPause,
    pausing,
    onClickBack,
    onClickNext,
}) => {

    if (reading && !pausing) {
        return (
            <Root>
                <ButtonsWrapper>
                    <Button onClick={() => onClickStop()}>
                        停止
                    </Button>
                    <Button onClick={() => onClickPause()}>
                        一時停止
                    </Button>
                </ButtonsWrapper>
            </Root>
        )
    } else if (reading && pausing) {
        return (
            <Root>
                <ButtonsWrapper>
                    <Button onClick={() => onClickStop()}>
                        停止
                    </Button>
                    <Button onClick={() => onClickPause()}>
                        再開
                    </Button>
                    <Button onClick={() => onClickBack()}>
                        一つ戻る
                    </Button>
                    <Button onClick={() => onClickNext()}>
                        一つ進む
                    </Button>
                </ButtonsWrapper>
            </Root>
        )
    } else {
        return (
            <Root>
                <ButtonsWrapper>
                    <Button onClick={() => onClickStart()}>
                        読む
                    </Button>
                </ButtonsWrapper>
            </Root>
        )
    }
}

export default OperationPanel
