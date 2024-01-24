import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUser } from '../../services/userService';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUser: []
        }
    }
    async componentDidMount() {
        let response = await getAllUser('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUser: response.users
            })
        }
        console.log('get user from node.js: ', response);
    }

    /** Life cycle
     *  Run component
     * 1. Run constructor -> init state
     * 2. DidMount (set state)
     * 3. Render
     * 
     *  
     */
    render() {
        let arrUser = this.state.arrUser;
        return (
            <div className="user-container">
                <div className='title text-center'>Manage users with conghoang</div>
                <div className='users-table mt-3 mx-2'>
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>

                        {
                            arrUser && arrUser.map((item, index) => {
                                console.log('check map', item, index);
                                return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className='btn-edit'><i class="fas fa-pencil-alt"></i></button>
                                            <button className='btn-delete'><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }



                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
