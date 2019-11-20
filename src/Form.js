import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props) // to use 'this' and access parent properties

        this.initialState = {
            name: '',
            city: '',
            phone: ''
        };

        //Set the initial state
        this.state = this.initialState;
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        //console.log(name + ':' + value);
        // Change the state from the default to a specific value typed
        this.setState({
            [name]: value
        });
    }

    handleSubmit = () => {
        this.props.handleSubmit(this.state); // passing form state to handleSubmit
        this.setState(this.initialState);
    }

    render() {
        return (
            <div className="card">
                <h5 className="card-header bg-dark text-white">Add a User</h5>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Name" className="form-control" value={this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="city" placeholder="City" className="form-control" value={this.state.city} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="phone" placeholder="Phone" className="form-control" value={this.state.phone} onChange={this.handleChange}/>
                        </div>
                        <button type="button" className="btn btn-outline-dark btn-sm" onClick={this.handleSubmit}>Create</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;