import React, { Component } from 'react';
import Clock from './Clock';
import PrayerTimes from './PrayerTimes';
import Timer from './Timer';
import Background from '../../Images/bg.png';
import Axios from "axios";

import {
    Row
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
class FirstLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            prayer: [
                "00:00",
                "00:00",
                "00:00",
                "00:00",
                "00:00",
                "00:00"
            ]
        }
    }

    componentDidMount() {
        this.getPrayerTime();
        this.timerID = setInterval(() => {
            this.getPrayerTime();
        }, 3600000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    checkFormat(p) {
        if (p.length === 4) {
            p = '0' + p;
        }
        return p;
    }

    getPrayerTime() {
        const serialNumber = this.props.serialNumber;
        Axios.post('https://devMactiv.mybluemix.net/api/masjidBox/getPrayerTime',
            {
                serialNumber
            }).then(res => {
                console.log(res);
                if (res.status === 200) {
                    const pt = res.data;
                    this.setState({
                        prayer: [
                            this.checkFormat(pt.fajr),
                            this.checkFormat(pt.sunrise),
                            pt.zuhr,
                            pt.asr,
                            pt.maghrib,
                            pt.isya
                        ]
                    })
                }
            }).catch(err => {
                console.log("Serial Number Not Found");
            })
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
                            time={prayer[0]}
                            start="#ff3662"
                            end="#ff9daf"
                        />
                    </div>
                    <div style={layoutStyle.prayerStyle}>
                        <PrayerTimes
                            title="Syuruq"
                            time={prayer[1]}
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
                            time={prayer[2]}
                            start="#1ed6b4"
                            end="#8bf3dc"
                        />
                    </div>
                    <div style={layoutStyle.prayerStyle}>
                        <PrayerTimes
                            title="Ashar"
                            time={prayer[3]}
                            start="#0bc2e4"
                            end="#7be3fc"
                        />
                    </div>
                </Row>
                <Row>
                    <div style={layoutStyle.leftStyle}>
                        <Timer
                            prayer={prayer}
                            start="#b9e6f9"
                            end="#5bb3fd"
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


export default FirstLayout;