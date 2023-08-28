import React, { Component } from 'react'
import UserService from '../services/UserService'

export default class ListUsersComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
                users: []
        }
    }

    componentDidMount(){
        UserService.getUsers().then((res) => {
            this.setState({users: res.data})
        });
    }
  render() {
    return (
      <div>
        <h2 className="text-center">Users List</h2>
        <div className="row">
            <table className="table table-stripped table-bordered">
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map(
                            user => 
                            <tr key ={user.id}>
                                <td>
                                    {user.id}
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {user.role}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}