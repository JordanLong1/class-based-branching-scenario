import React from 'react'; 
import { useHistory } from 'react-router';

import PropTypes from 'prop-types';
import diffStyles from '../Learning Images/diff-learning-styles.jpg';
import Confetti from 'react-confetti';

export const EndOfBranchDisplay = ({results}) => {

        let learningStyle; 
         let count = {}
        let compare = 0
        let mostFrequent; 
    
        for (let i = 0; i < results.length; i++) {
            let currentLetter = results[i];
    
            if (count[currentLetter] === undefined) {
                count[currentLetter] = 1;
            } else {
                count[currentLetter] = count[currentLetter] + 1;
            }
    
            if (count[currentLetter] > compare) {
                compare = count[currentLetter];
                mostFrequent = results[i];
            };
        };
       if (mostFrequent === 'A') {
           learningStyle = 'Visual';
       } else if (mostFrequent === 'B') {
           learningStyle = 'Kinesthetic';
       } else if (mostFrequent === 'C') {
           learningStyle = 'Hybrid (a combination of both visual and kinesthetic)';
       };

    
   const history = useHistory()
    return (
    <section className='ending-results-section'>
     <Confetti numberOfPieces={500} recycle={false}/>
          <section className='ending-results-section-header-top'>
             <h2>Congratulations!</h2>
            </section>
         <section className='ending-results-section-image-and-p-tags'>
            <img src={diffStyles} alt='Three different learning styles'></img>
                <p>You have made it to the end of the session.</p>
                 <p>Your learning style results are available below.</p>
                    <p>These results are accumulated by which option you chose for each question.</p>
        </section>
        <section className='ending-results-section-learning-display'>
            <p>It looks like you have a {learningStyle} learning style!</p>
            <button onClick={() => history.push('/')}>Go back home</button>
        </section>
    </section>
    )
}

EndOfBranchDisplay.propTypes = {
    results: PropTypes.array.isRequired
};