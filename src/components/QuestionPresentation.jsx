import React from 'react'; 
import PropTypes from 'prop-types';

function QuestionPresentation({questionTitle, questionImg, children, endOfBranch}) {
    let createListOfOptions;
    
    if (children().length > 0 && endOfBranch !== true) {
        createListOfOptions = children().map((option, index) => {
            return <li key={index} id={option.props.id} typeofanswer={option.props.typeofanswer} onClick={option.props.onHandleClick}>{option.props.children}</li>
        })
    } 

    return (
        <section className='question-section'>
        {endOfBranch !== true ? 
            <section>
                 <h4>{questionTitle}</h4>
            <div className='image-section'><img src={questionImg} alt='' ></img></div>
                <ul>
                {createListOfOptions}
                </ul>
            </section>
             : null}
        </section>
    )
}

export default QuestionPresentation

QuestionPresentation.propTypes = {
    questionTitle: PropTypes.string.isRequired, 
    questionImg: PropTypes.string.isRequired, 
    children: PropTypes.func.isRequired, 
    endOfBranch: PropTypes.bool.isRequired
};