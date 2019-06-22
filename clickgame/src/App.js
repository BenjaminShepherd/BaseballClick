import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import baseballs from "./cards.json";
import "./App.css";

//create state component
class App extends Component {

  state = {
    baseballs,
    clickedBaseballIds: [],
    score: 0,
    goal: 8,
    status: ""
  };

  //shuffle the cards when user clicks 
  shuffleScoreCard = id => {
    let clickedBaseballIds = this.state.clickedBaseballIds;

    if (clickedBaseballIds.includes(id)) {
      this.setState({ clickedBaseballIds: [], score: 0, status: "You lost, game over. Time to Play again!" });
      return;
    } else {
      clickedBaseballIds.push(id)

      if (clickedBaseballIds.length === 8) {
        this.setState({ score: 8, status: "You Won! Click to play again!", clickedBaseballIds: [] });
        console.log('You Win');
        return;
      }

      this.setState({ baseballs, clickedBaseballIds, score: clickedBaseballIds.length, status: " " });

      for (let i = baseballs.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [baseballs[i], baseballs[j]] = [baseballs[j], baseballs[i]];
      }
    }
  }

  // run a map to loop through cards and produce the array
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Baseball Memory Game</h1>
          <p className="App-intro">
            Click on an image to earn points, but don't click on any more than once!
          </p>
        </header>
        <Score total={this.state.score}
          goal={8}
          status={this.state.status}
        />
        <Wrapper>
          {this.state.baseballs.map(baseball => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={baseball.id}
              key={baseball.id}
              image={baseball.image}
            />
          ))}
        </Wrapper>

      </div>
    );
  }
}

export default App;