import React, { Component } from 'react';

const clockStyle = {
    rootStyle: {
        fontFamily: 'Mont-SemiBold',
        color: 'white',
        margin: '0',
        padding: '0'
    },
    h1Style: {
        fontFamily: 'Mont-Bold',
        fontSize: '10rem',
        lineHeight: '0.7',
        margin: '0'
    },
    hrStyle: {
        borderTop: '5px solid white',
    },
    h2Style: {
        fontSize: '4.2rem'
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
        var res = "";
        if (number < 10) {
            res = "0";
        }
        return res;
    }

    convertDay(day) {
        switch (day) {
            case 1:
                return "SENIN"
            case 2:
                return "SELASA"
            case 3:
                return "RABU"
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
    render() {
        const date = this.state.date;
        return (
            <div
                className="text-center"
                style={clockStyle.rootStyle}
            >
                <h1
                    style={clockStyle.h1Style}
                >
                    {date.getHours()}.
                    {date.getMinutes()}.
                    {this.addZero(date.getSeconds())}
                    {date.getSeconds()}
                </h1>
                <hr
                    className="mx-auto"
                    style={clockStyle.hrStyle}
                ></hr>
                <h2
                    style={clockStyle.h2Style}
                >
                    <b>{this.convertDay(date.getDay())}</b> I
                    {' ' + date.getDate()}/{date.getMonth()}/{date.getFullYear()}
                </h2>
            </div>
        );
    }

};

export default Clock;