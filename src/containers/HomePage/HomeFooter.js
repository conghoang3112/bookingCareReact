import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class HomeFooter extends Component {


    render() {

        return (
            <div className='home-footer'>
                <p>&copy; 2024 Coding by Cong Hoang</p>
                <p><a target='_blank' href='https://github.com/conghoang3112/bookingCareReact'>&#8594;View code FE in GIT&#8592;</a>
                    <a target='_blank' href='https://github.com/conghoang3112/bookingCare'>&#8594;View code BE in GIT&#8592;</a></p>
            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
