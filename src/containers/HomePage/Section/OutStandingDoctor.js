import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import '../HomePage.scss';
import * as actions from "../../../store/actions";
import { LANGUAGES } from '../../../utils';

class OutStandingDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrDoctor: []
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
            this.setState({
                arrDoctor: this.props.topDoctorsRedux
            })
        }
    }
    componentDidMount() {
        this.props.loadTopDoctors();
    }
    render() {
        let { language } = this.props;
        console.log('check topDoctorsRedux: ', this.props.topDoctorsRedux)
        let arrDoctor = this.state.arrDoctor;
        arrDoctor = arrDoctor.concat(arrDoctor).concat(arrDoctor);
        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'><FormattedMessage id="homepage.out-standing-doctor" /></span>
                        <button className='btn-section'><FormattedMessage id="homepage.more-infor" /></button>
                    </div>

                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            {arrDoctor && arrDoctor.length > 0
                                && arrDoctor.map((item, index) => {
                                    let imageBase64 = '';
                                    if (item.image) {
                                        imageBase64 = new Buffer(item.image, 'base64').toString('binary');
                                        // `data:image/png;base64,${imageBuffer.toString('base64')}`
                                    }
                                    if (index === 0) {
                                        console.log('check item: ', item);
                                    }
                                    let nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName} `
                                    let nameEn = `${item.positionData.valueEn}, ${item.lastName} ${item.firstName}`
                                    return (
                                        <div className='section-customize' key={index}>
                                            <div className='customize-boder'>
                                                <div className='outer-bg'>
                                                    <div className='bg-image section-outstanding-doctor'
                                                        style={{ backgroundImage: `url(${imageBase64})` }}
                                                    />
                                                </div>
                                                <div className='position text-center'>
                                                    <div>{language === LANGUAGES.VI ? nameVi : nameEn}</div>
                                                    <div>Cơ xương khớp</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </Slider>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
        topDoctorsRedux: state.admin.topDoctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctor()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
