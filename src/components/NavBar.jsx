import React from 'react'; 

class NavBar extends React.Component {
    render() {
        return (
                <section className='header'>
                    <div className='header-top'>
                        <div className='header-top_home-email-route'>
                        <h1>Branching Scenario</h1>
                        <a href='/'>Home</a>
                        </div>
                    </div>
                </section>    
        )
    }
}

export default NavBar;