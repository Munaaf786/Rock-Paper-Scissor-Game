import styled from 'styled-components'

import {PlayAgainButton} from '../GameResultView/styledComponents'

export const MainContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  padding: 48px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ScoreContainer = styled.div`
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;
  width: 100%;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(100%, 1100px);
  margin-bottom: 24px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 1.5;
`

export const ScoreCardContainer = styled.div`
  margin: 15px;
  background-color: #ffffff;
  border-radius: 10px;
  width: 100px;
  padding: 5px;
`

export const ParagraphScore = styled.p`
  font-family: 'Bree Serif';
  color: #000000;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  margin: 0;
`

export const ScoreSpan = styled.p`
  color: #000000;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  font-family: 'Roboto';
  margin: 0;
`

export const ItemsImagesContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0;
  width: 80%;
  height: 50%;
`

export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
`

export const PopUpButton = styled(PlayAgainButton)`
  width: 100px;
`

export const RulesImageContainer = styled.div`
  padding: 18px;
`

export const RulesImage = styled.img`
  width: 100%;
`
export const CloseLineButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: 25px;
  outline: none;
`

export const CloseLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
