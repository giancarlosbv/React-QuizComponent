import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton';
class QuizQuestion extends Component{

  constructor(props){
  super(props);
  this.state = {incorrectAnswer: false}
};

  handleClick(buttonText) {
    if (buttonText===this.props.quiz_question.answer){
      this.props.showNextQuestionHandler();
      this.setState({incorrectAnswer: false});
    } else {
      this.setState({incorrectAnswer:true});
    }
  }

  render(){

    // let ansOptions = this.props.quiz_question.answer_options;



    return(
      <main>
        <section>
          <p>
            {this.props.quiz_question.instruction_text}
          </p>
        </section>
        <section className={"buttons"}>
          <ul>
             {this.props.quiz_question.answer_options.map((answer_option,index) => {
               // console.log(index);
               // console.log(ansOptions)
                return <QuizQuestionButton key = {index} clickHandler = {this.handleClick.bind(this)} button_text = {answer_option}/>
                }
              )
             }


            {/*<QuizQuestionButton button_text = {this.props.quiz_question.answer_options[0]}/>*/}
            {/*<li>{ansOptions[0]}</li>*/}
            {/*//quiz question button logic goes here*/}
          </ul>
        </section>
        {this.state.incorrectAnswer?<p className = "error">Sorry, that's not right</p>:null}
      </main>
    )
  }
}


export default QuizQuestion;