import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton';
class QuizQuestion extends Component{


  handleClick(buttonText) {
    if (buttonText===this.props.quiz_question.answer){
      this.props.showNextQuestionHandler();
    }
  }

  render(){

    let ansOptions = this.props.quiz_question.answer_options;



    return(
      <main>
        <section>
          <p>
            {this.props.quiz_question.instruction_text}
          </p>
        </section>
        <section className={"buttons"}>
          <ul>
             {ansOptions.map((index) => {
               // console.log(index);
               // console.log(ansOptions)
                return <QuizQuestionButton clickHandler = {this.handleClick.bind(this)} button_text = {index}/>
                }
              )
             }


            {/*<QuizQuestionButton button_text = {this.props.quiz_question.answer_options[0]}/>*/}
            {/*<li>{ansOptions[0]}</li>*/}
            {/*//quiz question button logic goes here*/}
          </ul>
        </section>
      </main>
    )
  }
}


export default QuizQuestion;