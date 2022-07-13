import React, {Component} from 'react';
class QuizQuestionButton extends Component{

  handleClick (){this.props.clickHandler(this.props.button_text)}

  render(){
    return(
      <li>
        <button onClick={this.handleClick.bind(this)}>
          {/*{console.log(this.props.button_text)}*/}
          {this.props.button_text}
        </button>
      </li>
    )

  };

}



export default QuizQuestionButton;