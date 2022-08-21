import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

class Square extends React.Component {
  render() {
    return (
      /*
      By calling this.setState from an onClick handler in the Square’s render 
      method, we tell React to re-render that Square whenever its <button> is 
      clicked.
      */
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}
class Board extends React.Component {
  /*
  In JavaScript classes, you need to always call super when defining the 
  constructor of a subclass. All React component classes that have a 
  constructor should start with a super(props) call.
  */
  constructor(props) {
    super(props);
    this.state = { Square: Array(9).fill(null) };
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.Square[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
