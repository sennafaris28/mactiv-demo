import React, { Component } from 'react';

const clockStyle = {
    rootStyle: {
        fontFamily: 'Proxima-Regular',
        color: 'white',
        margin: '0',
        padding: '0',
    },
    h1Style: {
        fontFamily: 'Proxima-SemiBold',
        fontSize: '11rem',
        lineHeight: '0.7',
        letterSpacing: '-6px',
        margin: '0'
    },
    hrStyle: {
        borderTop: '5px solid white',
    },
    h2Style: {
        fontSize: '4.2rem'
    },
    h3Style: {
        fontSize: '7rem',
        lineHeight: '0.7',
        letterSpacing: '-4px',
        margin: '0'
    }
}

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        //setInterval(() => this.currentTime(), 1000);
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    addZero(number) {
        if (number < 10) {
            number = "0" + number;
        }
        return number;
    }

    convertDay(day) {
        switch (day) {
            case 1:
                return "SENIN"
            case 2:
                return "SELASA"
            case 3:
                return "MINGGU"
            case 4:
                return "KAMIS"
            case 5:
                return "JUM'AT"
            case 6:
                return "SABTU"
            case 7:
                return "MINGGU"
            default:
                break;
        }
    }

    getMeridiem(hour) {
        if (hour < 12) {
            return "AM"
        }
        return "PM"
    }

    render() {
        const date = this.state.date;
        var hour = date.getHours();
        if (hour >= 24) {
            hour = 0;
        }

        return (
            <div
                className="text-center"
                style={clockStyle.rootStyle}
            >
                <div className="list-inline">
                    <h1 className="list-inline-item"
                        style={clockStyle.h1Style}
                    >
                        {this.addZero(hour)}.
                        {this.addZero(date.getMinutes())}
                    </h1>
                    <h3
                        className="list-inline-item"
                        style={clockStyle.h3Style}
                    >
                        {this.getMeridiem(hour)}
                    </h3>
                </div>
                <hr
                    className="mx-auto"
                    style={clockStyle.hrStyle}
                ></hr>
                <h2
                    style={clockStyle.h2Style}
                >
                    <b>{this.convertDay(date.getDay())}</b> I
                    {' ' + this.addZero(date.getDate())}/{this.addZero(date.getMonth())}/{date.getFullYear()}
                </h2>
            </div>
        );
    }

};

export default Clock;