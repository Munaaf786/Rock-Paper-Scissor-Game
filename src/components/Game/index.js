import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Button from '../Button'
import GameResultView from '../GameResultView'
import 'reactjs-popup/dist/index.css'
import {
  MainContainer,
  ScoreContainer,
  ContentContainer,
  Heading,
  ScoreCardContainer,
  ParagraphScore,
  ScoreSpan,
  ItemsImagesContainer,
  PopUpContainer,
  PopUpButton,
  RulesImageContainer,
  RulesImage,
  CloseLineContainer,
  CloseLineButton,
} from './styledComponents'

class Game extends Component {
  state = {
    showResult: false,
    userChoice: {},
    apponentChoice: {},
    score: 0,
    resultMsg: '',
  }

  onClickPlayAgain = () => this.setState({showResult: false})

  onGetResult = () => {
    const {userChoice, apponentChoice, resultMsg} = this.state
    return (
      <GameResultView
        userChoice={userChoice}
        apponentChoice={apponentChoice}
        resultMsg={resultMsg}
        onClickPlayAgain={this.onClickPlayAgain}
      />
    )
  }

  onGetButtonId = (id, image) => {
    const {choicesList} = this.props
    const number = Math.floor(Math.random() * choicesList.length)
    if (choicesList[number].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        userChoice: [id, image],
        apponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMsg: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        userChoice: [id, image],
        apponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMsg: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        userChoice: [id, image],
        apponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMsg: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        userChoice: [id, image],
        apponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMsg: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        userChoice: [id, image],
        apponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMsg: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        userChoice: [id, image],
        apponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMsg: 'YOU WON',
      }))
    } else {
      this.setState({
        showResult: true,
        userChoice: [id, image],
        apponentChoice: choicesList[number],
        resultMsg: 'IT IS DRAW',
      })
    }
  }

  onGetImages = () => {
    const {choicesList} = this.props
    return (
      <ItemsImagesContainer>
        {choicesList.map(eachItem => (
          <Button
            key={eachItem.id}
            buttonDetails={eachItem}
            onGetId={this.onGetButtonId}
          />
        ))}
      </ItemsImagesContainer>
    )
  }

  render() {
    const {showResult, score} = this.state
    return (
      <MainContainer>
        <ContentContainer>
          <ScoreContainer>
            <Heading>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </Heading>
            <ScoreCardContainer>
              <ParagraphScore>Score</ParagraphScore>
              <ScoreSpan>{score}</ScoreSpan>
            </ScoreCardContainer>
          </ScoreContainer>
          {showResult ? this.onGetResult() : this.onGetImages()}
        </ContentContainer>
        <PopUpContainer>
          <Popup modal trigger={<PopUpButton type="button">Rules</PopUpButton>}>
            {close => (
              <RulesImageContainer>
                <CloseLineContainer>
                  <CloseLineButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </CloseLineButton>
                </CloseLineContainer>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesImageContainer>
            )}
          </Popup>
        </PopUpContainer>
      </MainContainer>
    )
  }
}

export default Game
