import React, { Component } from 'react'
import Layout from 'UI/Layout'
import Field from 'UI/Field'
import ControllPanel from 'UI/ControllPanel'
import Score from 'UI/Score'
import Button from 'UI/Button'
import {initCells} from 'logic'

class App extends Component {

    constructor(props){
        super(props);

        this.state = this.getNewState();
    }
newGame = () => {
        this.setState(this.getNewState())
}
    getNewState(){
        return{
            cells: initCells(),
            score: 0
        }
    }

    componentDidMount(){
        document.addEventListener('keypress', this.handleKeyPress)
    }

componentWillUnmount(){
    document.removeEventListener('keypress', this.handleKeyPress)
}

handleKeyPress = (event) => {

}



  render() {
const {cells, score} = this.state;
    return (
      <Layout>
          <ControllPanel>
              <Button onClick={this.newGame}>New game</Button>
              <Score>{score}</Score>
          </ControllPanel>
          <Field cells={cells} />
      </Layout>
    )
  }
}

export default App;
