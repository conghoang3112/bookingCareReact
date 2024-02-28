import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './Specialty.scss';

// Import css files
import Slider from 'react-slick';



class Specialty extends Component {


    render() {

        return (
            <div className='section-share section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'><FormattedMessage id="homepage.popular-specialties" /></span>
                        <button className='btn-section'><FormattedMessage id="homepage.more-infor" /></button>
                    </div>

                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <div>Cơ xương khớp1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <div>Cơ xương khớp2</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <div>Cơ xương khớp3</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <div>Cơ xương khớp4</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <div>Cơ xương khớp5</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <div>Cơ xương khớp6</div>
                            </div>

                        </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
