import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss'
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import '../HomePage.scss';

class MedicalFacility extends Component {

    render() {

        return (
            <div className='section-share section-medical-facility'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'><FormattedMessage id="homepage.outstanding-medical-facilities" /></span>
                        <button className='btn-section'><FormattedMessage id="homepage.more-infor" /></button>
                    </div>

                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility' />
                                <div>HỆ THỐNG Y TẾ THU CÚC 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility' />
                                <div>HỆ THỐNG Y TẾ THU CÚC 2</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility' />
                                <div>HỆ THỐNG Y TẾ THU CÚC 3</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility' />
                                <div>HỆ THỐNG Y TẾ THU CÚC 4</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility' />
                                <div>HỆ THỐNG Y TẾ THU CÚC 5</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility' />
                                <div>HỆ THỐNG Y TẾ THU CÚC 6</div>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
