import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {


    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Video về conghoang3112
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="70%" height="400px"
                            src="https://www.youtube.com/embed/lVkHXrKxWDo"
                            title="3107 2 - DuongG x NÂU x W/N | Cover"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
                        </iframe>
                    </div>
                    <div className='content-right'>

                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
