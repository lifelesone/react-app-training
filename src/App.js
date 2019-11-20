import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
    state = {
        users: [
            {
                name: 'Kenny',
                city: 'Petaling Jaya'
            },
            {
                name: 'Goh',
                city: 'Cyberjaya'
            },
            {
                name: 'Sarah',
                city: 'Bangi'
            },
            {
                name: 'Natalia',
                city: 'Penang'
            },
        ],
    };

    removeUser = (index) => {
        const users = this.state.users;

        // Remove | Change the state
        this.setState({
            users: users.filter( (user, i) => {
                return ( i !== index );
            })
        });
    }

    render() {
        return (
            <div className="container">
                <h1>Hello React!</h1>
                <Table usersDetail={this.state.users} delUser={ this.removeUser }/>
            </div>
        );
    }
}

export default App;