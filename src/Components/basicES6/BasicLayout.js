import React, { Component } from 'react';
import Clock from './Clock';
import PrayerTimes from './PrayerTimes';
import Background from '../../Images/bg.png';

import {
    Row,
    Col
} from 'reactstrap';

var layoutStyle = {
    rootStyle: {
        padding: '100px',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${Background})`
    },
    leftStyle: {
        width: '633px',
        height: '250px',
        marginRight: '77px',
        padding: '0'
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
        marginRight: '0',
        padding: '0'
    }
}
class BasicLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            prayer: {
                shubuh: "04.30",
                syuruq: "11.52",
                dzuhur: "11.52",
                ashar: "15.16",
                maghrib: "17.52",
                isya: "19.03"
            }
        }
    }


    render() {
        const prayer = this.state.prayer;
        return (
            <div className="" style={layoutStyle.rootStyle}>
                <Row>
                    <div
                        className="my-auto"
                        style={layoutStyle.leftStyle}
                    >
                        <Clock />
                    </div>
                    <div style={layoutStyle.prayerStyle}>
                        <PrayerTimes
                            title="Shubuh"
                            time={prayer.shubuh}
                            start="#ff3662"
                            end="#ff9daf"
                        />
                    </div>
                    <div style={layoutStyle.prayerStyle}>
                        <PrayerTimes
                            title="Syuruq"
                            time={prayer.syuruq}
                            start="#ffac15"
                            end="#fffe50"
                        />
                    </div>
                </Row>
                <Row>
                    <div style={layoutStyle.leftStyle}>
                        <p style={layoutStyle.verseStyle}>
                            "Sesungguhnya shalat itu<br></br>
                            mencegah dari perbuatan<br></br>
                            keji dan mungkar."
                            <br></br>
                            <b>(QS. Al'Ankabut[29]:45)</b>
                        </p>
                    </div>
                    <div style={layoutStyle.prayerStyle}>
                        <PrayerTimes
                            title="Dzuhur"
                            time={prayer.dzuhur}
                            start="#1ed6b4"
                            end="#8bf3dc"
                        />
                    </div>
                    <div style={layoutStyle.prayerStyle}>
                        <PrayerTimes
                            title="Ashar"
                            time={prayer.ashar}
                            start="#0bc2e4"
                            end="#7be3fc"
                        />
                    </div>
                </Row>
                <Row>
                    <div style={layoutStyle.leftStyle}>
                        <PrayerTimes
                            title="NEXT: Shubuh"
                            time="04:30:10"
                            start="#b9e6f9"
                            end="#5bb3fd"
                        />
                    </div>
                    <div style={layoutStyle.prayerStyle}>
                        <PrayerTimes
                            title="Maghrib"
                            time={prayer.maghrib}
                            start="#4977e7"
                            end="#74caf9"
                        />
                    </div>
                    <div style={layoutStyle.prayerStyle}>
                        <PrayerTimes
                            title="Isya'"
                            time={prayer.isya}
                            start="#c766f1"
                            end="#78cbff"
                        />
                    </div>
                </Row>
            </div>
        );
    }
}


export default BasicLayout;