import React from 'react';
import {questionsAndOptions} from '../QuestionBank/index';
import { EndOfBranchDisplay } from './EndOfBranchDisplay';
import QuestionPresentation from './QuestionPresentation'

class QuestionLogic extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            currentQuestion: questionsAndOptions[0], 
            endOfBranch: false, 
            results: []
        }
        
    }
    
     handleClick = (event) => {
        this.handleClickHelper(event);
        let pointsToValue = event.target.id; 
        pointsToValue = parseInt(event.target.id, 10);
        let nextQuestion = questionsAndOptions.find(question => question.questionId === pointsToValue);
        pointsToValue !== 0 ?  this.setState({currentQuestion: nextQuestion}) : this.setState({endOfBranch: true});
    };

     handleClickHelper = (event) => {
        const answerType = event.target.attributes[1].nodeValue; 
        let resultArray = [...this.state.results];
        resultArray.push(answerType);
        this.setState({
            results: resultArray
        })
    };

    getOptionsIntoList = () => {
       return this.state.currentQuestion.options.map((option, index) => {
           return <li key={index} id={option.pointsTo} typeofanswer={option.typeOfAnswer} onHandleClick={this.handleClick}>{option.optionTitle}</li>
        });
    };

    render() {
        return (
            <section className='question-container'>
              <QuestionPresentation questionTitle={this.state.currentQuestion.questionTitle} questionImg={this.state.currentQuestion.questionImage} children={this.getOptionsIntoList} endOfBranch={this.state.endOfBranch}/>
                 {this.state.endOfBranch === true ? <EndOfBranchDisplay results={this.state.results} /> : null}
            </section>
        );
    };
};

export default QuestionLogic;