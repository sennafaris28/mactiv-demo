import React, { Component } from 'react';

var prayerStyle = {
    h2Style: {
        height: '94px',
        fontFamily: 'Mont-SemiBold',
        fontSize: '4rem',
        letterSpacing: '-3px',
        color: 'white',
        margin: '0',
        paddingTop: '1rem'
    },
    hrStyle: {
        width: '90%',
        margin: '0',
        borderTop: '4px solid white',
    },
    h1Style: {
        height: '152px',
        fontFamily: 'Mont-Bold',
        fontSize: '8rem',
        color: 'white',
        margin: '0'
    }
}

class PrayerTimes extends Component {

    render() {
        const start = this.props.start;
        const end = this.props.end;
        return (
            <div
                className="text-center"
                style={{
                    height: '250px',
                    borderRadius: '50px',
                    background: 'linear-gradient(to right bottom, ' + start + ', ' + end + ')'
                }}>
                <h2
                    style={prayerStyle.h2Style}>
                    {this.props.title.toUpperCase()}</h2>
                <hr
                    className="mx-auto"
                    style={prayerStyle.hrStyle}
                ></hr>
                <h1
                    style={prayerStyle.h1Style}>
                    {this.props.time}
                </h1>
            </div >
        );
    }

};

export default PrayerTimes;