import React from 'react'; 
// import history from './history'


    class LandingPage extends React.Component {
        handleClick = () => {
         
           this.props.history.push('/displayquestion');
       };
   
        render() {
            return (
                <section className='landing-page-container'>
                <h1>Welcome to Jordan Long's Branching Scenario</h1>
                <p>We are going to assess your learning style!</p>
                <button onClick={this.handleClick}>Get Started</button>
                </section>
            ); 
        }
};

export default LandingPage; 