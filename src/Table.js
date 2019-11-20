import React, { Component } from 'react';

// Functional component
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>No.</th>
                <th>Name</th>
                <th>City</th>
                <th>Phone Number</th>
                <th>&nbsp;</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    // Declarative code
    const rows = props.usersDetail.map( (user, index) => {
        return (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{user.name}</td>
                <td>{user.city}</td>
                <td>{user.phone}</td>
                <td>
                    <button className="btn btn-sm btn-danger" onClick={ () => props.removeUser(index) }>Delete</button>
                </td>
            </tr>
        );
    })

    return (
        <tbody>{rows}</tbody>
    );
}

class Table extends Component {
    render() {
        const { usersDetail, delUser } = this.props;
        
        return(
            <table className="table table-striped table-dark mt-3">
                <TableHeader />
                <TableBody usersDetail={usersDetail} removeUser={delUser} />
            </table>
        );
    }
}

export default Table;