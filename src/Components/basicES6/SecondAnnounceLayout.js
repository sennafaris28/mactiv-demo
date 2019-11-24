import React, { Component } from "react";
import AnnounceBox from "./AnnounceBox";
import PrayerTimes2 from "./PrayerTimes2";
import Clock2 from "./Clock2";

const style = {
    rootStyle: {
        position: 'absolute',
        left: '0px',
        top: '0px',
        zIndex: '100',
        fontFamily: 'Proxima-SemiBold',
        display: 'flex',
        flexDirection: 'column',
        padding: '50px',
        width: '100%',
        height: '100vh',
        background: 'linear-gradient(to bottom, #1E3860, #101F33)',

    },
    boxStyle: {
        height: '150px',
        padding: '0px',
    },
    line: {
        borderLeft: 'thick solid #ff0000',
        borderColor: 'white',
        borderLeftStyle: 'dashed'
    },
    h1Style: {
        fontSize: '100px',
        color: '#F3D689',
        margin: '0',
        textShadow: '4px 4px 15px rgba(0, 0, 0, 0.5)',
    },
    h2Style: {
        fontSize: '8rem',
        color: 'white',
        textShadow: '4px 4px 15px rgba(0, 0, 0, 0.5)',
        margin: '0',
    }
}

class SecondAnnounceLayout extends Component {

    render() {
        const prayer = this.props.prayer;
        return (
            <div
                className="text-center"
                style={style.rootStyle}
            >
                <h1
                    style={style.h1Style}
                >
                    MASJID AL-HIDAYAH BOGOR
                </h1>
                <div
                    className="my-5" 
                    style={{height: '575px'}}>
                    <AnnounceBox />
                </div>
                <div
                    className="row text-center d-flex justify-content-around align-middle"
                    style={style.boxStyle}>
                        <div className="col-8 my-auto" >
                            <div className="row d-flex justify-content-between">
                                <PrayerTimes2
                                    title="Shubuh"
                                    time={prayer[0]}
                                    />
                                <PrayerTimes2
                                    title="Dzuhur"
                                    time={prayer[2]}
                                    />
                                <PrayerTimes2
                                    title="Ashar"
                                    time={prayer[3]}
                                    />
                                <PrayerTimes2
                                    title="Maghrib"
                                    time={prayer[4]}
                                    />
                                <PrayerTimes2
                                    title="Isya'"
                                    time={prayer[5]}
                                    />
                            </div>
                        </div>
                        <div className="col-3 p-0 my-auto" style={style.line} >
                                <Clock2 />
                        </div>
                </div>
            </div>
        );
    }
}


export default SecondAnnounceLayout;