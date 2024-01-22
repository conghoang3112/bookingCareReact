import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './login.scss';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPass: false
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = (event) => {
        console.log('username: ', this.state.username, 'password: ', this.state.password);
        console.log('all state : ', this.state);
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPass: !this.state.isShowPass
        })
    }
    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>UserName:</label>
                            <input type='text' className='form-control' placeholder='Enter your user name'
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUsername(event)}
                            />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password:</label>
                            <div className='custom-input-pass'>
                                <input
                                    type={(this.state.isShowPass ? 'text' : 'password')}
                                    className='form-control' placeholder='Enter your password'
                                    onChange={(event) => this.handleOnChangePassword(event)}
                                />
                                <span
                                    onClick={(event) => this.handleShowHidePassword(event)}>
                                    <i className={(this.state.isShowPass ? "fas fa-eye" : "fas fa-eye-slash")}></i>
                                </span>

                            </div>
                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={(event) => { this.handleLogin() }}>Login</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot password ?</span>
                        </div>
                        <div className='col-12 text-center mt-4'>
                            <span className='text-other-login'>Or login with:</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
