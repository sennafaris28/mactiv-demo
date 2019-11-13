import React, { Component } from 'react';

var prayerStyle = {
    h2Style: {
        height: '94px',
        //fontFamily: 'Mont-SemiBold',
        fontFamily: 'Proxima-SemiBold',
        fontSize: '4.5rem',
        letterSpacing: '-2px',
        color: 'white',
        margin: '0',
        paddingTop: '0.5rem',
        textShadow: '4px 4px 15px rgba(0, 0, 0, 0.5)'
    },
    hrStyle: {
        width: '90%',
        margin: '0',
        borderTop: '4px solid white',
    },
    h1Style: {
        height: '152px',
        //fontFamily: 'Mont-Bold',
        fontFamily: 'Proxima-SemiBold',
        fontSize: '8.5rem',
        letterSpacing: '-2px',
        color: 'white',
        margin: '0',
        textShadow: '4px 4px 15px rgba(0, 0, 0, 0.5)'
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
                    background: 'linear-gradient(to right, ' + start + ', ' + end + ')',
                    boxShadow: '5px 5px 20px -10px rgba(0,0,0,0.75)'
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