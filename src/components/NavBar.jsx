import React from 'react'; 

class NavBar extends React.Component {
    render() {
        return (
                <section className='header'>
                    <section className='header-top'>
                        <section className='header-top_home-email-route'>
                        <h1>Branching Scenario</h1>
                        <a href='/'>Home</a>
                        </section>
                    </section>
                </section>    
        )
    }
}

export default NavBar;