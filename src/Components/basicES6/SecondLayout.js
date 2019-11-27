import React, { Component } from 'react';
import Clock2 from './Clock2';
import PrayerTimes from './PrayerTimes';
import Timer from './Timer';
import Background from '../../Images/bg.png';
// import Axios from "axios";

import {
    Row
} from 'reactstrap';

var layoutStyle = {
    rootStyle: {
        padding: '100px',
        width: '100%',
        height: '100vh',
        // backgroundImage: `url(${Background})`
        background: '#000'
    }, 
    leftStyle: {
        width: '633px',
        // height: '20px',
        marginRight: '77px',
        padding: '0',
        color: 'white',
    },
    rightStyle: {
        width: '440px',
        // height: '20px',
        padding: '0',
        marginLeft: '560px',
    },
    verseStyle: {
        height: '265px',
        fontFamily: 'Mont-Regular',
        fontSize: '2.8rem',
        color: 'white'
    },
    prayerStyle: {
        width: '440px',
        marginLeft: '65px',
        marginBottom: '65px',
        marginRight: '70px',
        padding: '0'
    },
    lineStyle: {
        border: '1px solid white',
        margin: '20px'
    }
}

class SecondLayout extends Component {

    // constructor(props) {
    //     super(props);
    //
    // }

    render() {
        const prayer = this.props.prayer;
        return (
            <div className="" style={layoutStyle.rootStyle}>
                <Row>
                    <div
                        style={layoutStyle.leftStyle}
                    >
                        <h1>Nama Masjid</h1>
                        <h2>Lokasi Masjid</h2>
                    </div>
                    <div
                        style={layoutStyle.rightStyle}
                    >
                        <Clock2 />
                    </div>
                    {/*<div*/}
                    {/*    className="my-auto"*/}
                    {/*    style={layoutStyle.leftStyle}*/}
                    {/*>*/}
                    {/*    <Clock />*/}
                    {/*</div>*/}

                    {/*<div style={layoutStyle.prayerStyle}>*/}
                    {/*    <PrayerTimes*/}
                    {/*        title="Syuruq"*/}
                    {/*        time={prayer[1]}*/}
                    {/*        start="#ffac15"*/}
                    {/*        end="#fffe50"*/}
                    {/*    />*/}
                    {/*</div>*/}
                </Row>
                <div>
                    <hr style={layoutStyle.lineStyle}>
                    </hr>
                </div>
                <Row>
                    <div style={layoutStyle.prayerStyle}>
                        <PrayerTimes
                            title="Shubuh"
                            time={prayer[0]}
                            start="#ff3662"
                            end="#ff9daf"
                        />
                    </div>
                    <div style={layoutStyle.prayerStyle}>
                        <PrayerTimes
                            title="Shuruq"
                            time={prayer[1]}
                            start="#ff3662"
                            end="#ff9daf"
                        />
                    </div>
                    <div style={layoutStyle.prayerStyle}>
                        <PrayerTimes
                            title="Dzuhur"
                            time={prayer[2]}
                            start="#1ed6b4"
                            end="#8bf3dc"
                        />
                    </div>
                </Row>
                <Row>
                    <div style={layoutStyle.prayerStyle}>
                        <PrayerTimes
                            title="Ashar"
                            time={prayer[3]}
                            start="#0bc2e4"
                            end="#7be3fc"
                        />
                    </div>
                    <div style={layoutStyle.prayerStyle}>
                        <PrayerTimes
                            title="Maghrib"
                            time={prayer[4]}
                            start="#4977e7"
                            end="#74caf9"
                        />
                    </div>
                    <div style={layoutStyle.prayerStyle}>
                        <PrayerTimes
                            title="Isya'"
                            time={prayer[5]}
                            start="#c766f1"
                            end="#78cbff"
                        />
                    </div>
                </Row>
            </div>
        );
    }
}


export default SecondLayout;