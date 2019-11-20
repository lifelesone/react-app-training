import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Header from './Header';

class App extends Component {
    state = {
        users: [],
    };

    // Remove existing users
    removeUser = (index) => {
        // const users = this.state.users;
        const { users } = this.state; // Another way of writing - same like importing component at the top

        // Remove | Change the state
        this.setState({
            users: users.filter( (user, i) => {
                return ( i !== index );
            })
        });
    }

    // Create a new user
    addUser = (newUserObj) => {
        // Add a user data into user array
        this.setState({
            users: [...this.state.users,  newUserObj]
        });
    }

    render() {
        return (
            <div>
                <Header siteName="User Add"/>
                    
                <div className="container mt-4">
                    <Form handleSubmit={this.addUser} />
                    <Table usersDetail={this.state.users} delUser={ this.removeUser }/>
                </div>
            </div>
        );
    }
}

export default App;