import React, { Component } from 'react';

var prayerStyle = {
    h2Style: {
        //height: '94px',
        //fontFamily: 'Mont-SemiBold',
        fontFamily: 'Proxima-Regular',
        fontSize: '60px',
        letterSpacing: '-2px',
        lineHeight: '.8',
        color: '#F3D689',
        margin: '0',
        paddingTop: '0.5rem',
        textShadow: '4px 4px 15px rgba(0, 0, 0, 0.5)'
    },
    h1Style: {
        //height: '152px',
        fontFamily: 'Proxima-SemiBold',
        fontSize: '80px',
        letterSpacing: '-2px',
        lineHeight: '1',
        color: 'white',
        margin: '0',
        textShadow: '4px 4px 15px rgba(0, 0, 0, 0.5)'
    }
}

class PrayerTimes2 extends Component {

    render() {
        var timeA = this.props.time;
        var time = timeA.replace(/:/g, ".");
        return (
            <div
                className="text-center">
                <h2
                    style={prayerStyle.h2Style}>
                    {this.props.title.toUpperCase()}</h2>
                <h1
                    style={prayerStyle.h1Style}>
                    {time}
                </h1>
            </div >
        );
    }

};

export default PrayerTimes2;