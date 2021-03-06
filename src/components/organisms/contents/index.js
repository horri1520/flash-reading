import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import OperationPanel from "../../molecules/operation-panel"
import ShowSentences from "../../molecules/show-sentences"

const Root = styled.div`
    display: inline-block;
    width: 100%;
    height: 100%;
`

const SentencesWrapper = styled.div`
    display: inline-block;
    width: 100%;
    height: 80%;
`

const OperationPanelWrapper = styled.div`
    display: inline-block;
    width: 100%;
    height: 20%;
`

const Contents = () => {

    const [index, setIndex] = useState(null)
    const additionalInterval = useRef(0)
    const reading = useRef(false)
    const [pausing, setPausingState] = useState(false)

    const dummyData = [
        '私が', '先生と', '知り合いに', 'なったのは', '鎌倉である。', 'その時', '私は', 'まだ', '若々しい', '書生であった。', '暑中', '休暇を利用', 'して', '海水浴に', '行った', '友達から', 'ぜひ', '来いという', '端書を', '受け取ったので、', '私は', '多少の', '金を工面', 'して、', '出掛ける事に', 'した。', '私は', '金の工面に', '二、', '三日を', '費やした。', 'ところが', '私が', '鎌倉に', '着いて', '三日と', '経た', 'ないうちに、', '私を', '呼び寄せた', '友達は、', '急に', '国元から', '帰れという', '電報を', '受け取った。', '電報には', '母が病気だからと', '断ってあったけれども', '友達は', 'それを', '信じなかった。', '友達は', 'かねてから', '国元に', 'いる', '親たちに', '勧ま', 'ない結婚を', '強いられていた。', '彼は', '現代の', '習慣から', 'いうと結婚', 'するには', 'あまり', '年が', '若過ぎた。', 'それに', '肝心の', '当人が', '気に入らなかった。', 'それで', '夏休みに', '当然', '帰るべきところを、', 'わざと', '避けて', '東京の', '近くで', '遊んでいたのである。', '彼は', '電報を', '私に', '見せて', 'どう', 'しようと相談を', 'した。', '私には', 'どうして', 'いいか', '分らなかった。', 'けれども', '実際', '彼の', '母が病気であると', 'すれば', '彼は', '固より', '帰るべきはずであった。', 'それで', '彼は', 'とうとう', '帰る事に', 'なった。', 'せっかく', '来た', '私は', '一人', '取り残された'
    ]

    const sentences = dummyData

    useEffect(() => {
        const yetRead = index < sentences.length - 1
        const doneRead = index === sentences.length - 1
        if (yetRead && reading.current) {
            if (!pausing) {
                additionalInterval.current = sentences[index].length * 20
                const updateIndex = setInterval(() => {
                    setIndex(index + 1)
                }, 200 + additionalInterval.current)
                return () => clearInterval(updateIndex)
            }
        } else if (doneRead && reading.current) {
            additionalInterval.current = sentences[index].length * 20
            const updateIndex = setInterval(() => {
                reading.current = false
                setIndex(null)
            }, 200 + additionalInterval.current)
            return () => clearInterval(updateIndex)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index, pausing])

    const onClickStart = () => {
        reading.current = true
        setIndex(0)
    }

    const onClickStop = () => {
        reading.current = false
        setPausingState(false)
        setIndex(null)
    }

    const onClickPause = () => {
        setPausingState(!pausing)
    }

    const onClickBack = () => {
        if (index !== 0) {
            setIndex(index - 1)
        }
    }

    const onClickNext = () => {
        if (index !== sentences.length - 1) {
            setIndex(index + 1)
        }
    }


    return (
        <Root>
            <SentencesWrapper>
                <ShowSentences
                    sentence={(index === null) ? null : sentences[index]}
                />
            </SentencesWrapper>
            <OperationPanelWrapper>
                <OperationPanel
                    onClickStart={onClickStart}
                    onClickStop={onClickStop}
                    reading={reading.current}
                    onClickPause={onClickPause}
                    pausing={pausing}
                    onClickBack={onClickBack}
                    onClickNext={onClickNext}
                />
            </OperationPanelWrapper>
        </Root>
)
}

export default Contents
